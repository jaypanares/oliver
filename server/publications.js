Meteor.publish('Players', function () {
  return Players.find();
});