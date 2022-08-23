// //////////////////////////////

document.getElementById("in").addEventListener("click", LogAdmin);
var script_url_inmediaMwall = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function LogAdmin() {
  var mail = document.getElementById("em").value;
  var pass = document.getElementById("idop").value;
  if (pass != 0) {
    document.getElementById("loader1").style.visibility = "visible";
    var url = script_url_inmediaMwall + "?action=read";
    $.getJSON(url, function(json) {
      if (pass == json.records[0].AdminPass && mail == json.records[0].AdminMail) {
        document.getElementById("iamin").style.display = "block";
        document.getElementById("logAd").style.display = "none";
        document.getElementById("loader1").style.visibility = "hidden";
      }
    });
  } else {
    return false;
  }
}


// ///////////////////////////////

$(document).ready(function() {
    var max_fields = 40;
    var wrapper = $(".wrapperNews");
    var add_button = $(".add_field_button");
    var x = 1;
    $(add_button).on("click", function(e) {
      e.preventDefault();
      if (x < max_fields) {
        x++;
        $(wrapper).append(`<div class="slide"><hr style="border-color:#008000;border-width:2px;"> <div class="contentN1"> <p style="float:left;color:white;">In News</p><textarea autocomplete="off" type="text" name="conTitle1" class="form-control" placeholder="Header Content / Embed" required></textarea> <input autocomplete="off" type="url" name="conLink1" class="form-control" placeholder="URL Link " required /> <textarea autocomplete="off" type="text" name="conSiteName1" class="form-control" placeholder="Footer Content" required></textarea> </div> <a href="#" class="remove_field" style="background-color:white">Remove</a><br></div>`);
      }
      if (x == max_fields) {
        $("#addtod").hide();
      }
      if (x == 2) {
        document.getElementById("postn").disabled = false;
      }
    });
    $(wrapper).on("click", ".remove_field", function(e) {
      e.preventDefault();
      $(this).parent('div').remove();
      $("#addtod").show();
      x--;
      if (x == 1) {
        document.getElementById("newspre").disabled = true;
        document.getElementById("postn").disabled = true;
      }
    })
  });

  function PreTOD() {
    var TOD, k;
    k = unescape(document.getElementById("inmedia1_json").value);
    TOD = JSON.parse(k);
    $('#mwall_inmedia1').empty();
    var j = 0;
    var maxTOD = TOD.conTitle1.length;
    var error1 = TOD.conLink1[0].length;
    var error2 = TOD.conLink1[1].length;
    if (error1 == 1 && error2 == 1) {$('#mwall_inmedia1').show();
      document.getElementById("mwall_inmedia1").innerHTML = "<br><p class='addmorecon'>Update or Add One More News</p><br>";
    } else {
      for (j; j < maxTOD; j++) {$('#mwall_inmedia1').show();
        document.getElementById("mwall_inmedia1").innerHTML += '<p style="color:black;">' + TOD.conTitle1[j] + '<a target="_blank" class="readmore" href="' + TOD.conLink1[j] + '">' + TOD.conSiteName1[j] + '</a> </p> <hr> ';
      }
    } 
  }

//   /////////////////////////////////

document.getElementById("postn").addEventListener("click", update_value_inmone);
var script_url_mwallNewsUp = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function update_value_inmone() {
  document.getElementById("loader_n").style.visibility = "visible";
  var upnews = $("#inmedia1_json").val();
  var idpm = $("#idop").val();
  var emid = $("#em").val();
  var unEScINM1 = unescape(upnews);
  var parsedINM1 = JSON.parse(unEScINM1);
  var error1 = parsedINM1.conLink1[0].length;
  var error2 = parsedINM1.conLink1[1].length;
  if (upnews != 0 && error1 > 1 && error2 > 1) {
    var url = script_url_mwallNewsUp + "?callback=ctrlq&idop=" + idpm + "&em=" + emid + "&inmedia1_json=" + upnews + "&action=update_inmone";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById("connectUpNews").style.display = "block";
    document.getElementById("loader_n").style.visibility = "hidden";
  } else {
    document.getElementById("loader_n").style.visibility = "visible";
    document.getElementById("postn").disabled = true;
    document.getElementById("mwall_inmedia1").innerHTML = "<br><p class='addmorecon'>Update or Add One More News</p><br>";
  }
  setTimeout(function() {
    $('#connectUpNews').fadeOut('fast');
  }, 2000);
}

