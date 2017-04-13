const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const mkpath = require('mkpath');
const markdownit = require('markdown-it');
const CODEPEN_CONFIG = require('./codepen-config.json');
const MD_2_HTML_CONFIG = require('./md-2-html-config.json');
const MARKDOWN_IT_CONFIG = require('./markdown-it-config.json');
const MARKDOWN_IT_VIDEO_CONFIG = require('./markdown-it-video-config.json');

const _markdownit = markdownit(MARKDOWN_IT_CONFIG)
    .use(require('markdown-it-code-embed'), CODEPEN_CONFIG)
    .use(require('markdown-it-highlightjs'))
    .use(require('markdown-it-video', MARKDOWN_IT_VIDEO_CONFIG));

function md2Html (src_path, src_dir, dest_dir) {

    let _path = path.parse(src_path);

    // create src & dest paths

    let _src_path = path.format(Object.assign({}, _path, {
        dir: _path.dir.replace('./', '')
    }));
    let _dest_path = path.format(Object.assign({}, _path, {
        dir: path.join(dest_dir, _path.dir.replace(src_dir, '')),
        base: _path.name + '.html'
    }));

    pathMd2Html(_src_path, _dest_path);
}

function formatResult (result, config) {

    if (!config.hasOwnProperty('wrapper') || !MD_2_HTML_CONFIG.wrapper.hasOwnProperty('tag')) {
        return result;
    }

    const _tag = MD_2_HTML_CONFIG.wrapper.tag;

    if (!config.wrapper.hasOwnProperty('class')) {
        return `<${_tag}>${result}</${_tag}>`;
    }

    const _class = config.wrapper.class;

    return `<${_tag} class="${_class}">${result}</${_tag}>`;
}

function pathMd2Html (path_in, path_out, options = {}) {

    fs.readFile(path_in, options, function (error, buffer) {

        if (error) {
            return console.error(error);
        }

        // custom render rules

        // link
        _markdownit.renderer.rules.link_open = function (tokens, idx) {
            let _link = tokens[idx].attrs.reduce((r, attr) => attr[0] === 'href' ? attr[1] : r, null);
            _link = /^http/.test(_link) ? _link : `#${_link}`;

            if (/(^\/\/|^http)/.test(_link)) {
                return `<a href="${_link}" target="_blank">`;
            }

            return `<a href="${_link}">`;
        };

        // image
        _markdownit.renderer.rules.image = function (tokens, idx) {
            const _src = tokens[idx].attrs.reduce((r, attr) => attr[0] === 'src' ? attr[1] : r, null);
            const _alt = tokens[idx].attrs.reduce((r, attr) => attr[0] === 'alt' ? attr[1] : r, null);
            return `<div class="image_wrapper"><div class="image"><img src="${_src}" alt="${_alt}"></div></div>`;
        };

        // video
        // width & height configs for markdown-it-video are not working, so fix here
        _markdownit.renderer.rules.video = function (tokens, idx) {

            const _video_id = tokens[idx].videoID;
            const _src = `//www.youtube.com/embed/${_video_id}?rel=0`;
            const _width = MARKDOWN_IT_VIDEO_CONFIG.youtube.width;
            const _height = MARKDOWN_IT_VIDEO_CONFIG.youtube.height;

            return `<p><div class="video_wrapper"><iframe class="video" id="youtubeplayer" type="text/html" width="${_width}" height="${_height}" src="${_src}" frameborder="0" allowfullscreen/></div></p>`;
        };

        let _result = formatResult(_markdownit.render(buffer.toString()), MD_2_HTML_CONFIG);
        let _dest_dir = require('path').dirname(path_out);

        mkdirp(_dest_dir, function (err) {

            if (error) {
                return console.error(error);
            }

            fs.writeFile(path_out, _result, function (error) {

                if (error) {
                    return console.error(error);
                }
            });
        });
    });
}

module.exports = {
    md2Html
};
