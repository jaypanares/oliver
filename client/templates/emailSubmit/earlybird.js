Template.earlybird.events({
	
	
 'submit .emailEnter': function(e, template){
	e.preventDefault();
		var fieldVal = template.find(".emailfield").value;
		var ipAdd = headers.getClientIP();
	
	if(Session.get("referId")){
		var refId = Session.get("referId");
	}
	
	Meteor.call("addEmail", fieldVal, ipAdd, refId,function(err,cb){
		if(err){
			console.log(err);
		}
		if(cb == 0){
			Materialize.toast('You used an IP address that is already on our system', 4000);
			Materialize.toast('to check your status, sign up with your previous email address or email me: <a class="red-text text-lighten-5" href="mailto:sid@oliverapp.co"> sid@oliverapp.co</a>', 4000)
		} else if(cb == -1){
				Materialize.toast('Please enter an email address', 4000)
		} else {
			Router.go('status', {_id: cb});
		}
	})
 }
});


