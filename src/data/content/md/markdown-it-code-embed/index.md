Markdown-it-code-embed
======================

[View code on GitHub](https://github.com/neilrussell6/markdown-it-code-embed)

Code embed plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser. Allows you to add embeds from services like Codepen to your markdown.

### Example Usage

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

##### Include required embed Javascript

This plugin does not attach the Javascript required by the embed service, so remember to include it.

Below are the required scripts for each supported service:

**codepen**

```
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
```

Config
------

Configs can be set directly in your markdown as per above examples, or passed in when markdown-it is told to use the plugin, like this:

```javascript
const md = require('markdown-it')();
md.use(require('markdown-it-code-embed'), {
    user: "yourname"
});
```

#### Codepen options

 * **class** (default = codepen)
 * **default_tab** (default = result)
 * **embed_version** (default = 2)
 * **height** (default = 265)
 * **iframe** (default = true)
 * **slug_hash** (default = null)
 * **pen_title** (default = null)
 * **theme_id** (default = dark)
 * **user** (default = null)
 * **user_name** (default = null)
 * **palceholder** *accepts variables* (default =
```html
See the Pen <a href="https://codepen.io/${user}/pen/${slug_hash}/">${pen_title}</a> by ${user_name} (<a href="http://codepen.io/${user}">@${user}</a>) on <a href="http://codepen.io">CodePen</a>.
```
