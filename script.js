
function submitForm() {
     var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
  if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert('Please fill out all the fields');
        return false;
    }
 var popupContent = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender.value}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
    `;
   alert(popupContent);
 resetForm();
  return false;
}
function resetForm() {
    document.getElementById('surveyForm').reset();
}
function printDoc(){
    window.print();
}
document.getElementById("btn").addEventListener("click", printDoc);