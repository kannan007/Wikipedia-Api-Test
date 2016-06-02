$(document).ready(function(){
  $("#field1").keypress(function(e)
    {
      var searchitem=$("#field1").val();
    var key=e.which;
    if(key===13 && searchitem==="")
      {
        $("span").fadeIn();
      }
    else if(key===13 && searchitem!=="")
      {
        $("span").hide();
        $(".result").empty();
      var link="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+searchitem+"&callback=JSON_CALLBACK";
$.ajax({
  url: link,
  dataType:"jsonp",
  method:"POST"
}).done(function(data) { 
$.each(data.query.pages,function(i,field){
 var setlink="https://en.wikipedia.org/?curid="+field.pageid; 
$(".result").append("<div class='item'><a href='"+setlink+"' target='_blank'><h2>"+field.title+"</h2></a><p class='text-center'>"+field.extract+"</div>");  
});
});
$(document).ajaxError(function(e,xhr)
{
  alert(xhr.status + xhr.statusText);
});
}
});
});