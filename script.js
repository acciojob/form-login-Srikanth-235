function getFormvalue() {
    //Write your code here
	const firstname=document.getElementsByName("fname")[0].value.trim();
	const lastname=document.getElementsByName("lname")[0].value.trim();
	const concat1= `${firstname} ${lastname}`;
	alert(concat1);
     
}
