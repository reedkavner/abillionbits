//  it's gross in here. please don't look. 
//  fine, you can look, but never tell me that you looked.

$(document).ready(function() {

var source   = $("#template-show-item").html();
var template = Handlebars.compile(source);

$.getJSON(
  'https://spreadsheets.google.com/feeds/list/1KaQ4InLAKf0ufS0wW_4UJ7Ky2vp33ifarYIQWfCbEA4/od6/public/values?alt=json',
  function(data){
    var eventsDirty = data.feed.entry;
    if (eventsDirty != undefined){
      var events=[];
      $.each(eventsDirty, function(key){
        events.push({
          date: eventsDirty[key]["gsx$date"]["$t"],
          name: eventsDirty[key]["gsx$name"]["$t"],
          venue: eventsDirty[key]["gsx$venue"]["$t"],
          linkurl: eventsDirty[key]["gsx$linkurl"]["$t"],
          linktext: eventsDirty[key]["gsx$linktext"]["$t"]
        });
      });
      var context = { events: events };
      var eventsHtml = template(context);
      $("#all-shows").append(eventsHtml);
    }else{
      $(".schedule-empty").show();
    }
    
  }).fail(function(){
    $(".schedule-error").show();
  }).always(function(){
    $(".schedule-loading").hide();
  })
  





//document.ready  
});
