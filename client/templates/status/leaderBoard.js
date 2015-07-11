Template.leaderBoard.viewmodel('leaderBoard', function (data) {
  return {
    referenceId: '',
    referralLink: '',
    onRendered: function () {
      this.referenceId(data.routeParams._id);
      this.referralLink(Meteor.absoluteUrl(this.referenceId()));
    },
    players: function () {
      var rewards = [
        {num: 1, text: 'Get 1 free week of Oliver'},
        {num: 3, text: 'Get 1 free week of Oliver'},
        {num: 5, text: 'Get 2 free weeks of Oliver'},
        {num: 10, text: 'Get 2 free weeks of Oliver'},
        {num: 25, text: 'Get 6 free weeks of Oliver'}
      ];
      _.map(rewards, function (item) {
        _.extend(item, {
          listedUser: data.listedUser,
          name: 'Invite ' + item.num + ' ' + pluralize('friend', item.num)
        });
      });
      return rewards;
    },
    setSelection: function (evt) {
      elem = evt.target;
      elem.setSelectionRange(0, elem.value.length);
    }
  }
}, ['players', 'shareData']);
