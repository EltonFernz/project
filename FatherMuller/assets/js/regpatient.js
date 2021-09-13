$(document).ready(function () {
    load();
    var res = "";
    $("#single").hide();
    $("#family").hide();
    $("#common").hide();
    $("#Add").on("click", function () {
        $("#textboxDiv").append("<div><h3>New Patient</h3><br><label>Firstname:</label><input class='form-control firstN' type='text'/><br><label>Lastname:</label><input class='form-control lastN' type='text'/><br><label>Gender :</label><br><div class='form-group'><div class=''><form><select class='form-control gendr' id='Gender' name='gender[]'><option value='Male'id='optionsRadios1'>Male</option><option value='Female'id='optionsRadios2'>Female</option><option value='Other'id='optionsRadios3'>Other</option></select></form></div></div><br><label>Birthday:</label><input class='form-control brthdy' type='date' id='birthday' name='birthday'></div><br><div><label>Symptoms :</label><textarea class='form-control Sympt' value='symptoms' required></textarea></div><br>");
    });
    $("#Remove").on("click", function () {
        $("#textboxDiv").children().last().remove();
    });
    $("#okay").click(function () {
        displayRadioValue();
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
    if (pid == "" || fname == "" || lname == "" || gender == "" || birthday == "" || adrs == "" || cty == "" || phne == "" || sympt == "" || appDT == "") {
        swal("Warning!", "Please fill all the fields!", "warning");
    } else {
        $.ajax({
            type: "POST",
            url: "../../assets/php/registerpatient.php",
            data: {
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
    $.ajax({
      type: "POST",
      url: "../../assets/php/patientid.php",
      success: function (result) {
        var jsonData = JSON.parse(result);
        if (jsonData.status === "success") {
          $(".bread-crumbs").html("RegisterPatient");
          $(".pid").val(jsonData.data.pid);
       }else {
          swal("Error!", "" +jsonData.message, "error");
        }
      
      },
      error:function(response){
        alert(response);
      }
    });
  }

function Family() {
    var arr = [];
    $("input.firstN").each(function () {
        arr.push($(this).val());
    });
    $("input.lastN").each(function () {
        arr.push($(this).val());
    });
    $(".gendr option:selected").each(function () {
        arr.push($(this).val());
    });
    $("input.brthdy").each(function () {
        arr.push($(this).val());
    });
    $("textarea.Sympt").each(function () {
        arr.push($(this).val());
    });
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