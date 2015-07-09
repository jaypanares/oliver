Template.leaderBoard.viewmodel('leaderBoard', function (data) {
  return {
    referenceId: data.routeParams._id,
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
    referralLink: function () {
      return Meteor.absoluteUrl(this.referenceId());
    },
    setSelection: function (evt) {
      elem = evt.target;
      elem.setSelectionRange(0, elem.value.length);
    },
    shareData: function () {
      return {
        title: 'Get more done with Oliver',
        article: 'Oliver manages your time for you. Check it out!',
        description: 'Oliver manages your time for you. Check it out!',
        summary: 'Oliver manages your time for you. Check it out!',
        url: this.referralLink(),
        thumbnail: function () {
          return 'http://forked-oliver.meteor.com/img/thumbnail.png';
        },
        image: function () {
          return 'http://forked-oliver.meteor.com/img/thumbnail.png';
        }
      };
    }
  }
}, ['players', 'shareData']);
