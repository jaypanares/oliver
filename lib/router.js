Router.route('/', {
	action: function () {

		name:'landing',
 		this.layout("landingLayout");
		this.render('landingTemplate');
	}
});

Router.route('/:referId', {
	 waitOn: function() {    
		Session.set("referId",this.params.referId); 	
	},
	action: function () {
		name:'landingRefer',
 		this.layout("landingLayout");
		this.render('landingTemplate');
	}
});

Router.route('/status/:_id', {
	name:'status',
	data: function() {    
		Session.set("referenceId",this.params._id); 
		return Emails.findOne(this.params._id); 
	},
	action: function () {
		name:'landingRefer',
 		this.layout("landingLayout");
		this.render('statusTemplate');
	}
});