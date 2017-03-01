import ko from 'knockout';
import templateMarkup from 'text!./sie-browse.html';

class SieBrowse {
    constructor(params) {
        console.log(params);
        var self= this;
        this.accounts = ko.observableArray();
        this.vouchers = ko.observableArray();
        this.transactions=ko.observableArray();
        this.init(params);
    }
    init(params){
        var self= this;
        $.get("http://localhost:5000/api/"+params.id+"/voucher" , function(data){
            self.vouchers.push.apply(data);
            });
    }
    
    dispose() {
        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    }
}

export default { viewModel: SieBrowse, template: templateMarkup };
