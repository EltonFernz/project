$(document).ready(function(){
    $(".subcheck").click(function () {
        CheckPatient();
    });
})
//entering the id to retrive the patient details
function CheckPatient(){
    var checkId = $(".checkId").val();
    if(checkId==""){
        swal("Warning!", "Please fill all the fields!", "warning");
    }else{
        $.ajax({
            type: "POST",
            url: "../../assets/php/checkpatient.php",
            data: {
                checkId : checkId,

            },
            success: function (response) {
                var jsonData = JSON.parse(response);
                $(".firstName").val(jsonData.data.fname+jsonData.data.lname);
                $(".gender").val(jsonData.data.gender);
                $(".birthday").val(jsonData.data.dob);
                $(".address").val(jsonData.data.address);
                $(".city").val(jsonData.data.city);
                $(".phone").val(jsonData.data.phoneno);
                $(".symptoms").val(jsonData.data.description);
                if (jsonData.status === "passwordError") {
                    alert(jsonData.status);
                    swal("Warning", "Password Error", "warning");
                    $(".passwordError").html(jsonData.message);
                } else if (jsonData.status === "emailError") {
                    alert(jsonData.status);
                    swal("Warning!", "Username is Incorrect", "warning");
                    $(".emailError").html(jsonData.message);
                } else if (jsonData.status === "success") {
                    swal("Success", "Added Successfully", "Success");
                    window.location = "../../index1.html";
                }
            },
        });
    }
    }



