Meteor.methods({
  addEmail: function (fieldVal, ip, refId) {
    var duplicateEmail = Emails.findOne({email: fieldVal});
    var ipReuse = Emails.find({ipAddress: ip}).count();

    if (!fieldVal) {
      return -1;
    }
    if (duplicateEmail) {
      return duplicateEmail._id;
    }
    if (ipReuse) {
      return 0;
    }

    insertObj = {
      email: fieldVal,
      createdAt: new Date(),
      ipAddress: ip,
      referrer: refId,
      referrals: []
    };

    check(insertObj, Schemas.Emails);

    var returnId = Emails.insert(insertObj);

    Emails.update({_id: refId}, {
      $push: {referrals: returnId}
    });

    return returnId;
  }
});
