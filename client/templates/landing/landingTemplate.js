Template.landingTemplate.viewmodel(function (data) {
  return {
    onRendered: function () {
      if (data) {
        Segment.trackPage('Home (Referred)');
      }else {
        Segment.trackPage('Home');
      }

      Materialize.showStaggeredList('.section2');

      var options = [
        {
          selector: '.section1',
          offset: 400,
          callback: 'Materialize.showStaggeredList(".section1");'
        }, {
          selector: '#hero',
          offset: 0,
          callback: 'Segment.trackEvent("Viewed Hero");'
        }, {
          selector: '#earlyBirdTop',
          offset: 240,
          callback: 'Segment.trackEvent("Viewed Top Email Input");'
        }, {
          selector: '#description1',
          offset: 420,
          callback: 'Segment.trackEvent("Viewed Description 1");'
        }, {
          selector: '#description2',
          offset: 350,
          callback: 'Segment.trackEvent("Viewed Description 2");'
        }, {
          selector: '#description3',
          offset: 320,
          callback: 'Segment.trackEvent("Viewed Description 3");'
        }, {
          selector: '#earlyBirdBottom',
          offset: 120,
          callback: 'Segment.trackEvent("Viewed Bottom Email Input");'
        }
      ];

      Materialize.scrollFire(options);
    }
  }
});
