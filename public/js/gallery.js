
    var startSlide = document.getElementById("startSlide");
    var pauseSlide = document.getElementById("pauseSlide");
    var prevSlide = document.getElementById("prevSlide");
    var nextSlide = document.getElementById("nextSlide");
    var slideOne = document.getElementById("slideOne");
    var slideTwo = document.getElementById("slideTwo");
    var slideThree = document.getElementById("slideThree");
    var slideFour= document.getElementById("slideFour");
    var slideFive= document.getElementById("slideFive");

    // Create a carousel instance
    var myCarousel = new bootstrap.Carousel(document.getElementById("myCarousel"));

    // Don't cycle carousel to next when it isn't visible
    myCarousel.nextWhenVisible();

	// Cycles through the carousel items
    startSlide.addEventListener("click", function(){
        myCarousel.cycle();
    });
  
	// Stops the carousel
    pauseSlide.addEventListener("click", function(){
        myCarousel.pause();
    });

	// Cycles to the previous item
    prevSlide.addEventListener("click", function(){
        myCarousel.prev();
    });
  
	// Cycles to the next item
    nextSlide.addEventListener("click", function(){
        myCarousel.next();
    });
  
	// Cycles the carousel to first slide
    slideOne.addEventListener("click", function(){
        myCarousel.to(0);
    });
  
  	// Cycles the carousel to second slide
    slideTwo.addEventListener("click", function(){
        myCarousel.to(1);
    });
  
  	// Cycles the carousel to third slide
    slideThree.addEventListener("click", function(){
        myCarousel.to(2);
    });

