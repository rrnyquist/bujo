# The BuJo CSS Snippet for Obsidian
I recently came across the [Bullet Journal Method](https://bulletjournal.com/). Something that impressed me about this method was how simple the basic tenets of the "rapid logging" system were: just a few types of bullets, each one quick to handwrite and easy to read. All the non-actionable bullet items take up the space of a block letter, while the actionable ones (the bullets) are pretty easy to pick out. Instantly, I wanted to implement the format into my favorite note-taking app, [Obsidian](https://obsidian.md/). Although some of the same bullet formatting tecniques already exist in a wonderful Obsidian theme called [Minimal](https://minimal.guide/home/) (I highly recommend you go check it out), I decided the formatting syntax needed to be _just so_; and so I decided to [make something from scratch](https://x.com/vincentdnl/status/1268573228626333703). 

If you like the bullet journal method, you are now able to get that "BuJo" look with just a few lines of CSS code from this repo. It has been tested on both the default and Minimal themes. 

Enjoy!

# Getting Started
Place bujo.css in your `.obsidian > snippets` directory, and enable it from Obsidian's `Settings > Appearance` menu.
For more information on adding CSS snippets, see [this guide](https://help.obsidian.md/Extending+Obsidian/CSS+snippets).

The BuJo syntax is a modified version of the default task list (checkboxes). In _Reader_ mode, only the "todo" (`- [ ]`) and "done" (`- [x]`) checkboxes may be toggled, while all other symbols remain locked. In _Live Editor_ mode, any bullet can be toggled to enter a "todo" (`- [ ]`) state. In _Source_ mode, you can view the raw markdown (such as in the example below).

I recommend adding links to the "migrated" (`- [>]`) and scheduled (`- [<]`) line items. This is why their default color is the same as unpopulated Obsidian links. Even if you choose not to link to other files, the lighter color emphasizes that these tasks still remain for completion at another time.

### Syntax Example
```
* [ ] todo
* [x] done
* [o] event
	* [-] note
	* [-] note
	* [-] note
* [ ] todo
* [ ] todo
* [x] done
* [~] canceled
* [>] migrated
* [ ] todo
* [ ] todo
* [<] scheduled
```
### Example Results
![BuJo HTML Result](https://github.com/rrnyquist/bujo/blob/main/readme_example.png)

If you don't like the icons I have here, it shouldn't be too hard to change them yourself! Have fun--assuming, for some sick reason, that's the kind of thing you do for fun. And if it _is_... uh, wanna get lunch later? You like sushi?
