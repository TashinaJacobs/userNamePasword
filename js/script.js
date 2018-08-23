function checkForm(form){
  if (form.username.value == "") {
    alert("Error: username cannot be blank");
    form.username.focus();
    return false;
  }
  re = /^\w+$/;
  if (!re.test(form.username.value)) {
    alert("Error: username must contain only letters, numbers and underscore!");
    form.username.focus();
    return false;
  }
  if (form.pwd1.value != "" && form.pwd2.value === form.pwd1.value) {
    if (form.pwd1.value.length < 6) {
      alert("Error: Password must contain at least 6 characters!");
      form.pwd1.focus();
      return false;
    }
    if (form.pwd1.value == form.username.value) {
      alert("Error: Password and username cannot be the same!");
      form.pwd1.focus();
      return false;
    }
    re = /[a-z]/;
     if (!re.test(form.pwd1.value)) {
         alert("ERROR! Password should contain at least one lowercase");
         form.pwd1.focus();
         return false;
     }
     re = /[A-Z]/;
     if (!re.test(form.pwd1.value)) {
         alert("ERROR! Password should contain at least one uppercase");
         form.pwd1.focus();
         return false;
     }
     re = /[0-9]/;
     if (!re.test(form.pwd1.value)) {
         alert("ERROR! Password should contain at least one number");
         form.pwd1.focus();
         return false;
     }

  }
  else {
    alert("Error: Please check if you confirmed your password!");
    return false;
  }
  alert("You have entered a valid password:"+form1.pwd1.value);
  return true;
}
