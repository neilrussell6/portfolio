SVG / D3 Connected Dots
=======================

> This is a step by step run through of the process I used to create the custom location markers and animation in my [Pandemic game](data/content/md/pandemic-game).

Connected Dots
--------------

First is just some SVG dots plotted around with lines connecting them, done using D3.

@[codepen]({"slug_hash":"zwYevd","pen_title":"Connected Dots","height":400})

Line animations (using CSS)
---------------------------

Next I tried getting the animations on the connecting lines right just using CSS.
The two required animations were:

> Dashes to indicate potential next moves for the player (show in green below).
> Spreading effect of an outbreak (shown in red below).

@[codepen]({"slug_hash":"OmJdzP","pen_title":"CSS Line animations","height":400})

Line animations (using JavaScript)
----------------------------------

Realising I need more fine grained control over those line animations I next implemented them in JavaScript.
At this point I also added animations to the dots (see red dots at the end of each red line animation below).

@[codepen]({"slug_hash":"mmdvxN","pen_title":"JavaScript Line animations","height":400})

Animations on Mouse Events
--------------------------

Next I cleaned up the styling a bit and added some basic state management (as I would be using Redux for final project) and garbage collection (for SVG dots and lines added during animations).

I also updated the potential move animations to run on mouse hover, and borrowed the animation from my [Animated Border Dots](data/content/md/animated-border-dots) for the player movement animation.

Try it out below by clicking on any of the dots.

> The player will travel directly via a connecting line to any connected dot,
> or will travel via a new curved line to non-connected dot.

@[codepen]({"slug_hash":"NjWoLR","pen_title":"Mouse Event Animations","height":400})

Combination
-----------

I then combined everything to complete player movement & outbreaks animations.

> Use the buttons in the demo below to switch between demo'ing player movement and outbreaks.

@[codepen]({"slug_hash":"VbwRMv","pen_title":"Combination Connected Dots","height":600})

Custom SVG Markers
------------------

Lastly I added custom SVG markers for both locations and the travelling player.

I also add a feature to update the location markers when ever they are infected (reached by a nearby outbreak).

> Try it out in the demo below, you'll see the player travels by car between connected locations, and flies to un-connected locations.

@[codepen]({"slug_hash":"WjNWQY","pen_title":"Custom SVG Markers","height":600})

> NOTE: this last demo has some issues that I ironed out in the [Pandemic game](data/content/md/pandemic-game), but I haven't had a chance to update this. Will do so soon.
