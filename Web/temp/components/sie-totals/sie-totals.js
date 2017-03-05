define(['exports', 'module', 'knockout', 'text!./sie-totals.html'], function (exports, module, _knockout, _textSieTotalsHtml) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _templateMarkup = _interopRequireDefault(_textSieTotalsHtml);

    var SieTotals = (function () {
        function SieTotals(params) {
            _classCallCheck(this, SieTotals);

            this.message = _ko['default'].observable('Hello from the sie_totals component!');
        }

        _createClass(SieTotals, [{
            key: 'dispose',
            value: function dispose() {
                // This runs when the component is torn down. Put here any logic necessary to clean up,
                // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
            }
        }]);

        return SieTotals;
    })();

    module.exports = { viewModel: SieTotals, template: _templateMarkup['default'] };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9zaWUtdG90YWxzL3NpZS10b3RhbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUdNLFNBQVM7QUFDQSxpQkFEVCxTQUFTLENBQ0MsTUFBTSxFQUFFO2tDQURsQixTQUFTOztBQUVQLGdCQUFJLENBQUMsT0FBTyxHQUFHLGVBQUcsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDeEU7O3FCQUhDLFNBQVM7O21CQUtKLG1CQUFHOzs7YUFHVDs7O2VBUkMsU0FBUzs7O3FCQVdBLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLDRCQUFnQixFQUFFIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NpZS10b3RhbHMvc2llLXRvdGFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgdGVtcGxhdGVNYXJrdXAgZnJvbSAndGV4dCEuL3NpZS10b3RhbHMuaHRtbCc7XG5cbmNsYXNzIFNpZVRvdGFscyB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGtvLm9ic2VydmFibGUoJ0hlbGxvIGZyb20gdGhlIHNpZV90b3RhbHMgY29tcG9uZW50IScpO1xuICAgIH1cbiAgICBcbiAgICBkaXNwb3NlKCkge1xuICAgICAgICAvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIHRvcm4gZG93bi4gUHV0IGhlcmUgYW55IGxvZ2ljIG5lY2Vzc2FyeSB0byBjbGVhbiB1cCxcbiAgICAgICAgLy8gZm9yIGV4YW1wbGUgY2FuY2VsbGluZyBzZXRUaW1lb3V0cyBvciBkaXNwb3NpbmcgS25vY2tvdXQgc3Vic2NyaXB0aW9ucy9jb21wdXRlZHMuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogU2llVG90YWxzLCB0ZW1wbGF0ZTogdGVtcGxhdGVNYXJrdXAgfTtcbiJdfQ==