// /////////////////////

document.getElementById('inmediaShow').addEventListener("click", read_value_pic);
var script_url_inM = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function read_value_pic() {
  $('#inm1').empty();
  $('#inm2').empty();
  $('#vid').empty();
  document.getElementById("showhtml").style.display = "block";
  document.getElementById("id03").style.display = "none";
  document.getElementById("loader_in").style.visibility = "visible";
  var url = script_url_inM + "?action=read";
  $.getJSON(url, function(json) {
    var n;
    var news1 = JSON.parse(json.records[0].InMedia1);
    var maxMedia1 = news1.conTitle1.length;
    for (n = 0; n < maxMedia1; n++) {
        document.getElementById("inm1").innerHTML += '<p style="color:black;" class="telenewsblock">' + news1.conTitle1[n] + '<a target="_blank" class="readmore" href="' + news1.conLink1[n] + '">' + news1.conSiteName1[n] + '</a> </p><hr> ';
      }
    var m;
    var news2 = JSON.parse(json.records[0].InMedia2);
    var maxMedia2 = news2.conTitle1.length;
    for (m = 0; m < maxMedia2; m++) {
        document.getElementById("inm2").innerHTML += '<p style="color:black;" class="telenewsblock">' + news2.conTitle1[m] + '<a target="_blank" class="readmoren" href="' + news2.conLink1[m] + '">' + news2.conSiteName1[m] + '</a> </p><hr> ';
      }
    var y = Math.floor((Math.random() * 3) + 1);
    var quotes = JSON.parse(json.records[0].Quote);
    for (prop in json.records[0]) {
        document.getElementById("dquote").innerHTML = '<div class="qu">' + quotes.dquoteWall[y] + '</div>';
      }
    var k, m;
    var VID = JSON.parse(json.records[0].YouVidWall);
    var k = VID.inmediamwallVid.length;
    for (m = 0; m < k; m++) {
        var link = VID.inmediamwallVid[m];
        var vidid = link;
        document.getElementById("vid").innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidid + '" frameborder="0" allowfullscreen></iframe></div></div>';
      }
    document.getElementById("loader_in").style.visibility = "hidden";
    document.getElementById("frameVid_json").value= json.records[0].YouVidWall;
  // document.getElementById("inmedia2_json_unesc").value=json.records[0].InMedia2;
  // document.getElementById("inmedia1_json_unesc").value=json.records[0].InMedia1;
  document.getElementById("quotes_json_unesc").value=json.records[0].Quote;
  });
  

}