// This is your master code if you use google docs only replace the ID (The long string of weird characters).
var masterDoc = "https://docs.google.com/document/d/1S4IMSP9iukmw60jA_-YfFpbaSiWY3r-fFYJITxEk6iw/export?format=txt";

$(function() {
  $.get(masterDoc, function(data) {
      links = data.split(",");
      $(links.reverse()).each(function( index ) {
        var linkItem =  links[index]
        var linkUrl = linkItem.substring(linkItem.indexOf(":") + 1);
        var linkTitle = linkItem.substring(0, linkItem.indexOf(':'));
        $( ".links" ).append( '\
          <li class="linkItem">\
            <a href="' + linkUrl + '" target="_blank">' + linkTitle + '</a>\
          </li>\
        ');
      })
  });
});

// This is for close the rules and never show again.
if(localStorage.getItem("DontShow")) {
    $(".rules").hide();
}

$(document).on("click  touchstart", "#okButton", function() {
  localStorage.setItem("DontShow", "true");
  $(".rules").hide();
});