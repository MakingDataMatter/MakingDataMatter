$('.btn-primary').click(function() {
    $('.contentTable').show(); // To hide all other contents
    return false;
    // $("#tab-content2").show(); // Show the one content you want to display
});
function getData()
{
return false;
}



$('.btn-info').click(function() {
	var e = document.getElementById("propertyoptions");
var strUser = e.options[e.selectedIndex].text;
    $(".properties ul").append('<li>' + strUser+' </li>');
    return false;
    // $("#tab-content2").show(); // Show the one content you want to display
});
