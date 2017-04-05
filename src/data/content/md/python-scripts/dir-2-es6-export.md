dir-2-es6-export
================

Creates a JavaScript (ES6) file exporting all the files in given directory recursively. Useful if you are converting or generating a directory of HTML files. I use this script in my portfolio/blog VueJS web-app to generate an export of all the MD files I have converted to HTML, this export file is then used to automatically generate a menu in the VueJS web-app.

#### example usage

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
