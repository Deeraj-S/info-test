function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username* ";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email* ";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password* ";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must 6 letters* ";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password* ";
        return false;
    }
    else if(document.Formfill.CPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password dosen't match* ";
        return false;
    }
    /*
    else if(document.Formfill.Password.value==document.Formfill.CPassword.value){
        popup.classList.add("open-slide");
        return false;
    }*/
 }