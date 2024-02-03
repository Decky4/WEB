const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.toggle('sticky', window.scrollY > 0);
    header.style.backgroundColor = 'rgb(5,15,18, 0.9)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// scroll
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Botton Top
function toggleScrollTopButton() {
  const scrollTopButton = document.getElementById('scrollTopButton');
  if (window.scrollY > 300) {
    scrollTopButton.classList.add('active');
  } else {
    scrollTopButton.classList.remove('active');
  }
}

function scrollToTop() {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

document.getElementById('scrollTopButton').addEventListener('click', scrollToTop);

window.addEventListener('scroll', toggleScrollTopButton);
