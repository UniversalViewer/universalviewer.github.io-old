var marked = require("../marked");

module.exports.register = function (Handlebars, options) {
    'use strict';

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    });

    Handlebars.registerHelper('replaceStr', function (haystack, needle, replacement) {
        if (haystack && needle) {
            return haystack.replace(needle, replacement);
        } else {
            return '';
        }
    });

    Handlebars.registerHelper('breaklines', function(text) {
        text = Handlebars.Utils.escapeExpression(text);
        text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('jsonFriendly', function(options) {
        var text = options.fn(this);
        //var text = Handlebars.Utils.escapeExpression(options.fn(this));
        //text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
        text = text.replace(/\r\n/gm, '<br>');
        text = text.replace(/(\n|\r)/gm, '');
        text = text.replace(/"/g, "\'");
        return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('json', function(obj) {
        return JSON.stringify(obj);
    });

    Handlebars.registerHelper('gh-markdown', function(options) {
        var text = options.fn(this);
        return marked(text);
    });


};