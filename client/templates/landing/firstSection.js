Template.firstSection.viewmodel({
  onRendered: function () {
    var elem = this.templateInstance.$('.typed');
    elem.typed({
      strings: [
        "Check Twitter . . .",
        "Watch Game of Thrones . . .",
        "Read Buzzfeed . . .",
        "Buy skinny jeans . . .",
        "Peruse reddit . . .",
        "Check Twitter / Watch Game of Thrones / Read Buzzfeed / Buy skinny jeans / Peruse reddit . . ."
      ],
      typeSpeed: 30,
      backSpeed: 20,
      loop: false,
      backDelay: 500
    });
  }
});
