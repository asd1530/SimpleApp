define(['exports', 'module', 'knockout', 'text!./sie-browse.html'], function (exports, module, _knockout, _textSieBrowseHtml) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _templateMarkup = _interopRequireDefault(_textSieBrowseHtml);

    var SieBrowse = (function () {
        function SieBrowse(params) {
            _classCallCheck(this, SieBrowse);

            console.log(params);
            var self = this;
            this.accounts = _ko['default'].observableArray();
            this.vouchers = _ko['default'].observableArray();
            this.transactions = _ko['default'].observableArray();
            this.init(params);
        }

        _createClass(SieBrowse, [{
            key: 'init',
            value: function init(params) {
                var self = this;
                $.get("http://localhost:5000/api/" + params.id + "/voucher", function (data) {
                    self.vouchers.push.apply(data);
                });
            }
        }, {
            key: 'dispose',
            value: function dispose() {
                // This runs when the component is torn down. Put here any logic necessary to clean up,
                // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
            }
        }]);

        return SieBrowse;
    })();

    module.exports = { viewModel: SieBrowse, template: _templateMarkup['default'] };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9zaWUtYnJvd3NlL3NpZS1icm93c2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUdNLFNBQVM7QUFDQSxpQkFEVCxTQUFTLENBQ0MsTUFBTSxFQUFFO2tDQURsQixTQUFTOztBQUVQLG1CQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLGdCQUFJLElBQUksR0FBRSxJQUFJLENBQUM7QUFDZixnQkFBSSxDQUFDLFFBQVEsR0FBRyxlQUFHLGVBQWUsRUFBRSxDQUFDO0FBQ3JDLGdCQUFJLENBQUMsUUFBUSxHQUFHLGVBQUcsZUFBZSxFQUFFLENBQUM7QUFDckMsZ0JBQUksQ0FBQyxZQUFZLEdBQUMsZUFBRyxlQUFlLEVBQUUsQ0FBQztBQUN2QyxnQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjs7cUJBUkMsU0FBUzs7bUJBU1AsY0FBQyxNQUFNLEVBQUM7QUFDUixvQkFBSSxJQUFJLEdBQUUsSUFBSSxDQUFDO0FBQ2YsaUJBQUMsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUMsTUFBTSxDQUFDLEVBQUUsR0FBQyxVQUFVLEVBQUcsVUFBUyxJQUFJLEVBQUM7QUFDcEUsd0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUIsQ0FBQyxDQUFDO2FBQ1Y7OzttQkFFTSxtQkFBRzs7O2FBR1Q7OztlQW5CQyxTQUFTOzs7cUJBc0JBLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLDRCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NpZS1icm93c2Uvc2llLWJyb3dzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XHJcbmltcG9ydCB0ZW1wbGF0ZU1hcmt1cCBmcm9tICd0ZXh0IS4vc2llLWJyb3dzZS5odG1sJztcclxuXHJcbmNsYXNzIFNpZUJyb3dzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgICAgIHZhciBzZWxmPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnZvdWNoZXJzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnM9a28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0KHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBpbml0KHBhcmFtcyl7XHJcbiAgICAgICAgdmFyIHNlbGY9IHRoaXM7XHJcbiAgICAgICAgJC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL1wiK3BhcmFtcy5pZCtcIi92b3VjaGVyXCIgLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgc2VsZi52b3VjaGVycy5wdXNoLmFwcGx5KGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIHRvcm4gZG93bi4gUHV0IGhlcmUgYW55IGxvZ2ljIG5lY2Vzc2FyeSB0byBjbGVhbiB1cCxcclxuICAgICAgICAvLyBmb3IgZXhhbXBsZSBjYW5jZWxsaW5nIHNldFRpbWVvdXRzIG9yIGRpc3Bvc2luZyBLbm9ja291dCBzdWJzY3JpcHRpb25zL2NvbXB1dGVkcy5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB2aWV3TW9kZWw6IFNpZUJyb3dzZSwgdGVtcGxhdGU6IHRlbXBsYXRlTWFya3VwIH07XHJcbiJdfQ==