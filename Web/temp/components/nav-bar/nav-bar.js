define(['exports', 'module', 'knockout', 'text!./nav-bar.html'], function (exports, module, _knockout, _textNavBarHtml) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _template = _interopRequireDefault(_textNavBarHtml);

    var NavBarViewModel = (function () {
        function NavBarViewModel(params) {
            _classCallCheck(this, NavBarViewModel);

            // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
            // You could remove this viewmodel entirely, and define 'nav-bar' as a template-only component.
            // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
            this.route = params.route;
        }

        _createClass(NavBarViewModel, [{
            key: 'isSieRoute',
            value: function isSieRoute() {
                return this.route().page.startsWith('sie');
            }
        }]);

        return NavBarViewModel;
    })();

    module.exports = { viewModel: NavBarViewModel, template: _template['default'] };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUdNLGVBQWU7QUFDTixpQkFEVCxlQUFlLENBQ0wsTUFBTSxFQUFFO2tDQURsQixlQUFlOzs7OztBQUtiLGdCQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0I7O3FCQU5DLGVBQWU7O21CQU9QLHNCQUFFO0FBQ1IsdUJBQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUM7OztlQVRDLGVBQWU7OztxQkFZTixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsUUFBUSxzQkFBVSxFQUFFIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAndGV4dCEuL25hdi1iYXIuaHRtbCc7XG5cbmNsYXNzIE5hdkJhclZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIC8vIFRoaXMgdmlld21vZGVsIGRvZXNuJ3QgZG8gYW55dGhpbmcgZXhjZXB0IHBhc3MgdGhyb3VnaCB0aGUgJ3JvdXRlJyBwYXJhbWV0ZXIgdG8gdGhlIHZpZXcuXG4gICAgICAgIC8vIFlvdSBjb3VsZCByZW1vdmUgdGhpcyB2aWV3bW9kZWwgZW50aXJlbHksIGFuZCBkZWZpbmUgJ25hdi1iYXInIGFzIGEgdGVtcGxhdGUtb25seSBjb21wb25lbnQuXG4gICAgICAgIC8vIEJ1dCBpbiBtb3N0IGFwcHMsIHlvdSdsbCB3YW50IHNvbWUgdmlld21vZGVsIGxvZ2ljIHRvIGRldGVybWluZSB3aGF0IG5hdmlnYXRpb24gb3B0aW9ucyBhcHBlYXIuXG4gICAgICAgIHRoaXMucm91dGUgPSBwYXJhbXMucm91dGU7ICAgICAgICBcbiAgICB9XG4gICAgaXNTaWVSb3V0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZSgpLnBhZ2Uuc3RhcnRzV2l0aCgnc2llJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogTmF2QmFyVmlld01vZGVsLCB0ZW1wbGF0ZTogdGVtcGxhdGUgfTsiXX0=