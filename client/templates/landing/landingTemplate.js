Template.landingTemplate.viewmodel({
  onRendered: function () {
    Materialize.showStaggeredList('.section2');

    var options = [{
        selector: '.section1',
        offset: 400,
        callback: 'Materialize.showStaggeredList(".section1")'
      }];

    Materialize.scrollFire(options);
  }
});
