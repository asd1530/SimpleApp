import ko from 'knockout';
import templateMarkup from 'text!./sie-browse.html';
import Globalize from 'globalize';
import nmb from 'globalize/number';
import date from 'globalize/date';



class SieBrowse {
    constructor(params) {
        const ls = require("json!cldr-data/supplemental/likelySubtags.json");
        const n = require("json!cldr-data/main/en/numbers.json");
        const gc = require("json!cldr-data/main/en/ca-gregorian.json");
        Globalize.load(ls);
        Globalize.load(n);
        Globalize.load(gc);
        console.log(params);
        var self = this;
        this.accounts = ko.observableArray();
        this.vouchers = ko.observableArray();
        this.transactions = ko.observableArray();
        this.init(params);
    }
    init(params) {
        var self = this;
        $.get("http://localhost:5000/api/" + params.id + "/voucher", function (data) {
            // var numFormatter = globEn.numberFormatter({ maximumFractionDigits:2});
            var en = Globalize("en");

            console.log(en.formatNumber(3.1415));
            console.log(en.dateFormatter({ skeleton: "GyMMMd" })( new Date() ));
        });
    }

    dispose() {
        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    }
}

export default { viewModel: SieBrowse, template: templateMarkup };
