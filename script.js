const content=document.querySelector(".content");
const form=document.querySelector("#form");
const firstName=document.querySelector("#firstName");
const lastName=document.querySelector("#lastName");
const email=document.querySelector("#email");
const country=document.querySelector("#country");
const zipCode=document.querySelector("#zipCode");
const password=document.querySelector("#password");
const confirmPassword=document.querySelector("#confirmPassword");
const btnSubmit=document.querySelector("#submit");
const btnCancel=document.querySelector("#cancel");
const firstNameError=document.querySelector("#firstName+span.error");
const lastNameError=document.querySelector("#lastName+span.error");
const emailError=document.querySelector("#email+span.error");
const countryError=document.querySelector("#country+span.error");
const zipCodeError=document.querySelector("#zipCode+span.error");
const passwordError=document.querySelector("#password+span.error");
const confirmPasswordError=document.querySelector("#confirmPassword+span.error");
const formError=document.querySelector(".formError");

function showError(){
   if(firstName.validity.valueMissing){
      firstNameError.textContent="Enter the First Name";
      // btnSubmit.disabled=true;
      
   }
   else if(lastName.validity.valueMissing){
      lastNameError.textContent="Enter the Last Name";
      // btnSubmit.disabled=true;
   }
   else if(email.validity.valueMissing){
      emailError.textContent="Enter an email";
      // btnSubmit.disabled=true;
   }
   else if(email.validity.typeMismatch){
      emailError.textContent="Enter an email address";
      // btnSubmit.disabled=true;
   }
   else if(country.value="default"){
      countryError.textContent="choice a country";
      // btnSubmit.disabled=true;
   }
   else if(zipCode.validity.valueMissing){
      zipCodeError.textContent="Enter a zip code";
      // btnSubmit.disabled=true;
   }
   else if(password.validity.valueMissing){
      passwordError.textContent="Enter a password";
      // btnSubmit.disabled=true;
   }
   else if(confirmPassword.validity.valueMissing){
      confirmPasswordError.textContent="confirm the password";
      // btnSubmit.disabled=true;
   }
   else{
      // btnSubmit.disabled=false;
   }
}
function validatePassword(){
   if(password.value==confirmPassword.value){
      confirmPasswordError.textContent="";
   }
   else{
      confirmPasswordError.textContent="The password don't match";
      // btnSubmit.disabled=true;
   }
}

firstName.addEventListener("input", (e)=>{
   if(firstName.validity.valid){
      firstNameError.textContent="";
      firstNameError.className="error";
   }
   else{
      showError();
   }
});
lastName.addEventListener("input", (e)=>{
   if(lastName.validity.valid){
      lastNameError.textContent="";
      lastNameError.className="error";
   }
   else{
      showError();
   }
});
email.addEventListener("input", (e)=>{
   if(email.validity.valid){
      emailError.textContent="";
      emailError.className="error";
   }
   
   else{
      showError();
   }
});
country.addEventListener("select", (e)=>{
   if(country.value!=="default"){
      countryError.textContent="";
      countryError.className="error";
   }
   else{
      showError();
   }
});
zipCode.addEventListener("input", (e)=>{
   const zipRegex=/^[0-9]{5}(?:-[0-9]{4})?$/;
   if(!zipRegex.test(zipCode.value)){
      e.preventDefault();
      zipCodeError.textContent="Enter correct zip code";
   }
   else if(zipCode.validity.valid){
      zipCodeError.textContent="";
      zipCodeError.className="error";
   }
   else{
      showError();
      zipCodeError.textContent="";
   }
});
password.addEventListener("input", (e)=>{
   if(password.validity.valid){
      passwordError.textContent="";
      passwordError.className="error";
   }
   else{
      showError();
   }
});
confirmPassword.addEventListener("input", (e)=>{
   if(password.value===confirmPassword.value){
      confirmPasswordError.textContent="The password match";
      confirmPasswordError.className="match";
      console.log("The password match");
      // btnSubmit.disabled=false;
   }
   else if(password.value!==confirmPassword.value){
      confirmPasswordError.textContent="The password don't match";
      confirmPasswordError.className="error";
      // btnSubmit.disabled=true;
      console.log("The password no match");
   }
   else{
      showError();
      confirmPasswordError.className="error";
   }
});
function showFormError(){
   if(firstName.value.trim()==="" || 
      lastName.value.trim()==="" || 
      email.value.trim()==="" || 
      country.value==="default" || 
      zipCode.value.trim()==="" || 
      password.value.trim()==="" || 
      confirmPassword.value.trim()===""){
         // btnSubmit.disabled=true;
         formError.textContent="Complete all input";
         // firstNameError.textContent="Enter the First Name";
         // lastNameError.textContent="Enter the Last Name";
         // emailError.textContent="Enter an email";
         // countryError.textContent="choice a country";
         // zipCodeError.textContent="Enter a zip code";
         // passwordError.textContent="Enter a password";
         // confirmPasswordError.textContent="Confirm the password";

   }else{
      formError.textContent="";
      // firstNameError.textContent="";
      // lastNameError.textContent="";
      // emailError.textContent="";
      // countryError.textContent="";
      // zipCodeError.textContent="";
      // passwordError.textContent="";
      // confirmPasswordError.textContent="";
      clearForm();
   }     
}
function clearForm(){
   firstName.value="";
   lastName.value="";
   email.value="";
   country.value="default";
   zipCode.value="";
   password.value="";
   confirmPassword.value="";
   confirmPasswordError.textContent="";
}
form.addEventListener("submit", (e)=>{  
   showFormError();
   e.preventDefault();
   if(!firstName.validity.valid && 
      !lastName.validity.valid && 
      !email.validity.valid && 
      !country.validity.valid && 
      !zipCode.validity.valid && 
      !password.validity.valid ){
         showError();
         formError.textContent="An error occur";
         e.preventDefault();
   }
   else{
      alert("your form is successfully submitted");
   }
   
   
});
btnCancel.addEventListener("click", ()=>{
   clearForm();
   formError.textContent="";

})