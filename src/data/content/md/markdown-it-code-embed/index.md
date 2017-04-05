Markdown-it-code-embed
======================

[View project on Github](https://github.com/neilrussell6/markdown-it-code-embed)

Code embed plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser. Allows you to add embeds from services like Codepen to your markdown.

#### Example Usage

You can provide just the slug hash for your Codepen embed like this:

```
@[codepen](ABC)
```

Or you can provide just the slug hash & pen title like this:

```
@[codepen](ABC,My Pen)
```

Or you can provide all the config options (must be valid json, and must be on a single line), like this:

```
@[codepen]({"slug_hash":"ABC", "pen_title":"My Pen"})
```
