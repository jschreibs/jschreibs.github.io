document.querySelector('a[href="#OurServices"]').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#OurServices');

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  });