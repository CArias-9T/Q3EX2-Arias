function ageVerify() {

	let age = document.getElementById('ageinput').value;
	let name = document.getElementById('nameinput').value;

	// if-else
	 if (age < 18) {
        document.getElementById('demo').innerHTML = 'You are not eligible to vote.';} 
     // statement 1

     else {document.getElementById('demo').innerHTML = 'You are eligible to vote!';}
     // statement 2
}