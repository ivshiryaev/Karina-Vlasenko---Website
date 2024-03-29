const mail = document.getElementById('mail');
const phoneNumber = document.getElementById('phoneNumber');

const sideMenuElement = document.querySelector('.sideMenu');
const sideMenuBackgroundElement = document.querySelector('.sideMenu .background');

const burgerIconElement = document.getElementById('burgerIcon');

let burgerIconClassName = "fa-bars";
let closeIconClassName = "fa-xmark";

const karinaPhoneNumber = '+48500396561';

var heroImage = new Image();
var aboutImage = new Image();
var informationImage = new Image();
var myGoalImage = new Image();

heroImage.onload = () => {
	document.getElementById('heroImage').src = heroImage.src;
}
aboutImage.onload = () => {
	document.getElementById('aboutImage').src = aboutImage.src;
}
informationImage.onload = () => {
	document.getElementById('informationImage').src = informationImage.src;
}
myGoalImage.onload = () => {
	document.getElementById('myGoalImage').src = myGoalImage.src;
}

heroImage.src = 'images/hero.png';
aboutImage.src = 'images/about.png';
informationImage.src = 'images/info.png';
myGoalImage.src = 'images/goal.png';



//------------Remove loading div when page is loaded------------//
window.onload = function(){
	//Remove loading div
	document.querySelector('.loaderWrapper').style.display="none";
}

//---------------------Animation FadeIn--------------------//
const animationElement = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting)
		{
			entry.target.classList.add('show');
		}else{
			// entry.target.classList.remove('show');	
		}
	});
});

animationElement.forEach((element) => {
  observer.observe(element);
});



//Copy mail
mail.addEventListener('click',function(){
	mailTo(this.innerHTML);
});

//Copy Phone
phoneNumber.addEventListener('click',function(){
	copyToClipboard(karinaPhoneNumber);
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

function mailTo(value){
	window.location.href = "mailto:" + value;
}