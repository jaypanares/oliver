Template.player.viewmodel('player', function (data) {
  var listedUser = data.listedUser;
  return {
    referrals: listedUser.referrals,
    highlight: function () {
      if (this.referrals().length < data.num) {
        return 'notdone';
      } else {
        return 'done';
      }
    }
  }
}, ['highlight']);
