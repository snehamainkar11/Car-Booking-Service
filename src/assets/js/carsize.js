
function getservice(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var service = document.getElementByClassName('service')[0].innerText;
    alert(service);
    console.log(service)
    document.getElementByClassName('cservice')[0].innerText=service;

}
$("a[name=service]").on("click", function () { 
    var a = $(this).attr("data-index"); 
    alert(a); 
    console.warn(a)
});
 

$('.size').click(function () {
	total=document.getElementByClassName('price')[0].innerText  * 1000 + "Rs";
    document.getElementByClassName('cprice')[0].innerText =total

    alert($(this).data('value'));
    });


function price() {
  
    total=document.getElementByClassName('price')[0].innerText  * 1000 + "Rs";
    document.getElementByClassName('cprice')[0].innerText =total

}