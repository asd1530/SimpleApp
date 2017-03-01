import ko from 'knockout';
import templateMarkup from 'text!./sie.html';

class Sie {
    constructor(params) {
        this.message = ko.observable('Hello from the sie component!');
    }
    
    dispose() {
        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    }
}

export default { viewModel: Sie, template: templateMarkup };
