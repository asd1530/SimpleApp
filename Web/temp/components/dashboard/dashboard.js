define(['exports', 'module', 'knockout', 'text!./dashboard.html'], function (exports, module, _knockout, _textDashboardHtml) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _templateMarkup = _interopRequireDefault(_textDashboardHtml);

    var Dashboard = (function () {
        function Dashboard(params) {
            _classCallCheck(this, Dashboard);

            this.message = _ko['default'].observable('Hello from the dashboard component!');
        }

        _createClass(Dashboard, [{
            key: 'dispose',
            value: function dispose() {
                // This runs when the component is torn down. Put here any logic necessary to clean up,
                // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
            }
        }]);

        return Dashboard;
    })();

    module.exports = { viewModel: Dashboard, template: _templateMarkup['default'] };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFHTSxTQUFTO0FBQ0EsaUJBRFQsU0FBUyxDQUNDLE1BQU0sRUFBRTtrQ0FEbEIsU0FBUzs7QUFFUCxnQkFBSSxDQUFDLE9BQU8sR0FBRyxlQUFHLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ3ZFOztxQkFIQyxTQUFTOzttQkFLSixtQkFBRzs7O2FBR1Q7OztlQVJDLFNBQVM7OztxQkFXQSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSw0QkFBZ0IsRUFBRSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvIGZyb20gJ2tub2Nrb3V0JztcbmltcG9ydCB0ZW1wbGF0ZU1hcmt1cCBmcm9tICd0ZXh0IS4vZGFzaGJvYXJkLmh0bWwnO1xuXG5jbGFzcyBEYXNoYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBrby5vYnNlcnZhYmxlKCdIZWxsbyBmcm9tIHRoZSBkYXNoYm9hcmQgY29tcG9uZW50IScpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCkge1xuICAgICAgICAvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIHRvcm4gZG93bi4gUHV0IGhlcmUgYW55IGxvZ2ljIG5lY2Vzc2FyeSB0byBjbGVhbiB1cCxcbiAgICAgICAgLy8gZm9yIGV4YW1wbGUgY2FuY2VsbGluZyBzZXRUaW1lb3V0cyBvciBkaXNwb3NpbmcgS25vY2tvdXQgc3Vic2NyaXB0aW9ucy9jb21wdXRlZHMuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogRGFzaGJvYXJkLCB0ZW1wbGF0ZTogdGVtcGxhdGVNYXJrdXAgfTtcbiJdfQ==