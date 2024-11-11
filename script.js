(function () {
    var square = document.querySelector('.stages-block_animation');
   
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.stages-block-one');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('stages-block_animation-one');
          return;
        }
  
        entrySquare.classList.remove('stages-block_animation-one');
      });
    });
  
    observer.observe(square);
  })();

  (function () {
    var square = document.querySelector('.stages-block_animation_twojs');
   
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.stages-block-two');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('stages-block_animation-two');
          return;
        }
  
        entrySquare.classList.remove('stages-block_animation-two');
      });
    });
  
    observer.observe(square);
  })();

  (function () {
    var square = document.querySelector('.stages-block_animation_threejs');
   
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.stages-block-three');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('stages-block_animation-three');
          return;
        }
  
        entrySquare.classList.remove('stages-block_animation-three');
      });
    });
  
    observer.observe(square);
  })();

  /* ________________________________________________*/

  (function () {
    var square = document.querySelector('.stages-block_background-one');
   
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.stages-text-one');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('stages-text_animation-one');
          return;
        }
  
        entrySquare.classList.remove('stages-text_animation-one');
      });
    });
  
    observer.observe(square);
  })();

  (function () {
    var square = document.querySelector('.stages-block_background-two');
   
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.stages-text-two');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('stages-text_animation-two');
          return;
        }
  
        entrySquare.classList.remove('stages-text_animation-two');
      });
    });
  
    observer.observe(square);
  })();

(function () {
  var square = document.querySelector('.stages-block_background-three');
   
  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.stages-text-three');
       if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
      }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('stages-text_animation-three');
          return;
      }
  
        entrySquare.classList.remove('stages-text_animation-three');
      });
    });
  
    observer.observe(square);
  })();


function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("nav-menu").classList.toggle("nav-menu_click");
}
