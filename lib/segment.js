analytics.load('IDCyIUsKQKK6XVgFCPMkZsVdcMhpllFc');

Segment = {
  trackEvent: function (name) {
    analytics.track(name);
  },
  trackPage: function (name) {
    analytics.page(name);
  }
};
