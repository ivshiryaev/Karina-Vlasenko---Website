const progressBarElement = document.getElementById('progressBar');
window.onscroll = function(){updateScrollBar()};


function updateScrollBar(){
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progressBarElement.style.width = scrolled + "%";
}