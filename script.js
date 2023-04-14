const mail = document.getElementById('mail');
const phoneNumber = document.getElementById('phoneNumber');

const sideMenuElement = document.querySelector('.sideMenu');
const burgerIconElement = document.getElementById('burgerIcon');

let burgerIconClassName = "fa-bars";
let closeIconClassName = "fa-xmark";

console.log(sideMenuElement);
console.log(burgerIconElement);

//toggle open class on sidemenu
burgerIconElement.addEventListener('click',function(){
	sideMenuElement.classList.toggle("open");
});

//Change Burger Icon to the XMark ('close') button ;
burgerIconElement.addEventListener('click', function(){
	toggleClass(this,burgerIconClassName,closeIconClassName);
});

mail.addEventListener('click',function(){
	copyToClipboard(this.innerHTML);
});

phoneNumber.addEventListener('click',function(){
	copyToClipboard(this.innerHTML);
})

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