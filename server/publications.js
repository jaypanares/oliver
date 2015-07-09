Meteor.publish('listedEmail', function (referralId) {
  return Emails.find({_id: referralId});
});
