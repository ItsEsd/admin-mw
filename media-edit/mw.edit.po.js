// M A S T R O W A L L ////////////////////////////

var r1= "https://script.google.com/macros/s/";
var rsign ="AKfycbw_eFwIQBrL_iROgSRuNxGLf5SQByAqRE8_beLh9kXWWO2ZyLCltmZgTqSpoknVUIR1/exec"
document.getElementById("in").addEventListener("click", LogAdmin);
function LogAdmin() {
  var mail = document.getElementById("em").value;
  var pass = document.getElementById("idop").value;
  if (pass != 0) {
    document.getElementById("loader1").style.visibility = "visible";

    var url = r1+rsign + "?callback=letadin&idop="+pass+"&emop="+mail+"&action=adin";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
  } else {
    return false;
  }

}

function letadin(e){
var res = e.result;
console.log(res);
if(res =="ID found"){
    document.getElementById("iamin").style.display = "block";
    document.getElementById("logAd").style.display = "none";
    document.getElementById("loader1").style.visibility = "hidden";
}
else {
    document.getElementById("loader1").style.visibility = "hidden";
  }
}

// Serialization //////////////////////////

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
  
// Med One Preview and Update #1 ////////////////////////////

$('form[id="mwall_inmedia#1"]').submit(function() {
        var TOD, k;
        document.getElementById("inmedia1_json").value = escape(JSON.stringify($('form[id="mwall_inmedia#1"]').serializeObject()));
        document.getElementById("postn").disabled = false;
        k = unescape(document.getElementById("inmedia1_json").value);
        TOD = JSON.parse(k);
        $('#mwall_inmedia1').empty();
        console.log(TOD,TOD.conTitle1);
        $('#mwall_inmedia1').show();
        document.getElementById("mwall_inmedia1").innerHTML += '<p style="color:black;">' + TOD.conTitle1 + '<a target="_blank" class="readmore" href="' + TOD.conLink1 + '">' + TOD.conSiteName1 + '</a> </p> <hr> ';
      
    });
 

document.getElementById("postn").addEventListener("click", update_value_inmone);
function update_value_inmone() {
    document.getElementById("postn").disabled = true;
    var upnews = $("#inmedia1_json").val();
    var idpm = $("#idop").val();
    var emid = $("#em").val();
        var url = r1+rsign + "?callback=medoneup&idop="+idpm+"&emop="+emid+"&medone="+upnews+"&action=medonadd";
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
          });
}

function medoneup(e) {
    console.log(e.result);
    if(e.result !='ID not found!'){
        document.getElementById("connectUpNews").style.display = "block";
        setTimeout(function() {
            $('#connectUpNews').fadeOut('fast');
            }, 2000);
            var mform1 = document.getElementById('mwall_inmedia#1');
            mform1.reset();
            $('#mwall_inmedia1').hide();
    }
}
    
 // Med Two Preview and Update #2 ////////////////////////////

$('form[id="mwall_inmedia#2"]').submit(function() {
    var TOD, k;
    document.getElementById("inmedia2_json").value = escape(JSON.stringify($('form[id="mwall_inmedia#2"]').serializeObject()));
    document.getElementById("postn2").disabled = false;
    k = unescape(document.getElementById("inmedia2_json").value);
    TOD = JSON.parse(k);
    $('#mwall_inmedia2').empty();
    console.log(TOD,TOD.conTitle1);
    $('#mwall_inmedia2').show();
    document.getElementById("mwall_inmedia2").innerHTML += '<p style="color:black;">' + TOD.conTitle1 + '<a target="_blank" class="readmore" href="' + TOD.conLink1 + '">' + TOD.conSiteName1 + '</a> </p> <hr> ';
  
});


document.getElementById("postn2").addEventListener("click", update_value_inmtwo);
function update_value_inmtwo() {
document.getElementById("postn2").disabled = true;
var upnews = $("#inmedia2_json").val();
var idpm = $("#idop").val();
var emid = $("#em").val();
    var url = r1+rsign + "?callback=medtwoup&idop="+idpm+"&emop="+emid+"&medtwo="+upnews+"&action=medtwadd";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
}

function medtwoup(e) {
console.log(e.result);
if(e.result !='ID not found!'){
    document.getElementById("connectUpNews2").style.display = "block";
    setTimeout(function() {
        $('#connectUpNews2').fadeOut('fast');
        }, 2000);
        var mform1 = document.getElementById('mwall_inmedia#2');
        mform1.reset();
        $('#mwall_inmedia2').hide();
}
}


// Med Video Update ////////////////////////////

$(document).ready(function() {
    var max_vids = 40;
    var wrapper = $(".vid_wrap");
    var add_button = $(".addVid");
    var x = 1;
    $(add_button).on("click", function(e) {
      e.preventDefault();
      if (x < max_vids) {
        x++;
        $(wrapper).append(`<div class="slide"><hr style="border-color:red;border-width:1px;width:40%;"> <div> <input autocomplete="off" name="inmediamwallVid" class="form-control" id="youvlink" placeholder="Youtube Video ID" class="secvid" oninput="enablePreview()" required/></div><a href="#" class="remove_field">Remove</a><br></div>`);
      }
      if (x == max_vids) {
        $("#addv").hide();
        document.getElementById("postv").disabled = false;
      }
    });
    $(wrapper).on("click", ".remove_field", function(e) {
      e.preventDefault();
      $(this).parent('div').remove();
      $("#addv").show();
      x--;
      if (x == 1) {
        document.getElementById("previd").disabled = true;
      }
    });
  });