function ctrlq() {}

// ///////////////////////////////////

$(document).ready(function() {
    var max_fields = 40;
    var wrapper = $(".wrapperNews2");
    var add_button = $(".add_field_button2");
    var x = 1;
    $(add_button).on("click", function(e) {
      e.preventDefault();
      if (x < max_fields) {
        x++;
        $(wrapper).append(`<div class="slide"><hr style="border-color:#008000;border-width:2px;"> <div class="contentN1"> <p style="float:left;color:white;">In News</p><textarea autocomplete="off" type="text" name="conTitle1" class="form-control" placeholder="Header Content / Embed" required></textarea> <input autocomplete="off" type="url" name="conLink1" class="form-control" placeholder="URL Link " required /> <textarea autocomplete="off" type="text" name="conSiteName1" class="form-control" placeholder="Footer Content" required ></textarea> </div> <a href="#" class="remove_field" style="background-color:white">Remove</a><br></div>`);
      }
      if (x == max_fields) {
        $("#addtod2").hide();
      }
      if (x == 2) {
        document.getElementById("postn2").disabled = false;
      }
    });
    $(wrapper).on("click", ".remove_field", function(e) {
      e.preventDefault();
      $(this).parent('div').remove();
      $("#addtod2").show();
      x--;
      if (x == 1) {
        document.getElementById("newspre2").disabled = true;
        document.getElementById("postn2").disabled = true;
      }
    })
  });

  function PreTOD2() {
    var TOD, k;
    k = unescape(document.getElementById("inmedia2_json").value);
    TOD = JSON.parse(k);
    $('#mwall_inmedia2').empty();
    var j = 0;
    var maxTOD = TOD.conTitle1.length;
    var error1 = TOD.conLink1[0].length;
    var error2 = TOD.conLink1[1].length;
    if (error1 == 1 && error2 == 1) {$('#mwall_inmedia2').show();
      document.getElementById("mwall_inmedia2").innerHTML = "<br><p class='addmorecon'>Update or Add One More News</p><br>";
    } else {
      for (j; j < maxTOD; j++) {$('#mwall_inmedia2').show();
        document.getElementById("mwall_inmedia2").innerHTML += '<p style="color:black;">' + TOD.conTitle1[j] + '<a target="_blank" class="readmoren" href="' + TOD.conLink1[j] + '">' + TOD.conSiteName1[j] + '</a> </p> <hr> ';
      }
    }
  }

//   //////////////////////////////////

document.getElementById("postn2").addEventListener("click", update_value_inmtwo);
var script_url_mwallNewsUp = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function update_value_inmtwo() {
  document.getElementById("loader_n2").style.visibility = "visible";
  var upnews2 = $("#inmedia2_json").val();
  var idpm = $("#idop").val();
  var emid = $("#em").val();
  var unEScINM2 = unescape(upnews2);
  var parsedINM2 = JSON.parse(unEScINM2);
  var error1 = parsedINM2.conLink1[0].length;
  var error2 = parsedINM2.conLink1[1].length;
  if (upnews2 != 0 && error1 > 1 && error2 > 1) {
    var url = script_url_mwallNewsUp + "?callback=ctrlq&idop=" + idpm + "&em=" + emid + "&inmedia2_json=" + upnews2 + "&action=update_inmtwo";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById("connectUpNews2").style.display = "block";
    document.getElementById("loader_n2").style.visibility = "hidden";
  } else {
    document.getElementById("loader_n2").style.visibility = "visible";
    document.getElementById("postn2").disabled = true;
    document.getElementById("mwall_inmedia2").innerHTML = "<br><p class='addmorecon'>Update or Add One More News</p><br>";
  }
  setTimeout(function() {
    $('#connectUpNews2').fadeOut('fast');
  }, 2000);
}

