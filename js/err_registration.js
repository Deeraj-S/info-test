function validation(){
    if(document.Formfill.collegename.value==""){
        document.getElementById("result").innerHTML="Enter your college name* ";
        return false;
    }
    else if(document.Formfill.codeweb.value==""){
        document.getElementById("result").innerHTML="Enter participant names and email id for coding and web* ";
        return false;
    }
    else if(document.Formfill.quiz.value==""){
        document.getElementById("result").innerHTML="Enter participant names and email id for quiz* ";
        return false;
    }
    else if(document.Formfill.gaming.value==""){
        document.getElementById("result").innerHTML="Enter participant names and email id for gaming* ";
        return false;
    }
    else if(document.Formfill.modelmaking.value==""){
        document.getElementById("result").innerHTML="Enter participant names and email id for modelmaking* ";
        return false;
    }
    else if(document.Formfill.paper.value==""){
        document.getElementById("result").innerHTML="Enter participant names and email id for paper* ";
        return false;
    }
    else if(document.Formfill.cultural.value==""){
        document.getElementById("result").innerHTML="Enter participant names and email id for cultural* ";
        return false;
    }
}