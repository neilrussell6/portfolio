SVG / D3 Animated Border Dots
=============================

> This is a step by step run through of the process I used to create the animated border dots in my [Pandemic game's](pandemic-game) home screen. Below is a screen-shot of the final version.

![pandemic-game](/assets/screenshots/pandemic-1.png)

Dot with a tail
---------------

First I started with a polygon and a dot animating along it's lines. The dot has a tail the length of the line it's currently moving along.

@[codepen]({"slug_hash":"vmYMmW","pen_title":"Animated Border Dot with a tail","height":300})

Fixed length tail
-----------------

Next I updated the tail so that it's length is fixed.

@[codepen]({"slug_hash":"qmEPjY","pen_title":"Animated Border Dot with fixed length tail","height":300})

Gradient tail
-------------

I then add a radial gradient for the tail. And while this isn't ideal (especially around corners and sharp bends, it looks good enough for what I needed.

@[codepen]({"slug_hash":"WjbZqo","pen_title":"Animated Border Dot with gradient tail","height":300})

Repeating
---------

I then updated the animation to repeat.

> So here you'll notice 2 issues
> 1. The tail is missing at the start and disappears at the beginning of each repeat, but I fixed this issue in the next step.
> 2. The animation begins to stutter after a few repeats, this I haven't had a chance to solve, and instead opted to limit the number of repeats in the final version.

@[codepen]({"slug_hash":"rmOzQX","pen_title":"Animated Border Dot with repeating gradient tail","height":300})

Fix start and repeating tail
----------------------------

So I then updated the animation to begin with a tail, which fixes the first issue mentioned above.

@[codepen]({"slug_hash":"aWvygv","pen_title":"Animated Border Dot with start tail","height":300})

Second dot and styles
---------------------

Lastly I added a second dot and styled everything for the game.

@[codepen]({"slug_hash":"qmOPqr","pen_title":"Animated Border Dot with start tail","height":300})
