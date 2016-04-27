/*can-connect-feathers@0.1.2#utils*/
define(['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.stripSlashes = stripSlashes;
    function stripSlashes(location) {
        return location.replace(/^(\/*)|(\/*)$/g, '');
    }
});