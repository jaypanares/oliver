Template.referralSystem.viewmodel('referralSystem', function (data) {
  return {
    referralId: data.routeParams._id,
    listedUser: function () {
      return Emails.findOne(this.referralId());
    },
    referralsCount: function () {
      return this.listedUser().referrals.length;
    }
  }
}, ['listedUser', 'referralsCount']);
