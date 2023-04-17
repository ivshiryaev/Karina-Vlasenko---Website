const mail = document.getElementById('mail');
const phoneNumber = document.getElementById('phoneNumber');

const sideMenuElement = document.querySelector('.sideMenu');
const sideMenuBackgroundElement = document.querySelector('.sideMenu .background');

const burgerIconElement = document.getElementById('burgerIcon');

let burgerIconClassName = "fa-bars";
let closeIconClassName = "fa-xmark";

//--------Load all the images when open the page-------//
window.onload = function() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
	  images[i].src = images[i].getAttribute("data-src");
	}
  }


//---------------------Animation FadeIn--------------------//
const animationElement = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting)
		{
			entry.target.classList.add('show');
		}else{
			entry.target.classList.remove('show');
		}
	});
});

animationElement.forEach((element) => {
  observer.observe(element);
});



//Copy mail
mail.addEventListener('click',function(){
	copyToClipboard(this.innerHTML);
});

//Copy Phone
phoneNumber.addEventListener('click',function(){
	copyToClipboard(this.innerHTML);
});



//On click burger icon = switchSideMenu()
burgerIconElement.addEventListener('click',function(){
	switchSideMenu();
});

//Click sidemenu background to close sidemenu
sideMenuBackgroundElement.addEventListener('click',function(){
	switchSideMenu();
});


function switchSideMenu(){
	//toggle open class on sidemenu
	sideMenuElement.classList.toggle("open");
	//toggle scroll on/off
	document.querySelector('body').classList.toggle('noScroll');
	//Switch burger icon
	toggleClass(burgerIconElement,burgerIconClassName,closeIconClassName);
}

//If element has class1 , toggle it to class2
function toggleClass(element,class1,class2){
	if(element.classList.contains(class1)){
		element.classList.remove(class1);
		element.classList.add(class2);
	}else{
		element.classList.remove(class2);
		element.classList.add(class1);
	}
}

function copyToClipboard(data){
	console.log("Value =\"" + data + "\"");
	console.log('copyToClipboard is working');

	navigator.clipboard.writeText(data);

	alert(data + "\nСкопировано !");
}