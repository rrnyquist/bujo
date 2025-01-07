'use strict';

var obsidian = require('obsidian');

/* The base structure of this file was originally Hotkeys++, created by Argentina Ortega Sainz. It was modified by Richard Nyquist for the purpose of Rapid Logging bullet cycling.*/
/* https://argentinaos.com */


var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var RapidLogging = /** @class */ (function (_super) {
    __extends(RapidLogging, _super);
    function RapidLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RapidLogging.prototype.onload = function () {
        var _this = this;
        console.log('Loading RapidLogging plugin');
        
        this.addCommand({
            id: 'toggle-task',
            name: 'Toggle task lists',
            callback: function () { return _this.toggleTodos(); },
            hotkeys: [
                {
                    modifiers: ['Mod'],
                    key: 'm',
                },
            ],
        });

    
    };
    RapidLogging.prototype.cleanSelected = function () {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view)
            return;
        var editor = view.editor;
        var selectedText = this.getSelectedText(editor);
        var newString = selectedText.content.trim().replace(/(\r\n|\n|\r)/gm, ' ');
        newString = newString.replace(/  +/gm, ' ');
        editor.replaceRange(newString, selectedText.start, selectedText.end);
    };
    RapidLogging.prototype.onunload = function () {
        console.log('Unloading RapidLogging plugin');
    };
    RapidLogging.prototype.getSelectedText = function (editor) {
        if (editor.somethingSelected()) {
            // Toggle to-dos under the selection
            var cursorStart = editor.getCursor('from');
            var cursorEnd = editor.getCursor('to');
            var content = editor.getRange({ line: cursorStart.line, ch: 0 }, { line: cursorEnd.line, ch: editor.getLine(cursorEnd.line).length });
            return {
                start: { line: cursorStart.line, ch: 0 },
                end: {
                    line: cursorEnd.line,
                    ch: editor.getLine(cursorEnd.line).length,
                },
                content: content,
            };
        }
        else {
            // Toggle the todo in the line
            var lineNr = editor.getCursor().line;
            var contents = editor.getDoc().getLine(lineNr);
            var cursorStart = {
                line: lineNr,
                ch: 0,
            };
            var cursorEnd = {
                line: lineNr,
                ch: contents.length,
            };
            var content = editor.getRange(cursorStart, cursorEnd);
            return { start: cursorStart, end: cursorEnd, content: content };
        }
    };

    RapidLogging.prototype.toggleElement = function (re, subst) {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view)
            return;
        var editor = view.editor;
        var selection = editor.somethingSelected();
        var selectedText = this.getSelectedText(editor);
        var newString = selectedText.content.replace(re, subst);
    
        // Get the line of the selected text
        var line = editor.getLine(selectedText.start.line);
        var cursorPos = editor.getCursor(); // Get the cursor position as an object { line, ch }

        // Replace the range with the new string
        editor.replaceRange(newString, selectedText.start, selectedText.end);

        // Keep the cursor in an appropriate position
        editor.setCursor(selectedText.start.line, (newString.length - line.length) + cursorPos.ch);
        
    };
    RapidLogging.prototype.toggleTodos = function () {
        // * [ ] todo
        // * [x] done
        // * [o] event
        // * [-] note
        // * [>] migrated
        // * [<] scheduled
        // * [~] canceled
        // Defaults to dashes, but keeps in whatever bullet style you originally chose.
        var re = /(^\s*|^\t*)(\*\s\[\s\]\s|\*\s\[x\]\s|\*\s\[o\]\s|\*\s\[\-\]\s|\*\s\[>\]\s|\*\s\[<\]\s|\*\s\[~\]\s|-\s\[\s\]\s|-\s\[x\]\s|-\s\[o\]\s|-\s\[\-\]\s|-\s\[>\]\s|-\s\[<\]\s|-\s\[~\]\s|\*\s|-\s|\d*\.\s|\*\s|\b|)([^\n\r]*)/gim;
        return this.toggleElement(re, this.replaceTodoElement);
    };

    RapidLogging.prototype.replaceTodoElement = function (match, spaces, startText, sentence) {
        // console.log(startText);
        if (startText === '* [ ] ') {
            return spaces + '* [x] ' + sentence;
        }
        else if (startText === '* [x] ') {
            return spaces + '* [o] ' + sentence;
        }
        else if (startText === '* [o] ') {
            return spaces + '* [-] ' + sentence;
        }
        else if (startText === '* [-] ') {
            return spaces + '* [>] ' + sentence;
        }
        else if (startText === '* [>] ') {
            return spaces + '* [<] ' + sentence;
        }
        else if (startText === '* [<] ') {
            return spaces + '* [~] ' + sentence;
        }
        else if (startText === '* [~] ') {
            return spaces + '* [ ] ' + sentence;
        }
        else if (startText === '- [ ] ') {
            return spaces + '- [x] ' + sentence;
        }
        else if (startText === '- [x] ') {
            return spaces + '- [o] ' + sentence;
        }
        else if (startText === '- [o] ') {
            return spaces + '- [-] ' + sentence;
        }
        else if (startText === '- [-] ') {
            return spaces + '- [>] ' + sentence;
        }
        else if (startText === '- [>] ') {
            return spaces + '- [<] ' + sentence;
        }
        else if (startText === '- [<] ') {
            return spaces + '- [~] ' + sentence;
        }
        else if (startText === '- [~] ') {
            return spaces + '- [ ] ' + sentence;
        }
        else {
            return spaces + '- [ ] ' + sentence;
        }

    };

    return RapidLogging;
}(obsidian.Plugin));

module.exports = RapidLogging;
  
/* nosourcemap */