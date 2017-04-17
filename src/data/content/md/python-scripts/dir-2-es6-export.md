dir-2-es6-export
================

Creates a JavaScript (ES6) file exporting all the files in given directory recursively. Useful if you are converting or generating a directory of HTML files. I use this script in my portfolio/blog VueJS web-app to generate an export of all the MD files I have converted to HTML, this export file is then used to automatically generate a menu in the VueJS web-app.

example usage
-------------

To view usage and available options / arguments run the following command:

```python
python dir-2-js-export/dir-2-js-export.py -h
```

But for example if we have the following files in `./src`:

```
./src/html/code-examples.html
./src/html/sub-dir/sub-page.html
./src/html/index.html
```

The when we call the script as follows:

```bash
python dir-2-js-export.py ./src/html -e html -o ./src/template-map.js -r ./src
```

It will use the names of all the `html` files in `./src/html` to generate `./src/template-map.js`, and will strip `./src` from all the paths, resulting in an export file (`./src/template-map.js`) that looks like this:

```js
import _code_examples from "html/code-examples.html";
import _index from "html/index.html";
import _sub_dir__sub_page from "html/sub-dir/sub-page.html";

const code_examples = { template: _code_examples, label: "Code examples" };
const index = { template: _index, label: "Index" };
const sub_dir__sub_page = { template: _sub_dir__sub_page, label: "Sub page" };

export {
    code_examples,
    index,
    sub_dir__sub_page
};

```

OLD (go through and exract anything important)
==============================================

> Creates a JavaScript file containing es6 exports for each targeted file in a targeted directory.
> Also allows target extension to be set.

### usage

```bash
python dir-2-es6-export.py [-h] [-e EXT] [-o OUTPUT] [-r REMOVE] src dest
```

### example

Given this directory structure:

```
./src/aaa.md
./src/bbb.txt
./src/ccc.md
./src/sub-2/sub-2-aaa.md
./src/sub-2/sub-2-bbb.html
./src/sub-2/subsub-1/subsub-1-aaa.md
./src/sub-1/sub-1-aaa.js
./src/sub-1/sub-1-bbb.md
```

When we run this command:

```
python dir-2-es6-export.py ./src ./dest -e md -o ./templates.js -r ./src
```

The result will be the following JavaScript file:

```javascript
import _ccc from "dest/ccc.html";
import _aaa from "dest/aaa.html";
import _sub_2__sub_2_bbb from "dest/sub-2/sub-2-bbb.html";
import _sub_2__subsub_1__subsub_1_aaa from "dest/sub-2/subsub-1/subsub-1-aaa.html";
import _sub_1__sub_1_aaa from "dest/sub-1/sub-1-aaa.html";

const ccc = { template: _ccc, label: "Ccc" };
const aaa = { template: _aaa, label: "Aaa" };
const sub_2__sub_2_bbb = { template: _sub_2__sub_2_bbb, label: "Sub 2 bbb" };
const sub_2__subsub_1__subsub_1_aaa = { template: _sub_2__subsub_1__subsub_1_aaa, label: "Subsub 1 aaa" };
const sub_1__sub_1_aaa = { template: _sub_1__sub_1_aaa, label: "Sub 1 aaa" };

export {
	ccc,
	aaa,
	sub_2__sub_2_bbb,
	sub_2__subsub_1__subsub_1_aaa,
	sub_1__sub_1_aaa
}
```

### resources

[pythontips : map_filter](http://book.pythontips.com/en/latest/map_filter.html)
[argparse docs](https://docs.python.org/2/howto/argparse.html)
