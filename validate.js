const validate = () => {
    let username = document.booking.username.value;
    let email=document.booking.email.value;
    let userstat =mobilestat=datestat=mailstat= false;
    let alphaExp=/^[A-Za-z]+$/
    let alphanumExp=/^[A-Za-z0-9]+$/
    let numExp= /^[0-9]+$/
    let mailExp= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let date=  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

    if (username === "") {
        document.getElementById('usernote').innerHTML = "Please enter your name"
        userstat=false;
    }
    else{
        if(username.match(alphaExp)) {
            document.getElementById('usernote').innerHTML = ""
            userstat=true;
        }
        else{
            document.getElementById('usernote').innerHTML = "Enter alphabets only."
            userstat=false;
        }
    }




    if(email===""){
        document.getElementById('mailnote').innerHTML="Enter your email"
        mailstat=false;
    }
    else{
        if(email.match(mailExp)){
            document.getElementById('mailnote').innerHTML="Enter your email"
            mailstat=true;
        }
        else{
            document.getElementById('mailnote').innerHTML="Enter valid email"
            mailstat=false;
        }
    }

    if(date===""){
        document.getElementById('datenote').innerHTML="Enter date"
        datestat=false;
    }
    else{
            document.getElementById('datenote').innerHTML="Enter date"
            datestat=true;
     }

    if (userstat === true && mailstat===true && datestat===true ) {
        return true;
    }
    else {
        return false
    }

}