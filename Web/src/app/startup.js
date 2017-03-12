import 'jquery';
import 'bootstrap';
import ko from 'knockout';
import 'knockout-projections'
import * as router from './router';
import Globalize from 'globalize';

const ls = require("json!cldr-data/supplemental/likelySubtags.json");
const n = require("json!cldr-data/main/en/numbers.json");
const gc = require("json!cldr-data/main/en/ca-gregorian.json");

const td = require("json!cldr-data/supplemental/timeData.json");
const wd = require("json!cldr-data/supplemental/weekData.json" );
Globalize.load(ls);
Globalize.load(n);
Globalize.load(gc);
Globalize.load(td);
Globalize.load(wd);
Globalize.locale('en');
// Components can be packaged as AMD modules, such as the following:
ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
ko.components.register('home-page', { require: 'components/home-page/home' });

// ... or for template-only components, you can just point to a .html file directly:
ko.components.register('about-page', {
    template: { require: 'text!components/about-page/about.html' }
});

ko.components.register('dashboard', { require: 'components/dashboard/dashboard' });

ko.components.register('sie', { require: 'components/sie/sie' });

ko.components.register('sie-upload', { require: 'components/sie-upload/sie-upload' });

ko.components.register('sie-browse', { require: 'components/sie-browse/sie-browse' });

ko.components.register('sie-totals', { require: 'components/sie-totals/sie-totals' });

// [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

// Start the application
ko.applyBindings({ route: router.currentRoute });
