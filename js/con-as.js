$('.prtlcordibtn').click(function(){
    $('#prtldivsec').show();
        var division = document.getElementById('p2');
        var divisionTop = division.offsetTop;
        division.scrollTo(0, divisionTop);
});

$('#clsprtlsign').click(function(){
    $('#prtldivsec').hide();
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

$(document).ready(function(){
var applyBtn = document.getElementById('apply');
applyBtn.addEventListener('click', function() {
  document.getElementById("rffrlfrm").style.display='block';
  document.getElementById("alllog").innerHTML='<iframe src="/ap/fetchlogAll.html" ></iframe><span id="closeactn">Close</span>';

  $('#closeactn').click(function(){
    $('#rffrlfrm').hide();
    $('#alllog').empty(); document.getElementById("alllog").innerHTML='<center style="margin-top:200px;">Loading...</center><span id="closeactn">Close</span>';
  });
});
});

 