Meteor.startup(function () {
  if (Players.find().count() === 0) {
    var doThis = [1,3,5,10,15,25];
	var counter = 0;
	var rewards = [
		'Get 1 free week of Oliver',
		'Get 1 free week of Oliver',
		'Get 2 free weeks of Oliver',
		'Get 2 free months of Oliver',
		'Get 6 free months of Oliver',
		'Get 6 free months of Oliver'
	];
    _.each(doThis, function (label) {
		if(!counter){
      	 	Players.insert({
       	  	   name: "Invite " + label + " friend",
			   score: label,
			   category: counter,
			   reward: rewards[counter]
      		});
		} else {
      	 	Players.insert({
       	  	   name: "Invite " + label + " friends",
			   score: label,
			   category: counter,
			   reward: rewards[counter]
      		});
		}
		counter++;
    });
  }
});

Meteor.publish('Players', function(){
  return Players.find();
});