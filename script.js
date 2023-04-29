const mail = document.getElementById('mail');
const phoneNumber = document.getElementById('phoneNumber');

const sideMenuElement = document.querySelector('.sideMenu');
const sideMenuBackgroundElement = document.querySelector('.sideMenu .background');

const burgerIconElement = document.getElementById('burgerIcon');

let burgerIconClassName = "fa-bars";
let closeIconClassName = "fa-xmark";



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
	document.querySelector('.loaderWrapper').style.display="none";
}

//---------------------Animation Intersection Observer for Parents--------------------//
// get all the parentElements
const parentAnimationElements = document.querySelectorAll('.parentAnimate');

//hide all the childrens in parentElements
parentAnimationElements.forEach(element =>{
	console.log(element);
	Array.from(element.children).forEach(child => child.classList.add('hidden'));
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {

		if(entry.isIntersecting)
		{
			Array.from(entry.target.children).forEach(child => {
				if(child.hasAttribute('data-animation')){
					child.classList.add(child.getAttribute('data-animation'));
				}
			});

			// entry.target.classList.add('show');
		}
		else{
			// entry.target.classList.remove('show');
		}
	});
});

parentAnimationElements.forEach(element => observer.observe(element));



//Copy mail
mail.addEventListener('click',function(){
	mailTo(this.innerHTML);
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

function mailTo(value){
	window.location.href = "mailto:" + value;
}