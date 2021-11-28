var Pc = 1;
var res;
$(document).ready(function () {

    
    $("#single").hide();
    $("#family").hide();
    $("#common").hide();
    $("#Add").on("click", function () {
        Pc=Pc+1;
        var pa_id="P"+Pc;
       
        $("#textboxDiv").append("<div><h3>New Patient</h3><br><label>Patient ID:</label><input class='form-control Pid"+Pc+"' type='text'/><br><label>Firstname:</label><input class='form-control firstN' type='text'/><br><label>Lastname:</label><input class='form-control lastN' type='text'/><br><label>Gender :</label><br><div class='form-group'><div class=''><form><select class='form-control gendr' id='Gender' name='gender[]'><option value='Male'id='optionsRadios1'>Male</option><option value='Female'id='optionsRadios2'>Female</option><option value='Other'id='optionsRadios3'>Other</option></select></form></div></div><br><label>Birthday:</label><input class='form-control brthdy' type='date' id='birthday' name='birthday'></div><br><div><label>Symptoms :</label><textarea class='form-control Sympt' value='symptoms' required></textarea></div><br>");
        $(".Pid"+Pc).val(pa_id);
    });
    $("#Remove").on("click", function () {
        $("#textboxDiv").children().remove();
    });
    $("#okay").click(function () {
        displayRadioValue();
        load();
    });
    $("#submit").click(function () {
        SinglePatient();
        
    });
    $("#submit2").click(function () {
        Family();
    });
});
function SinglePatient() {
    var pid = $("#pid").val();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var gender = $('#Gender option:selected').text();
    var birthday = $("#birthday").val();
    var adrs = $("#adrs").val();
    var cty = $("#cty").val();
    var phne = $("#phne").val();
    var sympt = $("#sympt").val();
    var appDT = $("#meeting-time").val();
    var check = 1;
    if (pid == "" || fname == "" || lname == "" || gender == "" || birthday == "" || adrs == "" || cty == "" || phne == "" || sympt == "" || appDT == "") {
        swal("Warning!", "Please fill all the fields!", "warning");
    } else {
        $.ajax({
            type: "POST",
            url: "../../assets/php/registerpatient.php",
            data: {
                check : check,
                pid: pid,
                fname: fname,
                lname: lname,
                gender: gender,
                birthday: birthday,
                adrs: adrs,
                cty: cty,
                phne: phne,
                sympt: sympt,
                appDT: appDT,

            },
            success: function (response) {
                var jsonData = JSON.parse(response);
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

function load() {
    if(res=="Single Patient"){
        $.ajax({
            type: "POST",
            url: "../../assets/php/patientid.php",
            success: function (result) {
              var jsonData = JSON.parse(result);
              if (jsonData.status === "success") {
               
                  var key="P";
                  var pat_id=jsonData.data.pid;
                  var p_id=key.concat(pat_id);
                  $(".pid").val(p_id);
             }else {
                swal("Error!", "" +jsonData.message, "error");
              }
            },
            error:function(response){
              alert(response);
            }
          });
    }else{
        $(".Pid").val("P1");
        $.ajax({
            type: "POST",
            url: "../../assets/php/famid.php",
            
            success: function (result) {
              var jsonData = JSON.parse(result);
              if (jsonData.status === "success") {
                var key="F";
                var fam_id=jsonData.data.fid;
                var f_id=key.concat(fam_id);
                $(".fid").val(f_id);

             }else {
                swal("Error!", "" +jsonData.message, "error");
              }
            
            },
            error:function(response){
              alert(response);
            }
          });
        
    }
    
  }

function Family() {
    var arrpid=[];
    var arr = [];
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    for(var i=1;i<=Pc;i++){
        if(i==1){
            $(".Pid").each(function () {
                arrpid.push($(this).val());
            });
        }else{
            $(".Pid"+i).each(function () {
                arrpid.push($(this).val());
            });
        }
       
       
    }
    $(".firstN").each(function () {
        arr.push($(this).val());
    });
    $(".lastN").each(function () {
        arr1.push($(this).val());
    });
    $(".gendr option:selected").each(function () {
        arr2.push($(this).val());
    });
    $(".brthdy").each(function () {
        arr3.push($(this).val());
    });
    $(".Sympt").each(function () {
        arr4.push($(this).val());
    });
    var adrs = $("#adrs").val();
    var cty = $("#cty").val();
    var phne = $("#phne").val();
    var appDT = $("#meeting-time").val();
    var fid= $(".fid").val();
    var check=2;
    if ( arr == "" || arr1 == "" || arr2 == "" ||arr3 == "" || arr4 == "" || adrs == "" || cty == "" || phne == "" || appDT == "") {
        swal("Warning!", "Please fill all the fields!", "warning");
    } else {
        $.ajax({
            type: "POST",
            url: "../../assets/php/registerpatient.php",
            data: {
                arrpid:arrpid,
                check:check,
                fid: fid,
                arr : arr,
                arr1 : arr1,
                arr2 : arr2,
                arr3 : arr3,
                arr4 : arr4,
                adrs: adrs,
                cty: cty,
                phne: phne,
                appDT: appDT

            },
            success: function (response) {
                var jsonData = JSON.parse(response);
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


    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
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

    if (res == "") {
        alert("Select any one of the option");
    }
    else if (res == "Single Patient") {
        $("#single").show();
        $("#sngl").show();
        $("#fmly").hide();
        $("#family").hide();
        $("#common").show();
        $("#submit").show();
        $("#submit2").hide();
        $("#F_pid").hide();
    } else {
        $("#single").show();
        $("#sngl").hide();
        $("#fmly").show();
        $("#family").show();
        $("#common").show();
        $("#submit").hide();
        $("#submit2").show();
    }
}