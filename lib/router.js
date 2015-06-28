Router.route('/', {
	action: function () {

		name:'landing',
 		this.layout("landingLayout");
		this.render('landingTemplate');
	}
});