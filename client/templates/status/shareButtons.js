Template.shareButtons.viewmodel('shareButtons', function (data) {
  return {
    url: '',
    text: '',
    referrer: '',
    onRendered: function () {
      this.url(Meteor.absoluteUrl(data.routeParams._id));
      this.text('Get more done with Oliver!');
      this.referrer(this.url());
    },
    trackMe: function (evt) {
      var id = evt.currentTarget.id;
      Segment.trackEvent('Clicked ' + id + " share button");
    }
  };
}, ['url', 'text', 'referrer']);
