const mail = document.getElementById('mail');
const phoneNumber = document.getElementById('phoneNumber');

mail.addEventListener('click',function(){
	copyOnClick(this.innerHTML);
});

phoneNumber.addEventListener('click',function(){
	copyOnClick(this.innerHTML);
})

function copyOnClick(data){
	console.log("Value =\"" + data + "\"");
	console.log('copyOnClick is working');

	navigator.clipboard.writeText(data);

	alert(data + "\nСкопировано !");
}