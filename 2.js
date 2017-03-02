var name_regex = /^[a-zA-Z]+$/;
var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phone_regex = /^\d{10}$/;
var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
$(document).ready(function(){
    $('#datepicker').keypress(function(key) {
        if(key) return false;
    });
    $('#phone').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });
    $("#myform").submit(function(e){
        e.preventDefault();
        $('#myform input').each(function() {
        if ($(this).val() == '') {
            this.focus();
            return false;
        }
    });
        var firstname=$('#firstname').val();
        var lastname=$('#lastname').val();
        var email=$('#email').val();
        var   password=$('#password').val();
        var datepicker=$('#datepicker').val();
        var gender=$("input[name=gender]:checked");
        //console.log(gender)
        var city=$('#city').val();
        var state=$('#state').val();
        var country=$('#country').val();
        var phone=$('#phone').val();
        var contactemail=$('#contactemail').val();
        var interest=$('#interest').val();
        var a,b;
        a=0;
        b=0;
        if (firstname.length == 0)
        {
            $('#error_firstname').text("*This field is required *");
            a=a+1;
        }
        else if(!firstname.match(name_regex))
        {
            $('#error_firstname').text("*For your name please use alphabets only");
            a=a+1;
        }
        else
        {
            $('#error_firstname').text("");
        }
        if(lastname.length == 0)
        {
            $('#error_lastname').text("*This field is required *");
            a=a+1;
        }
        else if(!lastname.match(name_regex))
        {
            $('#error_lastname').text("*For your name please use alphabets only*");
            a=a+1;
        }
        else
        {
            $('#error_lastname').text("");
        }
        if(email.length==0)
        {
            $('#error_email').text("*This field is required");
            a=a+1;
        }
        else if(!email.match(email_regex))
        {
            $('#error_email').text("*Please enter a valid email address");
            a=a+1;
        }
        else
        {
            $('#error_email').text("");
        }
        if(!(password))
        {
            $('#error_password').text("This field is required");
            a=a+1;
        }
        else
        {
            $('#error_password').text("");
        }
        if(!datepicker)
        {
            $('#error_datepicker').text("*This field is required");
            a=a+1;
        }
        else if (!datepicker.match(date_regex))
        {
            $('#error_datepicker').text("*Enter a valid date");
        }
        else
        {
            $('#error_datepicker').text("");
        }
        if(!gender.val())
        {
            $('#error_gender').text("*This field is required");
            a=a+1;
        }
        else
        {
            $('#error_gender').text("");
        }
        if(!city)
        {
            $('#error_city').text("*This field is required");
            a=a+1;
        }
        else
        {
            $('#error_city ').text("");
        }
        if(!state)
        {
            $('#error_state').text("*This field is required");
            a=a+1;
        }
        else
        {
            $('#error_state').text("");
        }
        if(!country)
        {
            $('#error_country').text("*This field is required");
            a=a+1;
        }
        else
        {
            $('#error_country').text("");
        }

        if(phone.length==0)
        {
            $('#error_phoneno').text("*This field is required");
            b=b+1;
        }
        else if(!phone.match(phone_regex))
        {
            $('#error_phoneno').text("Please use numbers only and digits cant be greater than 10");
            b=b+1;
        }
        else

        {
            $('#error_phoneno').text("");
        }
        if(contactemail.length==0)
        {
            $('#error_contactemail').text("*This field is required");
            b=b+1;
        }
        else if(!contactemail.match(email_regex))
        {
            $('#error_contactemail').text("*Please enter a valid email address");
            b=b+1;
        }
        else
        {
            $('#error_contactemail').text("");
        }
        if(!(interest))
        {
            $('#error_interest').text("*This field is required");
            b=b+1;

        }
        else
        {
            $('#error_interest').text("");
        }
if(a==0)
{
    $("#tabs").tabs("option", "active", 2);
}
else{
    $("#tabs").tabs("option", "active", 0);
}



        return false;
    });
});
