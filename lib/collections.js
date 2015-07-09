Emails = new Mongo.Collection('email');
Players = new Mongo.Collection('players');

Schemas = {};

Schemas.Emails = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  createdAt: {
    type: Date
  },
  ipAddress: {
    type: String,
    regEx: SimpleSchema.RegEx.IP
  },
  referrer: {
    type: String
  },
  referrals: {
    type: [String]
  }
});
