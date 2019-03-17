(function (window) {
  let modalBoxes = [];
  let openElements = [];

  const closeModals = (event) => {
    if (event.target && event.target.closest('.pro-modal-box')) {
      return;
    }
    modalBoxes.forEach((modal) => {
      modal.removeAttribute('data-vcv-pro-modal-box-visible');
    });
    document.removeEventListener('click', closeModals);
  };

  const openModal = (event) => {
    const modal = event.currentTarget && event.currentTarget.proModalBox;
    if (modal) {
      modal.setAttribute('data-vcv-pro-modal-box-visible', true);
      window.setTimeout(() => {
        document.addEventListener('click', closeModals, false);
      }, 1);
    }
  };

  const closeModal = (event) => {
    const modal = event.currentTarget && event.currentTarget.proModalBox;
    modal.removeAttribute('data-vcv-pro-modal-box-visible');
    document.removeEventListener('click', closeModals);
  };

  window.vcv.on('ready', function (action, id) {
    if (action && id) {
      if (openElements.length) {
        openElements.forEach((el) => {
          delete el.proModalBox;
          el.removeEventListener('click', openModal);
        });
      }
    }

    modalBoxes = [].slice.call(document.querySelectorAll('.pro-modal-box-container'));
    modalBoxes.forEach((modal) => {
      const modalSelector = modal.getAttribute('data-vce-pro-modal-selector');
      const closeButton = modal.querySelector('.pro-modal-box-close-button');

      if (modalSelector) {
        const openModalElements = [].slice.call(document.querySelectorAll(modalSelector));
        if (openModalElements.length) {
          openModalElements.forEach((openElement) => {
            openElements.push(openElement);
            openElement.proModalBox = modal;
            openElement.addEventListener('click', openModal, false);
          });
        }
      }
      closeButton.removeEventListener('click', closeModal);
      closeButton.proModalBox = modal;
      closeButton.addEventListener('click', closeModal);
    });
  });
}(window));
