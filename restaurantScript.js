function clearErrors(){
    for (var loopCounter=0; loopCounter < document.forms["contactUs"].elements.length; loopCounter++){
        if(document.forms["contactUs"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
            document.forms["contactUs"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function validateForm(){
    clearErrors();
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;
    var reason = document.forms["contactUs"]["reason"].value;

    if(name == ""|| null){
        alert("Name is a required field.");
        document.forms["contactUs"]["name"].parentElement.className = "form-group has-error";
        document.forms["contactUs"]["name"].focus();
        return false;
    }
    if(email == ""){
        alert("Email is a required field.");
        document.forms["contactUs"]["email"].parentElement.className = "form-group has-error";
        document.forms["contactUs"]["email"].focus();
        return false;
    }
    if(phone == ""){
        alert("Phone is a required field.");
        document.forms["contactUs"]["phone"].parentElement.className = "form-group has-error";
        document.forms["contactUs"]["phone"].focus();
        return false;
    }

}