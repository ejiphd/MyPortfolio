let menuLinks = document.querySelectorAll('.menus');
let sections = document.querySelectorAll('section');

window.addEventListener("scroll", function() {
    var currentSectionIndex  = -1;

    sections.forEach(function(section, index) {
        var sectionTop = section.offsetTop - 50;
        var sectionBottom = sectionTop + section.offsetHeight;
    
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionIndex = index;
        }
    });

    if (currentSectionIndex !== -1) {
        menuLinks.forEach(function(link) {
          link.classList.remove("active");
        });
    
        menuLinks[currentSectionIndex].classList.add("active");
      }
});
