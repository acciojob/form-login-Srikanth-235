function getFormvalue() {
    //Write your code here
	const firstname=document.getElementsByName("fname")[0].value;
	const lastname=document.getElementsByName("lname")[0].value;
	const concat1= `${firstname} ${lastname}`;
	alert(concat1);
     
}
