$(function(){
 
    $("#contact_form").submit(function() {
    
        var name = $("#fname").val();
        var email = $("#femail").val();
        var title = $("#ftitle").val();
        var text = $("#ftext").val();
        var check = $("#fcheck").val();
        var output = '';
    
        
        if (name == '' || email == '' || title == '' || text == '' || check == '') {
            output += 'Fill in all fields';
        }
        else if(check!=108) {
           output += 'Invalid operation result';
        } 
        else if(!(email.indexOf('@') > 0)) {
            output += 'The e-mail address is not valid';
        }
        else {
             $("#msg").html("<span class='ok'>Sent Successfully</span>");
             return false;
        }
    
        $("#msg").html("<span class='error'>"+ output +"</span>");
        return false;
    });
    
    $("#signup_form").submit(function() {
    
        var email = $("#femail").val();
        var pass = $("#fpassword").val();
        var pass2 = $("#fpassword2").val();
        var output = '';
        
        if (email == '' || pass == '' || pass2 == '') {
            output += 'Fill in all fields';
        }
        else if(pass.length < 8) {
            output += 'The password should be at least 8 characters long';
        }
        else if(pass!=pass2) {
        output += 'Passwords vary';
        }
        else if(!(email.indexOf('@') > 0)) {
            output += 'The e-mail address is not valid';}
        else {
            $("#msg").html("<span class='ok'>The account has been created</span>");
            return false;
        }
    
        $("#msg").html("<span class='error'>"+ output +"</span>");
        return false;
    });
    
    }); 