import ko from 'knockout';
import templateMarkup from 'text!./sie-upload.html';
import Uploader from 'uploader';

class SieUpload {
    constructor(params) {
        this.uploadedFiles=ko.observableArray();            
        this.init();
    }
    init() {
        var self= this;
        var uploader = new Uploader({
                selectButton: "#uploader-button",
                url: "http://localhost:5000/api/sie/upload"
            });
            uploader.on("uploadComplete", function() {
                        var response= JSON.parse(arguments[2]);
                        self.uploadedFiles.push(response);
                    })
            $.get("http://localhost:5000/api/sie" , function(data){
                    self.uploadedFiles.push.apply(self.uploadedFiles, data);
                    
            });
    }
    browse(id){
        hasher.setHash('/#/browse');
    }
    dispose() {
        // This runs when the component is torn down. Put here any logic necessary to clean up,
        // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    }
}

export default { viewModel: SieUpload, template: templateMarkup };
