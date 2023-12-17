var oDoc, sDefTxt;
function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) {
    setDocMode(true);
  }
}
function formatDoc(sCmd, sValue) {
  if (validateMode()) {
    document.execCommand(sCmd, false, sValue);
    oDoc.focus();
  }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) {
    return true;
  }
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("p");
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
      oDoc.style.height = "350";
      oPre.style.width = "100%";
      oPre.style.wordWrap = "break-word";
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}

function printDoc() {
  if (!validateMode()) {
    return;
  }
  var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
  oPrntWin.document.close();
}
document.getElementById("crImage").addEventListener("input", selectImg);
document.getElementById("rd1").addEventListener("click", selectImg);
document.getElementById("rd2").addEventListener("click", selectImg);
document.getElementById("rd3").addEventListener("click", selectImg);

function selectImg() {
  var imgS = document.getElementById("crImage").value;
  document.getElementById("previewImg").style.display = "block";
  document.getElementById("radioS").style.display = "block";
  document.getElementById("previewImg").innerHTML = '<img src="' + imgS + '" width="100%" height="240px">';
  if (imgS != '' && imgS != 'http://') {
    if (document.getElementById('rd1').checked) {
      document.getElementById("btnOkImg").disabled = false;
      formatDoc('insertHTML', '<img src="' + imgS + '" width="30%" style="float:left; padding:6px;margin:4px;">');
    }
    if (document.getElementById('rd2').checked) {
      document.getElementById("btnOkImg").disabled = false;
      formatDoc('insertHTML', '<img src="' + imgS + '" width="50%" style="float:right;padding:6px;margin:4px;">');
    }
    if (document.getElementById('rd3').checked) {
      document.getElementById("btnOkImg").disabled = false;
      formatDoc('insertHTML', '<img src="' + imgS + '" width="98%" style="float:center;padding:6px;margin:4px;">');
    } else {
      return false;
    }
  } else {
    return false
  }
}

function CreateLink() {
  var sLnk = document.getElementById('crlink').value;
  if (sLnk != '' && sLnk != 'http://') {
    formatDoc('createlink', sLnk)
  } else {
    return false
  }
}

function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}

$('#rmvcls').click(function(){
  var opnt = document.getElementById('textBox');
  var classes = [];
  $('#textBox *:not(script)').removeAttr('style');
  $('#textBox *:not(script)').each(function(){
    _classes = $(this).attr('class') ? $(this).attr('class').split(' ') : [];
    _classes.forEach(function(entry){
      if(classes.indexOf(entry) < 0){
        classes.push(entry);
      }
    });
  });
  var _classlist = classes.length;
  for(var k = 0; k < _classlist; k++){
    if(classes[k] !== ""){
      var cls = '.' + classes[k];
      console.log(cls);
      $(cls).removeAttr('id');
      $(cls).removeAttr('style');
      $(cls).removeAttr('dir');
      $(cls).removeAttr('class');
    }
  }

});

document.getElementById("crVideo").addEventListener("input", embed_vid);

function embed_vid() {
  document.getElementById("previewvid").style.display = "block";
  var link = document.getElementById("crVideo").value;
  var myId = getId(link);
  if (link != '' && link != 'http://') {
    document.getElementById("previewvid").innerHTML = '<iframe width="100%" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>';
    formatDoc('insertHTML', '<div align="center"><div class="embed-responsive embed-responsive-16by9" style="max-width:600px; padding-top:10px;"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe></div></div><br>');
  } else {
    return false;
  }
}
var url_string = window.location.href;
    var url = new URL(url_string);
    var q = url.searchParams.get("_source");
    if(q =="other"){
    $('#jsonF,#htmtitl').hide();$('.containercl').hide();
    $('#textBox').css('height','350px');
    }
