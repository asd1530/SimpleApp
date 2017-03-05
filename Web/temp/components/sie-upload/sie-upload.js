define(['exports', 'module', 'knockout', 'text!./sie-upload.html', 'uploader'], function (exports, module, _knockout, _textSieUploadHtml, _uploader) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _templateMarkup = _interopRequireDefault(_textSieUploadHtml);

    var _Uploader = _interopRequireDefault(_uploader);

    var SieUpload = (function () {
        function SieUpload(params) {
            _classCallCheck(this, SieUpload);

            this.uploadedFiles = _ko['default'].observableArray();
            this.init();
        }

        _createClass(SieUpload, [{
            key: 'init',
            value: function init() {
                var self = this;
                var uploader = new _Uploader['default']({
                    selectButton: "#uploader-button",
                    url: "http://localhost:5000/api/sie/upload"
                });
                uploader.on("uploadComplete", function () {
                    var response = JSON.parse(arguments[2]);
                    self.uploadedFiles.push(response);
                });
                $.get("http://localhost:5000/api/sie", function (data) {
                    self.uploadedFiles.push.apply(self.uploadedFiles, data);
                });
            }
        }, {
            key: 'browse',
            value: function browse(id) {
                hasher.setHash('/#/browse');
            }
        }, {
            key: 'dispose',
            value: function dispose() {
                // This runs when the component is torn down. Put here any logic necessary to clean up,
                // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
            }
        }]);

        return SieUpload;
    })();

    module.exports = { viewModel: SieUpload, template: _templateMarkup['default'] };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9zaWUtdXBsb2FkL3NpZS11cGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1FBSU0sU0FBUztBQUNBLGlCQURULFNBQVMsQ0FDQyxNQUFNLEVBQUU7a0NBRGxCLFNBQVM7O0FBRVAsZ0JBQUksQ0FBQyxhQUFhLEdBQUMsZUFBRyxlQUFlLEVBQUUsQ0FBQztBQUN4QyxnQkFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7O3FCQUpDLFNBQVM7O21CQUtQLGdCQUFHO0FBQ0gsb0JBQUksSUFBSSxHQUFFLElBQUksQ0FBQztBQUNmLG9CQUFJLFFBQVEsR0FBRyx5QkFBYTtBQUNwQixnQ0FBWSxFQUFFLGtCQUFrQjtBQUNoQyx1QkFBRyxFQUFFLHNDQUFzQztpQkFDOUMsQ0FBQyxDQUFDO0FBQ0gsd0JBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBVztBQUM3Qix3QkFBSSxRQUFRLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2Qyx3QkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3JDLENBQUMsQ0FBQTtBQUNWLGlCQUFDLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFHLFVBQVMsSUFBSSxFQUFDO0FBQzlDLHdCQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFFL0QsQ0FBQyxDQUFDO2FBQ1Y7OzttQkFDSyxnQkFBQyxFQUFFLEVBQUM7QUFDTixzQkFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvQjs7O21CQUNNLG1CQUFHOzs7YUFHVDs7O2VBMUJDLFNBQVM7OztxQkE2QkEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsNEJBQWdCLEVBQUUiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2llLXVwbG9hZC9zaWUtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvIGZyb20gJ2tub2Nrb3V0JztcbmltcG9ydCB0ZW1wbGF0ZU1hcmt1cCBmcm9tICd0ZXh0IS4vc2llLXVwbG9hZC5odG1sJztcbmltcG9ydCBVcGxvYWRlciBmcm9tICd1cGxvYWRlcic7XG5cbmNsYXNzIFNpZVVwbG9hZCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMudXBsb2FkZWRGaWxlcz1rby5vYnNlcnZhYmxlQXJyYXkoKTsgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHZhciBzZWxmPSB0aGlzO1xuICAgICAgICB2YXIgdXBsb2FkZXIgPSBuZXcgVXBsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNlbGVjdEJ1dHRvbjogXCIjdXBsb2FkZXItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc2llL3VwbG9hZFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVwbG9hZGVyLm9uKFwidXBsb2FkQ29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2U9IEpTT04ucGFyc2UoYXJndW1lbnRzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBsb2FkZWRGaWxlcy5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICQuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9zaWVcIiAsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwbG9hZGVkRmlsZXMucHVzaC5hcHBseShzZWxmLnVwbG9hZGVkRmlsZXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBicm93c2UoaWQpe1xuICAgICAgICBoYXNoZXIuc2V0SGFzaCgnLyMvYnJvd3NlJyk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIC8vIFRoaXMgcnVucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgdG9ybiBkb3duLiBQdXQgaGVyZSBhbnkgbG9naWMgbmVjZXNzYXJ5IHRvIGNsZWFuIHVwLFxuICAgICAgICAvLyBmb3IgZXhhbXBsZSBjYW5jZWxsaW5nIHNldFRpbWVvdXRzIG9yIGRpc3Bvc2luZyBLbm9ja291dCBzdWJzY3JpcHRpb25zL2NvbXB1dGVkcy5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdmlld01vZGVsOiBTaWVVcGxvYWQsIHRlbXBsYXRlOiB0ZW1wbGF0ZU1hcmt1cCB9O1xuIl19