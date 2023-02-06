const navItems = document.querySelectorAll("header nav ul li a");
console.log(navItems)

navItems.forEach(a => {
    a.addEventListener('click', (e) => {
        removeCurrentClass();
        e.target.classList.add('current');
    })
})

function removeCurrentClass() {
    navItems.forEach(a => {
        a.classList.remove('current');
    })
}


// Smooth scrolling
$('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });