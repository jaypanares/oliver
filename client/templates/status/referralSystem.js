Template.referralSystem.viewmodel('referralSystem', function (data) {
  return {
    referralId: data.routeParams._id,
    onCreated: function () {
      this.templateInstance.subscribe('listedEmail', this.referralId());
    },
    listedUser: function () {
      return Emails.findOne();
    },
    referralsCount: function () {
      return this.listedUser().referrals.length;
    }
  }
}, ['listedUser', 'referralsCount']);
