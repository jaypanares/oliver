Template.referralSystem.viewmodel('referralSystem', function (data) {
  return {
    referralId: '',
    onRendered: function () {
      Segment.trackPage('Checked status');
      this.referralId(data.routeParams._id);
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
