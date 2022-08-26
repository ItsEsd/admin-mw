// /////////////////////

var r1= "https://script.google.com/macros/s/";
var rsign ="AKfycbw_eFwIQBrL_iROgSRuNxGLf5SQByAqRE8_beLh9kXWWO2ZyLCltmZgTqSpoknVUIR1/exec"
var rB = "https://script.google.com/macros/s/";
var rShow = "AKfycbz9XUzdTUILZDwU_hy1_JdRyjvA7zgLYZl1smOuUw4WmwDL9BOrkLnIQqn5XybdGEpm/exec"
function read_tm() {
  $('#inm1,#inm2,#vid,#dquote,#exinfos').empty();
  document.getElementById("showhtml").style.display = "block";
  document.getElementById("id03").style.display = "none";
  document.getElementById("loader_in").style.visibility = "visible";
  var url = rB+rShow +
   "?callback=getData&action=rdtmin";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

function getData(e){
  var nwone = e.resmedone[0];
  var nwtwo = e.resmedtwo[0];
  var mdvd = e.resmedvd[0];
  var mdqt = e.resmedqt[0];
  var mdex = e.resmedexin[0];

  var dnumbmd1 = Object.keys(nwone).length;
  var dnumbmd2 = Object.keys(nwtwo).length;
  var dnumbvd = Object.keys(mdvd).length;
  var dnumbqt = Object.keys(mdqt).length;
  var dnumbex = Object.keys(mdex).length;
 
var db = 'data';

// Med News #1 /////////////////////

for(var k=1;k<=dnumbmd1;k++){
var dataset = db+k;
var data = nwone[dataset];
var innews = JSON.parse(data[0].InMedia1);
document.getElementById("inm1").innerHTML += '<div class="activitytl"><input class="conidmdone" value="'+data[0].ConID+'"><span class="delmdnewsone" onclick="delmdnone(this);">Delete</span></div><p style="color:black;" class="telenewsblock">' + innews.conTitle1 + '<a target="_blank" class="readmore" href="' + innews.conLink1 + '">' + innews.conSiteName1 + '</a> </p><hr> ';
}

// Med News #2 /////////////////////

for(var k=1;k<=dnumbmd2;k++){
  var dataset = db+k;
  var data = nwtwo[dataset];
  var innews = JSON.parse(data[0].InMedia2);
  document.getElementById("inm2").innerHTML += '<div class="activitytl"><input class="conidmdtwo" value="'+data[0].ConID+'"><span class="delmdnewstwo" onclick="delmdntwo(this);">Delete</span></div><p style="color:black;" class="telenewsblock">' + innews.conTitle1 + '<a target="_blank" class="readmore" href="' + innews.conLink1 + '">' + innews.conSiteName1 + '</a> </p><hr> ';
  }

// Med Video  /////////////////////
var vid = document.getElementById('vid');
for(var k=1;k<=dnumbvd;k++){
  var dataset = db+k;
  var data = mdvd[dataset];
  var invid = JSON.parse(data[0].YouVidWall);
  var vslen = invid.inmediamwallVid.length;
  var elem = document.createElement('div');
  elem.innerHTML = '<div class="activitytlvd"><input class="conidmdvd" value="'+data[0].ConID+'"><span class="delmdvd" onclick="delmdvd(this);">Delete</span></div>'
  vid.append(elem);
  for (var m = 0; m < vslen; m++) {
  var link = invid.inmediamwallVid[m];
  var vidid = link; 
  vid.innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidid + '" frameborder="0" allowfullscreen></iframe></div></div>';
}  
}

// Quotes /////////////////////////

  var QT = document.getElementById('dquote');
  for(var k=1;k<=dnumbqt;k++){
    var dataset = db+k;
    var data = mdqt[dataset];
    var inqt = JSON.parse(data[0].Quotes);
    var qtlen = inqt.dquoteWall.length;
    var elem = document.createElement('div');
    elem.innerHTML = '<div class="activitytlqt"><input class="conidmdqt" value="'+data[0].ConID+'"><span class="delmdqt" onclick="delmdqt(this);">Delete</span></div>'
    QT.append(elem);
    for (var m = 0; m < qtlen; m++) {
      var link = inqt.dquoteWall[m];
    document.getElementById("dquote").innerHTML += '<div class="qu">' + link + '</div> ';
    }
    }

// Exam Info /////////////////////////

var ets = document.getElementById('exinfos');
for(var k=1;k<=dnumbex;k++){
  var dataset = db+k;
  var data = mdex[dataset];
  var inqt = JSON.parse(data[0].ExamInfo);
  var elem = document.createElement('div');
  elem.innerHTML = '<div class="activitytlex"><input class="conidmdex" value="'+data[0].ConID+'"><span class="delmdex" onclick="delmdex(this);">Delete</span></div>'
  ets.append(elem);
     document.getElementById("exinfos").innerHTML += '<div class="exinf">' + inqt.exminfo + '</div> ';
  }

// if(e.resmedone !=""){
// // document.getElementById("frameVid_json").value= json.records[0].YouVidWall;
// // document.getElementById("inmedia2_json_unesc").value=json.records[0].InMedia2;
// // document.getElementById("inmedia1_json_unesc").value=json.records[0].InMedia1;
// // document.getElementById("quotes_json_unesc").value=json.records[0].Quote;
// }
document.getElementById("loader_in").style.visibility = "hidden";
}


// ////////////////////////

$('#inmediash').click(function(){
  document.getElementById('upd').style.display='none';
  document.getElementById('id03').style.display='none';
  document.getElementById('update').style.display='block';
  document.getElementById('imifrmedit').style.display='none';
  document.getElementById('nvbtn').style.display='none';
  read_tm();
});

$('#shhtmledit').click(function(){
  document.getElementById('showhtml').style.display='none';
  document.getElementById('update').style.display='none';
  document.getElementById('upd').style.display='block';
  document.getElementById('nvbtn').style.display='block';
  document.getElementById('imifrmedit').style.display='block';
});

// Admin /////////////////////////////

function delmdnone(label){
  $("#secdelad").show();
  var list = document.getElementsByClassName('delmdnewsone');
  list = [].slice.call(list);
  var posoftd = list.indexOf(label);
  var x = document.getElementsByClassName('conidmdone');
       var conid = x[posoftd].value;
        document.getElementById('conref').value = conid;
        delconsm(conid,"medonrmv");
      
}

function delmdntwo(label){
  $("#secdelad").show();
  var list = document.getElementsByClassName('delmdnewstwo');
  list = [].slice.call(list);
  var posoftd = list.indexOf(label);
  var x = document.getElementsByClassName('conidmdtwo');
       var conid = x[posoftd].value;
        document.getElementById('conref').value = conid;
          delconsm(conid,"medtwrmv");
}

function delmdvd(label){
  $("#secdelad").show();
  var list = document.getElementsByClassName('delmdvd');
  list = [].slice.call(list);
  var posoftd = list.indexOf(label);
  var x = document.getElementsByClassName('conidmdvd');
       var conid = x[posoftd].value;
        document.getElementById('conref').value = conid;
          delconsm(conid,"medvdrmv");
}

function delmdqt(label){
  $("#secdelad").show();
  var list = document.getElementsByClassName('delmdqt');
  list = [].slice.call(list);
  var posoftd = list.indexOf(label);
  var x = document.getElementsByClassName('conidmdqt');
       var conid = x[posoftd].value;
        document.getElementById('conref').value = conid;
          delconsm(conid,"medqtrmv");
}

function delmdex(label){
  $("#secdelad").show();
  var list = document.getElementsByClassName('delmdex');
  list = [].slice.call(list);
  var posoftd = list.indexOf(label);
  var x = document.getElementsByClassName('conidmdex');
       var conid = x[posoftd].value;
        document.getElementById('conref').value = conid;
          delconsm(conid,"medexirmv");
}

var delconsm = function(cnid,action){
    $('#delcon').attr('disabled',true);
    var idpmv = $("#idop").val();
    var emid = $("#em").val(); 
    var url = rB+rsign + 
    "?callback=medondel&idop=" +
     idpmv + "&emop=" + emid + 
     "&cnid=" + cnid +
     "&action="+action+"";
      var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
      });
}

function medondel(e){
  if(e.result !='ID not found!'){
    read_tm();
    document.getElementById('conref').value= "null";
    $('#delcon').attr('disabled',false);
    $("#secdelad").hide();
  }
}