Meteor.methods({ 
  addEmail: function(fieldVal, ip, refId) {
	  var duplicateEmail = Emails.findOne({email: fieldVal});
	  var ipReuse = Emails.find({ipAddress: ip}).count();
	  console.log(ipReuse);
	  
	  if (!fieldVal) {return -1;}
	
 	 if(duplicateEmail){
		 return duplicateEmail._id;
 	 }  
		  
	 if(ipReuse){
		 return 0;
	 }
		 
	 var returnId = Emails.insert({
			  email: fieldVal,
	  		  createdAt: new Date(),
			  ipAddress: ip,
	  		  referrer: refId,
		 referrals: []
	 });
	 
	 Emails.update({_id: refId},{
		 	$push: {referrals: returnId}
	 	 });
		 
	 return returnId;
		 
}
});