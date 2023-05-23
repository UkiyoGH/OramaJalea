window.addEventListener("scroll", function() {
    var divs = document.querySelectorAll(".product_space");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < divs.length; i++) {
      var divOffsetTop = divs[i].offsetTop;
  
      if (scrollTop > (divOffsetTop - windowHeight)) {
        divs[i].classList.add("show");
      }
    }
  });