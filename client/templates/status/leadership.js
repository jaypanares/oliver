Template.leaderboard.helpers({
  players: function () {
    return Players.find({}, { sort: { score: -1, name: 1 } });
  },
  shareData: function(){
	  //social sharing data
	  var referenceId = Session.get('referenceId');
	  var link = Meteor.absoluteUrl("/"+referenceId);
	  return {
		  title: 'Get more done with Oliver',
		  url: link,
		  summary: 'Oliver manages your time for you.  check it out!',
		  image: 'http://localhost:3003/img/thumbnail.png'
	  }
  },
  referralLink: function(){
  	var referenceId = Session.get('referenceId');
	var link =Meteor.absoluteUrl("/"+referenceId);
	return link;
  }
});


//social sharing
ShareIt.configure({
  useFB: true,          // boolean (default: true)
                        // Whether to show the Facebook button
  useTwitter: true,     // boolean (default: true)
                        // Whether to show the Twitter button
  useGoogle: true,      // boolean (default: true)
                        // Whether to show the Google+ button
  classes: "large btn", // string (default: 'large btn')
                        // The classes that will be placed on the sharing buttons, bootstrap by default.
  iconOnly: true,      // boolean (default: false)
                        // Don't put text on the sharing buttons
  applyColors: true     // boolean (default: true)
                        // apply classes to inherit each social networks background color
});

Template.leaderboard.rendered = function(){
	//this is for the referral link
	var inp = $("input")[0];
	var referenceId = Session.get('referenceId');
	var default_value =Meteor.absoluteUrl("/"+referenceId);

	inp.addEventListener("input", function () { 
	    this.value = default_value;
	}, false);
    
}