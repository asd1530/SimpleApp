import ko from 'knockout';
import templateMarkup from 'text!./sie-browse.html';
import _ from 'lodash';
import Globalize from 'globalize';
import nmb from 'globalize/number';
import date from 'globalize/date';
import $ from 'jquery';
import 'jqueryui';

class SieBrowse {
    
    constructor(params) {
        this.dataLoaded = ko.observable(false);
        console.log(params);
        var self = this;
        this.accounts = ko.observableArray();
        this.periods = null;

        this.vouchers = null;
        console.log(Globalize.formatNumber(3.1415));
        this.transactions = ko.observableArray();
        this.formatter = Globalize.dateFormatter({raw: "MMMM"});

        this.init(params);
        $( "#accordion" ).accordion();

    }
    init(params) {
        var self = this;
        $.get("http://localhost:5000/api/" + params.id + "/voucher", function (data) {
            self.vouchers = self.prepareDate(data);
            self.periods= _.keys(self.vouchers);
            console.log(self.periods);
            self.dataLoaded(true);
        });
    }
    debug(){
        console.log(this.vouchers);
    }
    prepareDate(data) {
        var self = this;
        var gr1 = _.groupBy(data, function (item) {
            var itemDate = new Date(item.voucherDate);
            return self.formatter(itemDate);
        });
        _.each(_.keys(gr1), function (key) {
            gr1[key] = _.groupBy(gr1[key], 'series');
        })
        var result = gr1;

            console.log(result);
            return result;
    }

    dispose() {
        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    }
}

export default { viewModel: SieBrowse, template: templateMarkup };
