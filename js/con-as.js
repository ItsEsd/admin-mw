$('.prtlcordibtn').click(function(){
    $('#prtldivsec').slideDown('slow');
        var division = document.getElementById('p2');
        var divisionTop = division.offsetTop;
        division.scrollTo(0, divisionTop);
});

$('#clsprtlsign').click(function(){
    $('#prtldivsec').slideUp('slow');
});

const items = document.querySelectorAll('.itempc');
const closeButton = document.querySelector('.close-buttonpc');

items.forEach(item => {
  const button = item.querySelector('.buttonpc');
  const content = item.querySelector('.contentpc');
  let isActive = false;
  button.addEventListener('click', () => {
    content.classList.toggle('activepc');
    button.textContent = content.classList.contains('activepc') ? '▲' : '▼';
  });
});

closeButton.addEventListener('click', () => {
  const container = document.querySelector('#prtldivsec');
  container.style.display = 'none';
});
