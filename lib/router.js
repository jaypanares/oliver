Router.configure({
  layoutTemplate: 'landingLayout'
});

AppRouteController = RouteController.extend({
  data: function () {
    return { routeParams: this.params };
  }
});

Router.route('/status/:_id', {
  name: 'status',
  controller: 'AppRouteController',
  action: function () {
    this.render('statusTemplate');
  }
});

Router.route('/:referId', {
  name: 'landingRefer',
  controller: 'AppRouteController',
  action: function () {
    this.render('landingTemplate');
  }
});

Router.route('/', {
  name: 'landing',
  action: function () {
    this.render('landingTemplate');
  }
});
