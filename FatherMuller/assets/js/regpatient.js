$(document).ready(function() {  
    $("#single").hide();
    $("#family").hide();
    $("#common").hide();
    $("#Add").on("click", function() {  
        $("#textboxDiv").append("<div><h3>New Patient</h3><br><label>Firstname:</label><input class='form-control' type='text'/><br><label>Lastname:</label><input class='form-control' type='text'/><br><label>Gender :</label><br><div class='col-md-6'><div class='form-group'><div class='form-check'><label class='form-check-label'><input type='radio' class='form-check-input' name='optionsRadios' id='optionsRadios1' value=''> Male </label></div><div class='form-check'><label class='form-check-label'><input type='radio' class='form-check-input' name='optionsRadios' id='optionsRadios2' value='option2' > Female</label></div><div class='form-check'><label class='form-check-label'><input type='radio' class='form-check-input' name='optionsRadios2' id='optionsRadios3' value='option3' > Other</label></div></div></div><br><label>Birthday:</label><input class='form-control' type='date' id='birthday' name='birthday'></div>");  
    });  
    $("#Remove").on("click", function() {  
        $("#textboxDiv").children().last().remove();  
    });  
    $("#okay").click(function(){
        displayRadioValue();
      });
});  
// function displayRadioValue() {
//     var ele = document.getElementsByName('gender');
//     var res = "";
      
//     for(i = 0; i < ele.length; i++) {
//         if(ele[i].checked)
//         res = ele[i].value;
//         document.getElementById("result").innerHTML = "Gender: "+res;
//     }
// }
function displayRadioValue() {
	
    var ele = document.getElementsByName('Patient');
    var res = "";
    
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        res = ele[i].value;
    }
    // $.ajax({
    //     type: "POST",
    //     url: "php/registerpatient.php",
    //     data: {
    //       res: res,
    //     },
    //     success: function (response) {
    //       var jsonData = JSON.parse(response);
    //       if (jsonData.status === "passwordError") {
    //         $(".passwordError").html(jsonData.message);
    //       } else if (jsonData.status === "emailError") {
    //         $(".emailError").html(jsonData.message);
    //       } else if (jsonData.status === "success") {
    //         window.location = "index";
    //        }
    //     },
    //   });
    
    if(res==""){
        alert("Select any one of the option");
    }
    else if(res=="Single Patient"){
    $("#single").show();
    $("#family").hide();
    $("#common").show();
    }else{
    $("#single").show();
    $("#family").show();
    $("#common").show();
    }
}