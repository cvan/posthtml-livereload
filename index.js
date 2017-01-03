/* jshint maxlen: false */
module.exports = function(options) {
    options = options || {};
    options.hostname = options.hostname || 'localhost';
    options.port = options.port || '35729';
    options.path = options.path || '/livereload.js?snipver=1';

    return function posthtmlLivereload(tree) {
        var hasBody = 0;
        var hasHtml = 0;

        tree.match({tag: 'body'}, function(bodyNode) {
            hasBody = 1;
            if (!bodyNode.content) {
                bodyNode.content = [];
            }
            bodyNode.content.push(injectScript(options));
            return bodyNode;
        });

        if (!hasBody) {
            tree.match({tag: 'html'}, function(htmlNode) {
                hasHtml = 1;
                if (!htmlNode.content) {
                    htmlNode.content = [];
                }
                htmlNode.content.push(injectScript(options));
                return htmlNode;
            });

            if (!hasHtml) {
                tree.push(injectScript(options));
            }
        }

        return tree;
    };

    function injectScript(options) {
        var src = '//' + options.hostname + ':' + options.port + options.path;
        return '\n<script src="' + src + '" async defer></script>\n';
    }
};