document.getElementById("previd").addEventListener("click", previewVid);

function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}

$(function() {
    $('form[id="mwallinmediavid"]').submit(function() {
      document.getElementById("frameVid_json").value = JSON.stringify($('form[id="mwallinmediavid"]').serializeObject());
      document.getElementById("postv").disabled = false;
      return false;
    });
  });

function previewVid() {
  var VID, a;
  a = document.getElementById("frameVid_json").value;
  VID = JSON.parse(a);
  $('#preview_youv').empty();
  var j = 0;
  var maxTOD = VID.inmediamwallVid.length;
  var er = JSON.parse(a);
  var error1 = er.inmediamwallVid[0].length;
  var error2 = er.inmediamwallVid[1].length;
  if (error1 == 1 && error2 == 1) {
    document.getElementById("preview_youv").innerHTML = "<br><p class='addmorecon'>Update or Add One More Video</p><br>";
  } else {
    for (j; j < maxTOD; j++) {
      var link = VID.inmediamwallVid[j];
      var vidId = link;
      document.getElementById("preview_youv").innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe></div></div>';
    }
  }
}

  $(function() {
    $('form[id="mwallinmediavid"]').submit(function() {
      document.getElementById("frameVid_json").value = JSON.stringify($('form[id="mwallinmediavid"]').serializeObject());
      document.getElementById("postv").disabled = false;
      return false;
    });
  });


document.getElementById("postv").addEventListener("click", update_value_youv);

function update_value_youv() {
  $("connectUpVids").empty();
  var upvids = $("#frameVid_json").val();
  var idpmv = $("#idop").val();
  var emid = $("#em").val();
  var parsedVid = JSON.parse(upvids);
  var uploadVid = escape($("#frameVid_json").val());
  var error1 = parsedVid.inmediamwallVid[0].length;
  var error2 = parsedVid.inmediamwallVid[1].length;
  document.getElementById("postv").disabled = true;
  if (upvids != 0 && error1 > 1 && error2 > 1) {
    var url = r1+rsign + "?callback=medvdup&idop=" + idpmv + "&emop=" + emid + "&invd=" + uploadVid + "&action=medvdadd";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
   
  } else {
    document.getElementById("postv").disabled = true;
    document.getElementById("preview_youv").innerHTML = "<br><p class='addmorecon'>Update or Add One More Video</p><br>";
  }
 
}
function medvdup(e){
if(e.result !="ID not found!"){
    document.getElementById("connectUpVids").style.display = "block";
    setTimeout(function() {
        $('#connectUpVids').fadeOut('fast');
      }, 2000);
    }
document.getElementById("postv").disabled = false;
}

// Med Quote Update /////////////////////

$(function() {
    $('form[id="quote_edit"]').submit(function() {
      document.getElementById("quotes_json").value = escape(JSON.stringify($('form[id="quote_edit"]').serializeObject()));
      document.getElementById("quotes_json_unesc").value = JSON.stringify($('form[id="quote_edit"]').serializeObject());
      document.getElementById("prequote").disabled = false;
      document.getElementById("postq").disabled = false;
      return false;
    });
  });

document.getElementById("prequote").addEventListener("click", previewQuote);

function previewQuote() {
    var Quote, a;
    a = unescape(document.getElementById("quotes_json").value);
    Quote = JSON.parse(a);
    $('#preview_quote').empty();
    var j = 0;
    var maxQ = Quote.dquoteWall.length;
    for (j; j < maxQ; j++) {
    document.getElementById("preview_quote").innerHTML += '<div style="border:1px solid #0c29cd;margin-top:10px;border-radius:6px;max-width:400px;"><p style="color:#0c29cd;">' + Quote.dquoteWall[j] + '</p></div>';
    }
}

document.getElementById("postq").
addEventListener("click", update_value_quote);

function update_value_quote() {
  $("connectUpQuotes").empty();
  var upqs = $("#quotes_json").val();
  var idpmv = $("#idop").val();
  var emid = $("#em").val();
  if (upqs != 0) {
    document.getElementById("postq").disabled = true;
    var url = r1+rsign + 
    "?callback=medupqt&idop=" +
     idpmv + "&emop=" + 
     emid + "&inqt=" + 
     upqs + "&action=medqtadd";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    } else {
    return false;
    }
}

function medupqt(e){
if(e.result != "ID not found!"){
    document.getElementById("connectUpQuotes").style.display = "block";
    setTimeout(function() {
        $('#connectUpQuotes').fadeOut('fast');
      }, 2000);
    }
document.getElementById("postq").disabled = true;
}