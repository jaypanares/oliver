Meteor.publish('allEmails', function () {
  return Emails.find();
});
Meteor.publish('listedEmail', function (referralId) {
  return Emails.find({_id: referralId});
});
