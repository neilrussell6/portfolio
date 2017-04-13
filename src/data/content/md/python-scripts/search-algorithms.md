search algorithms
=================

### orderded-search

### usage

```
python ordered-search.py [data size]
```

### results

![vuejs-task-manager-pwa](/assets/screenshots/python-script-search-algorithms.png)

### dir-2-es6-export

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
