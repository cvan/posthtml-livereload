/* jshint mocha: true, maxlen: false */
var expect = require('chai').expect;
var posthtml = require('posthtml');

var lr = require('..');

var LR_SCRIPT = '\n<script src="//localhost:35729/livereload.js?snipver=1" async defer></script>\n';

function test(input, output, options, done) {
    posthtml()
        .use(lr(options))
        .process(input)
        .then(function(result) {
            expect(output).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        });
}

describe('LiveReload script', function() {
    it('should be appended to body tag', function(done) {
        test(
            '<!doctype html><html><head><title>Test</title></head><body><div class="button"><div class="button__text">Text</div></div></body></html>',
            '<!doctype html><html><head><title>Test</title></head><body><div class="button"><div class="button__text">Text</div></div>' + LR_SCRIPT + '</body></html>',
            null,
            done
        );
    });

    it('should be appended to body tag (without content)', function(done) {
        test(
            '<!doctype html><html><head><title>Test</title></head><body></body></html>',
            '<!doctype html><html><head><title>Test</title></head><body>' + LR_SCRIPT + '</body></html>',
            null,
            done
        );
    });

    it('should be appended to html tag (without body)', function(done) {
        test(
            '<!doctype html><html><title>Test</title></html>',
            '<!doctype html><html><title>Test</title>' + LR_SCRIPT + '</html>',
            null,
            done
        );
    });

    it('should be appended to html tag (without body/content)', function(done) {
        test(
            '<!doctype html><html></html>',
            '<!doctype html><html>' + LR_SCRIPT + '</html>',
            null,
            done
        );
    });

    it('should be appended to document tag (without html/body)', function(done) {
        test(
            '<!doctype html>',
            '<!doctype html>' + LR_SCRIPT + '',
            null,
            done
        );
    });

    it('should be appended to document tag (without content/html/body)', function(done) {
        test(
            '',
            '' + LR_SCRIPT + '',
            null,
            done
        );
    });

    it('should be appended to document tag (without content/html/body)', function(done) {
        test(
            '',
            '' + LR_SCRIPT + '',
            null,
            done
        );
    });

    it('should use custom hostname', function(done) {
        test(
            '<!doctype html><html><head></head><body><main>content</main></body></html>',
            '<!doctype html><html><head></head><body><main>content</main>\n<script src="//0.0.0.0:35729/livereload.js?snipver=1" async defer></script>\n</body></html>',
            {hostname: '0.0.0.0'},
            done
        );
    });

    it('should use custom port', function(done) {
        test(
            '<!doctype html><html><head></head><body><main>content</main></body></html>',
            '<!doctype html><html><head></head><body><main>content</main>\n<script src="//localhost:5309/livereload.js?snipver=1" async defer></script>\n</body></html>',
            {port: 5309},
            done
        );
    });

    it('should use custom path', function(done) {
        test(
            '<!doctype html><html><head></head><body><main>content</main></body></html>',
            '<!doctype html><html><head></head><body><main>content</main>\n<script src="//localhost:35729/lr.js" async defer></script>\n</body></html>',
            {path: '/lr.js'},
            done
        );
    });

    it('should use custom hostname, port, and path', function(done) {
        test(
            '<!doctype html><html><head></head><body><main>content</main></body></html>',
            '<!doctype html><html><head></head><body><main>content</main>\n<script src="//0.0.0.0:5309/lr.js" async defer></script>\n</body></html>',
            {hostname: '0.0.0.0', port: 5309, path: '/lr.js'},
            done
        );
    });
});