function ctrlq() {}

// ////////////////////////////

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
$(document).ready(function() {
  var max_vids = 7;
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


// ////////////////////////////

document.getElementById("postv").addEventListener("click", update_value_youv);
var script_url_mwallVidsUp = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function update_value_youv() {
  $("connectUpVids").empty();
  var upvids = $("#frameVid_json").val();
  var idpmv = $("#idop").val();
  var emid = $("#em").val();
  var parsedVid = JSON.parse(upvids);
  var uploadVid = escape($("#frameVid_json").val());
  var error1 = parsedVid.inmediamwallVid[0].length;
  var error2 = parsedVid.inmediamwallVid[1].length;
  document.getElementById("loader_v").style.visibility = "visible";
  if (upvids != 0 && error1 > 1 && error2 > 1) {
    var url = script_url_mwallVidsUp + "?callback=ctrlq&idop=" + idpmv + "&em=" + emid + "&frameVid_json=" + uploadVid + "&action=update_youv";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById("connectUpVids").style.display = "block";
    document.getElementById("loader_v").style.visibility = "hidden";
  } else {
    document.getElementById("loader_v").style.visibility = "visible";
    document.getElementById("postv").disabled = true;
    document.getElementById("preview_youv").innerHTML = "<br><p class='addmorecon'>Update or Add One More Video</p><br>";
  }
  setTimeout(function() {
    $('#connectUpVids').fadeOut('fast');
  }, 2000);
}

// /////////////////////////////////

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

// /////////////////////

document.getElementById("postq").addEventListener("click", update_value_quote);
var script_url_mwallQsUp = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function update_value_quote() {
  $("connectUpQuotes").empty();
  var upqs = $("#quotes_json").val();
  var idpmv = $("#idop").val();
  var emid = $("#em").val();
  if (upqs != 0) {
    var url = script_url_mwallQsUp + "?callback=ctrlq&idop=" + idpmv + "&em=" + emid + "&quotes_json=" + upqs + "&action=update_quote";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById("connectUpQuotes").style.display = "block";
  } else {
    document.getElementById("connectUpQuotes").style.display = "none";
  }
  setTimeout(function() {
    $('#connectUpQuotes').fadeOut('fast');
  }, 2000);
}

// //////////////////////////

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
  $(function() {
    $('form[id="mwall_inmedia#1"]').submit(function() {
      document.getElementById("inmedia1_json").value = escape(JSON.stringify($('form[id="mwall_inmedia#1"]').serializeObject()));
      document.getElementById("inmedia1_json_unesc").value = JSON.stringify($('form[id="mwall_inmedia#1"]').serializeObject());
      document.getElementById("postn").disabled = false;
      document.getElementById("inmpre1").disabled = false;
      return false;
    });
  });
  $(function() {
    $('form[id="mwall_inmedia#2"]').submit(function() {
      document.getElementById("inmedia2_json").value = escape(JSON.stringify($('form[id="mwall_inmedia#2"]').serializeObject()));
      document.getElementById("inmedia2_json_unesc").value = JSON.stringify($('form[id="mwall_inmedia#2"]').serializeObject());
      document.getElementById("postn2").disabled = false;
      document.getElementById("inmpre2").disabled = false;
      return false;
    });
  });
  $(function() {
    $('form[id="mwallinmediavid"]').submit(function() {
      document.getElementById("frameVid_json").value = JSON.stringify($('form[id="mwallinmediavid"]').serializeObject());
      document.getElementById("postv").disabled = false;
      return false;
    });
  });
  $(function() {
    $('form[id="quote_edit"]').submit(function() {
      document.getElementById("quotes_json").value = escape(JSON.stringify($('form[id="quote_edit"]').serializeObject()));
      document.getElementById("quotes_json_unesc").value = JSON.stringify($('form[id="quote_edit"]').serializeObject());
      document.getElementById("prequote").disabled = false;
      document.getElementById("postq").disabled = false;
      return false;
    });
  });

//   ////////////////////////////

