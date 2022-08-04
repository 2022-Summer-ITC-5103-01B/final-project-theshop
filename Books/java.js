
document.addEventListener("DOMContentLoaded", ()=>{

    
    
    
    document.getElementById("signUp").addEventListener("click", (evt) =>{
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        let namepattern = /^[a-zA-Z]{3,30}$/;
        
        let control = false;
        if (fname=="" || !namepattern.test(fname)){

            document.getElementById('message').innerHTML = 'Please enter first name with letter only';
            document.getElementById('faceuyari').style.display='block';



       
        control = false;
        }
        
        else if(lname=="" || !namepattern.test(lname)){

            document.getElementById('message').innerHTML = 'Please enter last name with letter only';
            document.getElementById('faceuyari').style.display='block';
            control = false;
        }
        
        else if(email==""){
            
            document.getElementById('message').innerHTML = 'Please enter your email';
            document.getElementById('faceuyari').style.display='block';
            control = false;
        }
        
        else if(password==""){

            document.getElementById('message').innerHTML = 'Please enter your password';
            document.getElementById('faceuyari').style.display='block';
            
            control = false;
        }
        
        else if(password2 != password || password2==""){
            document.getElementById('message').innerHTML = 'Password needs to be confirmed';
            document.getElementById('faceuyari').style.display='block';

            control = false;
        }

        else if( document.getElementById("C1").checked == false){
            document.getElementById('message').innerHTML = 'Please accept the Terms of Use & Privacy Policy';
            document.getElementById('faceuyari').style.display='block';
          
            control = false;
            evt.preventDefault();

        }

        else{
            evt.preventDefault();
        }
     
    });

    document.getElementById("reset").addEventListener("click", () =>{

            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("email").value="";
            document.getElementById("password").value="";
            document.getElementById("password2").value="";
       
    });
 
});




