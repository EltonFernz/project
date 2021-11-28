$(document).ready(function(){
    $("#Sdetails").hide();
    $(".subcheck").click(function () {
                $(".pid_data").html("");
                $(".firstName").val(""); 
                $(".gender").val("");
                $(".birthday").val("");
                $(".address").val("");
                $(".city").val("");
                $(".phone").val("");
                $(".symptoms").val("");
        var checkId = $(".checkId").val();
        var a = checkId.substr(0,1);
        if(a=="P"||a=="p"){
            CheckPatient();
            $("#Sdetails").show(); 
        }else{
            CheckFamily();
            $("#Sdetails").show();
        }
       
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
                $(".firstName").val();
                $(".firstName").val(jsonData.data.fname+jsonData.data.lname);
                $(".gender").val(jsonData.data.gender);
                $(".birthday").val(jsonData.data.dob);
                $(".address").val(jsonData.data.address);
                $(".city").val(jsonData.data.city);
                $(".phone").val(jsonData.data.phoneno);
                $(".symptoms").val(jsonData.data.description);
                if (jsonData.status === "passwordError") {
                    alert(jsonData.status);
                    //swal("Warning", "Password Error", "warning");
                    $(".passwordError").html(jsonData.message);
                } else if (jsonData.status === "emailError") {
                    alert(jsonData.status);
                    //swal("Warning!", "Username is Incorrect", "warning");
                    $(".emailError").html(jsonData.message);
                } else if (jsonData.status === "success") {
                    //swal("Success", "Added Successfully", "Success");
                    window.location = "../../index1.html";
                }
            },
        });
    }
    }

  function  CheckFamily(){
var checkId = $(".checkId").val();
    $.ajax({
        type: "POST",
        url: "../../assets/php/checkFpatient.php",
        data: {
            checkId : checkId,

        },
        success: function (response) {
            var jsonData = JSON.parse(response);
            for (let i = 0; i < jsonData.data.length; i++) {
                $(".pid_data").append(
                    "<option value='" +jsonData.data[i].pid + checkId+"'>"+jsonData.data[i].fname+jsonData.data[0].lname+"</option>"
                  );
                  
                //   if(jsonData.data[i].pid=="option:selected"){
                //     $(".firstName").val(jsonData.data[i].fname+jsonData.data[i].lname);
                //   }
                
                  
            }
           
             // clear fiellds all of them 
            $(".firstName").val(jsonData.data[0].fname+jsonData.data[0].lname); 
            $(".gender").val(jsonData.data[0].gender);
            $(".birthday").val(jsonData.data[0].dob);
            $(".address").val(jsonData.data[0].address);
            $(".city").val(jsonData.data[0].city);
            $(".phone").val(jsonData.data[0].phoneno);
            $(".symptoms").val(jsonData.data[0].description);
            
            $(".pid_data").change (function () {  
                $(".firstName").val(""); 
                $(".gender").val("");
                $(".birthday").val("");
                $(".address").val("");
                $(".city").val("");
                $(".phone").val("");
                $(".symptoms").val("");
               
                var Cval = $(this).val();
                var a = Cval.substr(2);
                var b = Cval.substr(0,2)
                $.ajax({
                    type: "POST",
                    url: "../../assets/php/checkpid.php",
                    data: {
                        a : a,
                        b:b,
        
                    },
                    success: function (response) {
                        var jsonData = JSON.parse(response);
                        $(".firstName").val(jsonData.data[0].fname+jsonData.data[0].lname); 
            $(".gender").val(jsonData.data[0].gender);
            $(".birthday").val(jsonData.data[0].dob);
            $(".address").val(jsonData.data[0].address);
            $(".city").val(jsonData.data[0].city);
            $(".phone").val(jsonData.data[0].phoneno);
            $(".symptoms").val(jsonData.data[0].description);
                    },
                });
            });   

            //PID
            // $(".firstName").val(jsonData.data.fname+jsonData.data.lname);
            // $(".gender").val(jsonData.data.gender);
            // $(".birthday").val(jsonData.data.dob);
            // $(".address").val(jsonData.data.address);
            // $(".city").val(jsonData.data.city);
            // $(".phone").val(jsonData.data.phoneno);
            // $(".symptoms").val(jsonData.data.description);
            if (jsonData.status === "passwordError") {
                alert(jsonData.status);
                swal("Warning", "Password Error", "warning");
                $(".passwordError").html(jsonData.message);
            } else if (jsonData.status === "emailError") {
                alert(jsonData.status);
                swal("Warning!", "Username is Incorrect", "warning");
                $(".emailError").html(jsonData.message);
            } else if (jsonData.status === "success") {
                // swal("Success", "Added Successfully", "Success");
                // window.location = "../../index1.html";
            }
        },
    });

    }




