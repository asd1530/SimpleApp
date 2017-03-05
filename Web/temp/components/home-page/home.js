define(['exports', 'module', 'knockout', 'text!./home.html'], function (exports, module, _knockout, _textHomeHtml) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _homeTemplate = _interopRequireDefault(_textHomeHtml);

    var HomeViewModel = (function () {
        function HomeViewModel(route) {
            _classCallCheck(this, HomeViewModel);

            this.message = _ko['default'].observable('Welcome to UI!');
        }

        _createClass(HomeViewModel, [{
            key: 'doSomething',
            value: function doSomething() {
                this.message('You invoked doSomething() on the viewmodel.');
            }
        }]);

        return HomeViewModel;
    })();

    module.exports = { viewModel: HomeViewModel, template: _homeTemplate['default'] };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBR00sYUFBYTtBQUNKLGlCQURULGFBQWEsQ0FDSCxLQUFLLEVBQUU7a0NBRGpCLGFBQWE7O0FBRVgsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsZUFBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNsRDs7cUJBSEMsYUFBYTs7bUJBS0osdUJBQUc7QUFDVixvQkFBSSxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQy9EOzs7ZUFQQyxhQUFhOzs7cUJBVUosRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFFBQVEsMEJBQWMsRUFBRSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgaG9tZVRlbXBsYXRlIGZyb20gJ3RleHQhLi9ob21lLmh0bWwnO1xuXG5jbGFzcyBIb21lVmlld01vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBrby5vYnNlcnZhYmxlKCdXZWxjb21lIHRvIFVJIScpO1xuICAgIH1cbiAgICBcbiAgICBkb1NvbWV0aGluZygpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlKCdZb3UgaW52b2tlZCBkb1NvbWV0aGluZygpIG9uIHRoZSB2aWV3bW9kZWwuJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogSG9tZVZpZXdNb2RlbCwgdGVtcGxhdGU6IGhvbWVUZW1wbGF0ZSB9OyJdfQ==