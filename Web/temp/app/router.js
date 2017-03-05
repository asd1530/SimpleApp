define(['exports', 'module', 'knockout', 'crossroads', 'hasher'], function (exports, module, _knockout, _crossroads, _hasher) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _crossroads2 = _interopRequireDefault(_crossroads);

    var _hasher2 = _interopRequireDefault(_hasher);

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.

    var Router = function Router(config) {
        var _this = this;

        _classCallCheck(this, Router);

        this.currentRoute = _ko['default'].observable({});

        // Configure Crossroads route handlers
        _ko['default'].utils.arrayForEach(config.routes, function (route) {
            _crossroads2['default'].addRoute(route.url, function (requestParams) {
                _this.currentRoute(_ko['default'].utils.extend(requestParams, route.params));
            });
        });

        // Activate Crossroads
        _crossroads2['default'].normalizeFn = _crossroads2['default'].NORM_AS_OBJECT;
        _hasher2['default'].initialized.add(function (hash) {
            return _crossroads2['default'].parse(hash);
        });
        _hasher2['default'].changed.add(function (hash) {
            return _crossroads2['default'].parse(hash);
        });
        _hasher2['default'].init();
    }

    // Create and export router instance
    ;

    var routerInstance = new Router({
        routes: [{ url: '', params: { page: 'home-page' } }, { url: 'dashboard', params: { page: 'dashboard' } }, { url: 'sie', params: { page: 'sie' } }, { url: 'sie/upload', params: { page: 'sie-upload' } }, { url: 'sie/browse', params: { page: 'sie-browse' } }, { url: 'sie/browse/{id}', params: { page: 'sie-browse' } }, { url: 'sie/totals', params: { page: 'sie-totals' } }, { url: 'about', params: { page: 'about-page' } }]
    });

    module.exports = routerInstance;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwL3JvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBYU0sTUFBTSxHQUNHLFNBRFQsTUFBTSxDQUNJLE1BQU0sRUFBRTs7OzhCQURsQixNQUFNOztBQUVKLFlBQUksQ0FBQyxZQUFZLEdBQUcsZUFBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUd0Qyx1QkFBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDNUMsb0NBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBQyxhQUFhLEVBQUs7QUFDOUMsc0JBQUssWUFBWSxDQUFDLGVBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkUsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDOzs7QUFHSCxnQ0FBVyxXQUFXLEdBQUcsd0JBQVcsY0FBYyxDQUFDO0FBQ25ELDRCQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO21CQUFJLHdCQUFXLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7QUFDdkQsNEJBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7bUJBQUksd0JBQVcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztBQUNuRCw0QkFBTyxJQUFJLEVBQUUsQ0FBQztLQUNqQjs7Ozs7QUFJTCxRQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUM1QixjQUFNLEVBQUUsQ0FDSixFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQVcsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQ25ELEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFDbkQsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFRLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUM3QyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQ3BELEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFDcEQsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQ3pELEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFDcEQsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFNLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUN2RDtLQUNKLENBQUMsQ0FBQzs7cUJBRVksY0FBYyIsImZpbGUiOiJzcmMvYXBwL3JvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgY3Jvc3Nyb2FkcyBmcm9tICdjcm9zc3JvYWRzJztcbmltcG9ydCBoYXNoZXIgZnJvbSAnaGFzaGVyJztcblxuLy8gVGhpcyBtb2R1bGUgY29uZmlndXJlcyBjcm9zc3JvYWRzLmpzLCBhIHJvdXRpbmcgbGlicmFyeS4gSWYgeW91IHByZWZlciwgeW91XG4vLyBjYW4gdXNlIGFueSBvdGhlciByb3V0aW5nIGxpYnJhcnkgKG9yIG5vbmUgYXQgYWxsKSBhcyBLbm9ja291dCBpcyBkZXNpZ25lZCB0b1xuLy8gY29tcG9zZSBjbGVhbmx5IHdpdGggZXh0ZXJuYWwgbGlicmFyaWVzLlxuLy9cbi8vIFlvdSAqZG9uJ3QqIGhhdmUgdG8gZm9sbG93IHRoZSBwYXR0ZXJuIGVzdGFibGlzaGVkIGhlcmUgKGVhY2ggcm91dGUgZW50cnlcbi8vIHNwZWNpZmllcyBhICdwYWdlJywgd2hpY2ggaXMgYSBLbm9ja291dCBjb21wb25lbnQpIC0gdGhlcmUncyBub3RoaW5nIGJ1aWx0IGludG9cbi8vIEtub2Nrb3V0IHRoYXQgcmVxdWlyZXMgb3IgZXZlbiBrbm93cyBhYm91dCB0aGlzIHRlY2huaXF1ZS4gSXQncyBqdXN0IG9uZSBvZlxuLy8gbWFueSBwb3NzaWJsZSB3YXlzIG9mIHNldHRpbmcgdXAgY2xpZW50LXNpZGUgcm91dGVzLlxuXG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IGtvLm9ic2VydmFibGUoe30pO1xuICAgIFxuICAgICAgICAvLyBDb25maWd1cmUgQ3Jvc3Nyb2FkcyByb3V0ZSBoYW5kbGVyc1xuICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goY29uZmlnLnJvdXRlcywgKHJvdXRlKSA9PiB7XG4gICAgICAgICAgICBjcm9zc3JvYWRzLmFkZFJvdXRlKHJvdXRlLnVybCwgKHJlcXVlc3RQYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb3V0ZShrby51dGlscy5leHRlbmQocmVxdWVzdFBhcmFtcywgcm91dGUucGFyYW1zKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIEFjdGl2YXRlIENyb3Nzcm9hZHNcbiAgICAgICAgY3Jvc3Nyb2Fkcy5ub3JtYWxpemVGbiA9IGNyb3Nzcm9hZHMuTk9STV9BU19PQkpFQ1Q7XG4gICAgICAgIGhhc2hlci5pbml0aWFsaXplZC5hZGQoaGFzaCA9PiBjcm9zc3JvYWRzLnBhcnNlKGhhc2gpKTtcbiAgICAgICAgaGFzaGVyLmNoYW5nZWQuYWRkKGhhc2ggPT4gY3Jvc3Nyb2Fkcy5wYXJzZShoYXNoKSk7XG4gICAgICAgIGhhc2hlci5pbml0KCk7XG4gICAgfVxufVxuXG4vLyBDcmVhdGUgYW5kIGV4cG9ydCByb3V0ZXIgaW5zdGFuY2VcbnZhciByb3V0ZXJJbnN0YW5jZSA9IG5ldyBSb3V0ZXIoe1xuICAgIHJvdXRlczogW1xuICAgICAgICB7IHVybDogJycsICAgICAgICAgIHBhcmFtczogeyBwYWdlOiAnaG9tZS1wYWdlJyB9IH0sXG4gICAgICAgIHsgdXJsOiAnZGFzaGJvYXJkJywgcGFyYW1zOiB7IHBhZ2U6ICdkYXNoYm9hcmQnIH0gfSxcbiAgICAgICAgeyB1cmw6ICdzaWUnLCAgICAgICBwYXJhbXM6IHsgcGFnZTogJ3NpZScgfSB9LFxuICAgICAgICB7IHVybDogJ3NpZS91cGxvYWQnLHBhcmFtczogeyBwYWdlOiAnc2llLXVwbG9hZCcgfSB9LFxuICAgICAgICB7IHVybDogJ3NpZS9icm93c2UnLHBhcmFtczogeyBwYWdlOiAnc2llLWJyb3dzZScgfSB9LFxuICAgICAgICB7IHVybDogJ3NpZS9icm93c2Uve2lkfScscGFyYW1zOiB7IHBhZ2U6ICdzaWUtYnJvd3NlJyB9IH0sXG4gICAgICAgIHsgdXJsOiAnc2llL3RvdGFscycscGFyYW1zOiB7IHBhZ2U6ICdzaWUtdG90YWxzJyB9IH0sXG4gICAgICAgIHsgdXJsOiAnYWJvdXQnLCAgICAgcGFyYW1zOiB7IHBhZ2U6ICdhYm91dC1wYWdlJyB9IH1cbiAgICBdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVySW5zdGFuY2U7XG4iXX0=