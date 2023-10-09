window.onscroll = () => {
    toggleTopButton();
  }
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function toggleTopButton() {
    if (document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5) {
      document.getElementById('back-to-up').classList.remove('d-none');
    } else {
      document.getElementById('back-to-up').classList.add('d-none');
    }
  }
  if (document.getElementById('back-to-up')) {
    window.onscroll = () => {
        toggleTopButton();
    }
}