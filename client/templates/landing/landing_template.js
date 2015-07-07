 Template.landingTemplate.rendered = function(){
	 Materialize.showStaggeredList(".section2")
	 $(function(){
	      $(".typed").typed({
	        strings: ["Check Twitter . . .","Watch Game of Thrones . . .", "Read Buzzfeed . . .", "Buy skinny jeans . . .", "Peruse reddit . . .", "Check Twitter / Watch Game of Thrones / Read Buzzfeed / Buy skinny jeans / Peruse reddit . . ."],
			  typeSpeed: 30,
			  backSpeed: 20,
              loop: false,
			  backDelay: 500
	      });
	  });
	  
	  var options = [
		  {selector: '.section1', offset: 400, callback: 'Materialize.showStaggeredList(".section1")' }
	  ];
	  
	  Materialize.scrollFire(options);
      

 }
 