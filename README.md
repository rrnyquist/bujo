# The BuJo CSS Snippet for Obsidian
I recently came across the [Bullet Journal Method](https://bulletjournal.com/). Something that impressed me about this method was how simple the basic tenets of the "rapid logging" system were: just a few types of bullets, each one quick to handwrite and easy to read. All the non-actionable bullet items take up the space of a block letter, while the actionable ones (the bullets) are pretty easy to pick out. Instantly, I wanted to implement the format into my favorite note-taking app, [Obsidian](https://obsidian.md/). Although there already exists a wonderful Obsidian theme called [Minimal](https://minimal.guide/home/) (I highly recommend you go check it out), I decided the formatting syntax needed to be _just so_ and so I decided to [make something from scratch](https://x.com/vincentdnl/status/1268573228626333703). 

So, if you like the bullet journal method, you are now able to get that "BuJo" look with just a few lines of CSS from this repo. It has been tested on both the default and Minimal themes. 

Enjoy!

## Getting Started
The syntax for this snippet is the same as your typical checkboxes. In reader mode, only the "todo" (`- [ ]`) and "done" (`- [x]`) checkboxes can be toggled, while the other symbols remain static. I recommend adding links to the "migrated" (`- [>]`) and scheduled (`- [<]`) line items (this is why their default highlighting is the same color as unpopulated links in Obsidian--it also clues you in to the tasks that you'll have to do another time).

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
- [<] scheduled
```
### Example Results
![BuJo HTML Result](https://github.com/rrnyquist/bujo/blob/main/readme_example.png)

If you don't like the icons I have here, it shouldn't be too hard to change them yourself! Have fun--assuming, for some sick reason, that's the kind of thing you do for fun. And if it _is_... uh, wanna get lunch later? You like sushi?
