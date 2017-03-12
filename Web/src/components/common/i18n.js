
import Globalize from 'globalize';
import nmb from 'globalize/number';
import date from 'globalize/date';

export default function (){
    
const ls = require("json!cldr-data/supplemental/likelySubtags.json");
const n = require("json!cldr-data/main/en/numbers.json");
const gc = require("json!cldr-data/main/en/ca-gregorian.json");
Globalize.load(ls);
Globalize.load(n);
Globalize.load(gc);
this.i18n = Globalize("en");
Globalize.locale("en");
}