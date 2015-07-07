Template.statusTemplate.helpers({
	referralsCount: function(){
		return this.referrals.length;
	}
})

Template.referralSystem.helpers({
	referralsCount: function(){
		return this.referrals.length;
	}
})


Template.player.helpers({
	referralsCount: function(){
		return this.referrals.length;
	},
	highlight: function(){
		if (Template.parentData(1).referrals.length < this.score){
			return 'notdone';
		} else{
			return 'done';
		}
	}
})

