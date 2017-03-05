// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap": "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads": "bower_modules/crossroads/dist/crossroads.min",
        "hasher": "bower_modules/hasher/dist/js/hasher.min",
        "jquery": "bower_modules/jquery/dist/jquery",
        "knockout": "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals": "bower_modules/js-signals/dist/signals.min",
        "lodash": "bower_modules/lodash/lodash",
        "text": "bower_modules/requirejs-text/text",
        "json": "bower_modules/requirejs-json/json",
        "uploader": "bower_modules/UploaderJS/uploader.min",
        
        'cldr': "bower_modules/cldrjs/dist/cldr",
        'cldr/event': "bower_modules/cldrjs/dist/cldr/event",
        'cldr/supplemental': "bower_modules/cldrjs/dist/cldr/supplemental",
        'cldr/unresolved': "bower_modules/cldrjs/dist/cldr/unresolved",
        'cldr-data': "bower_modules/cldr-data",
        'globalize': "bower_modules/globalize/dist/globalize",
        'globalize/number': "bower_modules/globalize/dist/globalize/number",
        'globalize/date': "bower_modules/globalize/dist/globalize/date"
        

    },
    shim: {
        "bootstrap": { deps: ["jquery"] },
        "uploader": {
            deps: ["jquery"],
            exports: "Uploader"
        },
        "lodash": {
            exports: "_"
        },
        'cldr': { exports: "cldr" },
        'cldr/event': { deps: ["cldr"] },
        'cldr/supplemental': { deps: ["cldr"] },
        'cldr/unresolved': { deps: ["cldr"] },
        'globalize': {
            deps: [
                "cldr",
                "cldr/event",
                "cldr/supplemental",
                "cldr/unresolved",
                "json!cldr-data/supplemental/likelySubtags.json",
                "json!cldr-data/main/en/numbers.json",
                "json!cldr-data/main/en/ca-gregorian.json"
            ], 
            exports: "Globalize"
        },
        'globalize/number': { deps: ["globalize"] },
        'globalize/date': { deps: ["globalize/number"] }
    }
};
