(function (window) {
  var scrollUpButtons = [];
  var toggleButtonVisibility = function () {
    scrollUpButtons.forEach((button) => {
      var offset = parseInt(button.getAttribute('data-pro-scroll-to-top-visibility-offset')) || 0;
      if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        button.setAttribute('data-vcv-pro-scroll-button-visible', true);
      } else {
        button.removeAttribute('data-vcv-pro-scroll-button-visible');
      }
    });
  };

  var scrollToTop = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener('scroll', toggleButtonVisibility);

  window.vcv.on('ready', function (action, id) {
    scrollUpButtons = [].slice.call(document.querySelectorAll('.pro-scroll-to-top-button-container'));
    toggleButtonVisibility();
    if (action && id) {
      var scrollButton = document.querySelector(`#el-${id} .pro-scroll-to-top-button`);
      if (scrollButton) {
        scrollButton.addEventListener('click', scrollToTop);
      }
    } else {
      scrollUpButtons.forEach((container) => {
        var button = container.querySelector('.pro-scroll-to-top-button');
        button.addEventListener('click', scrollToTop);
      });
    }
  });
}(window));
