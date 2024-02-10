function validation(){
    if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email* ";
        return false;
    }
 }