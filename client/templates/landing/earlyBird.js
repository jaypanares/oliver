Template.earlyBird.viewmodel('earlyBird', function (data) {
  return {
    inputEmail: '',
    ipAdd: '',
    referId: '',
    onRendered: function () {
      this.ipAdd(headers.getClientIP());
      if (data.routeParams) {
        this.referId(data.routeParams.referId);
      }
    },
    formSubmit: function (evt) {
      evt.preventDefault();
      Meteor.call('addEmail', this.inputEmail(), this.ipAdd(), this.referId(), function (err, cb) {
        if (!err) {
          switch (cb) {
            case 0:
              Segment.trackEvent('Entered with duplicate IP');
              Materialize.toast('You used an IP address that is already on our system', 4000);
              Materialize.toast('to check your status, sign up with your previous email address or email me: <a class="red-text text-lighten-5" href="mailto:sid@oliverapp.co"> sid@oliverapp.co</a>', 4000);
              break;
            case 1:
              Materialize.toast('Please enter an email address', 4000);
              break;
            default:
              Router.go('status',{_id: cb});
          }
        }
      });
    }
  }
});
