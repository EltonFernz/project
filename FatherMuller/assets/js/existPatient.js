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
                $(".firstName").val(jsonData.name[0]+jsonData.lname[0]);
                $(".gender").val(jsonData.gender[0]);
                $(".birthday").val(jsonData.dob[0]);
                $(".address").val(jsonData.address[0]);
                $(".city").val(jsonData.city[0]);
                $(".phone").val(jsonData.phone[0]);
                $(".symptoms").val(jsonData.symptoms[0]);
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



