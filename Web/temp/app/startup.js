define(['exports', 'jquery', 'bootstrap', 'knockout', 'knockout-projections', './router'], function (exports, _jquery, _bootstrap, _knockout, _knockoutProjections, _router) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _ko = _interopRequireDefault(_knockout);

    // Components can be packaged as AMD modules, such as the following:
    _ko['default'].components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
    _ko['default'].components.register('home-page', { require: 'components/home-page/home' });

    // ... or for template-only components, you can just point to a .html file directly:
    _ko['default'].components.register('about-page', {
        template: { require: 'text!components/about-page/about.html' }
    });

    _ko['default'].components.register('dashboard', { require: 'components/dashboard/dashboard' });

    _ko['default'].components.register('sie', { require: 'components/sie/sie' });

    _ko['default'].components.register('sie-upload', { require: 'components/sie-upload/sie-upload' });

    _ko['default'].components.register('sie-browse', { require: 'components/sie-browse/sie-browse' });

    _ko['default'].components.register('sie-totals', { require: 'components/sie-totals/sie-totals' });

    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    _ko['default'].applyBindings({ route: _router.currentRoute });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwL3N0YXJ0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPQSxtQkFBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUM7QUFDN0UsbUJBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDOzs7QUFHOUUsbUJBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7QUFDakMsZ0JBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRTtLQUNqRSxDQUFDLENBQUM7O0FBRUgsbUJBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDOztBQUVuRixtQkFBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7O0FBRWpFLG1CQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQzs7QUFFdEYsbUJBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQyxDQUFDOztBQUV0RixtQkFBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7Ozs7O0FBS3RGLG1CQUFHLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFPLFlBQVksRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2FwcC9zdGFydHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqcXVlcnknO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XHJcbmltcG9ydCAna25vY2tvdXQtcHJvamVjdGlvbnMnXHJcbmltcG9ydCAqIGFzIHJvdXRlciBmcm9tICcuL3JvdXRlcic7XHJcblxyXG4vLyBDb21wb25lbnRzIGNhbiBiZSBwYWNrYWdlZCBhcyBBTUQgbW9kdWxlcywgc3VjaCBhcyB0aGUgZm9sbG93aW5nOlxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCduYXYtYmFyJywgeyByZXF1aXJlOiAnY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXInIH0pO1xyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdob21lLXBhZ2UnLCB7IHJlcXVpcmU6ICdjb21wb25lbnRzL2hvbWUtcGFnZS9ob21lJyB9KTtcclxuXHJcbi8vIC4uLiBvciBmb3IgdGVtcGxhdGUtb25seSBjb21wb25lbnRzLCB5b3UgY2FuIGp1c3QgcG9pbnQgdG8gYSAuaHRtbCBmaWxlIGRpcmVjdGx5OlxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdhYm91dC1wYWdlJywge1xyXG4gICAgdGVtcGxhdGU6IHsgcmVxdWlyZTogJ3RleHQhY29tcG9uZW50cy9hYm91dC1wYWdlL2Fib3V0Lmh0bWwnIH1cclxufSk7XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdkYXNoYm9hcmQnLCB7IHJlcXVpcmU6ICdjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnIH0pO1xyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3Rlcignc2llJywgeyByZXF1aXJlOiAnY29tcG9uZW50cy9zaWUvc2llJyB9KTtcclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3NpZS11cGxvYWQnLCB7IHJlcXVpcmU6ICdjb21wb25lbnRzL3NpZS11cGxvYWQvc2llLXVwbG9hZCcgfSk7XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdzaWUtYnJvd3NlJywgeyByZXF1aXJlOiAnY29tcG9uZW50cy9zaWUtYnJvd3NlL3NpZS1icm93c2UnIH0pO1xyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3Rlcignc2llLXRvdGFscycsIHsgcmVxdWlyZTogJ2NvbXBvbmVudHMvc2llLXRvdGFscy9zaWUtdG90YWxzJyB9KTtcclxuXHJcbi8vIFtTY2FmZm9sZGVkIGNvbXBvbmVudCByZWdpc3RyYXRpb25zIHdpbGwgYmUgaW5zZXJ0ZWQgaGVyZS4gVG8gcmV0YWluIHRoaXMgZmVhdHVyZSwgZG9uJ3QgcmVtb3ZlIHRoaXMgY29tbWVudC5dXHJcblxyXG4vLyBTdGFydCB0aGUgYXBwbGljYXRpb25cclxua28uYXBwbHlCaW5kaW5ncyh7IHJvdXRlOiByb3V0ZXIuY3VycmVudFJvdXRlIH0pO1xyXG4iXX0=