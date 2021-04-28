$(document).ready(function () {
  $("#login").click(function (e) {
    alert("hello");
    e.preventDefault();
    validateuserLogin();
  });

  // $(".reset_email").change(function () {
  //   if (!valEmail()) {
  //     $(".email-reset").text("Invalid Email");
  //   } else {
  //     $(".email-reset").text("");
  //   }
  // });

  // $(".in_reset").click(function () {
  //   passReset();
  // });

  // $(".n_pass").change(function () {
  //   if (!valPass()) {
  //     $(".pwmsg").text("This field must have atleast 8 characters");
  //   } else {
  //     $(".pwmsg").text("");
  //   }
  // });

  // $(".c_pass").change(function () {
  //   if (!valCPass()) {
  //     $(".cpwmsg").text("Confirm Password does not match Password");
  //   } else {
  //     $(".cpwmsg").text("");
  //   }
  // });

  // $(".reset_pass").click(function (e) {
  //   e.preventDefault();
  //   reset_pass();
  // });

});

function validateuserLogin() {
  var userid = $("#userid").val();
  var pass = $("#password").val();
  if (userid === "" || pass === "") {
    swal("Warning!", "Please fill all the fields!", "warning");
  } else {
    $.ajax({
      type: "POST",
      url: "../../assets/php/login.php",
      data: {
        userid: userid,
        pass: pass,
      },
      success: function (response) {
        var jsonData = JSON.parse(response);
        if (jsonData.status === "passwordError") {
          alert("hh");
          $(".passwordError").html(jsonData.message);
        } else if (jsonData.status === "emailError") {
          alert("hhj");
          
          $(".emailError").html(jsonData.message);
        } else if (jsonData.status === "success") {
          window.location = "../../index1.html";
         }
      },
    });
  }
}

//   function passReset() {
//     var resetemail = $(".reset_email").val();
//     if (resetemail === "") {
//       $(".email-reset").html("Please fill the fields!");
//       $(".reset_email").click(function () {
//         $(".email-reset").html("");
//       });
//     } else {
//       $.ajax({
//         type: "POST",
//         url: "user/source/reset-password.php",
//         data: {
//           resetemail: resetemail,
//         },
//         success: function (response) {
//           var jsonData = JSON.parse(response);
//           if (jsonData.status === "error") {
//             $(".email-reset").html(jsonData.message);
//           } else if (jsonData.status === "success") {
//             $(".close").click();
//             swal({
//               text: jsonData.message,
//               type: "success",
//             }).then(function () {
//               window.location = "user/login";
//             });
//           }
//         },
//       });
//     }
//   }

//   function reset_pass() {
//     var password = $(".n_pass").val();
//     var cpassword = $(".c_pass").val();
//     var url_string = window.location;
//     var url = new URL(url_string);
//     var id = url.searchParams.get("id");
//     if (password === "" || cpassword === "") {
//       $(".errcpass").html("Please fill all the fields!");
//       $(".n_pass").click(function () {
//         $(".errcpass").html("");
//       });
//     } else if (password != cpassword) {
//       $(".errcpass").html("Password doesnt Match!");
//       $(".n_pass").click(function () {
//         $(".errcpass").html("");
//       });
//     } else if (password.length < 8) {
//       $(".errcpass").html("Password should be more than 8 characters");
//       $(".n_pass").click(function () {
//         $(".errcpass").html("");
//       });
//     } else {
//       $.ajax({
//         type: "POST",
//         url: "user/source/reset-password.php",
//         data: {
//           id: id,
//           password: password,
//           cpassword: cpassword,
//         },
//         success: function (response) {
//           var jsonData = JSON.parse(response);
//           if (jsonData.status === "error") {
//             swal("Oops!", jsonData.message, "error");
//           } else if (jsonData.status === "success") {
//             swal("Success!", jsonData.message, "success");
//             window.location = "user/login";
//           }
//         },
//       });
//     }
//   }

function valEmail() {
  var noletter = /[^A-Z]/ig;
  var nospecialchar = /[!@#$%^&*(),.?":{}|<>]/;
  var userid = $("#userid").val();
  if (userid.match(noletter)||userid.match(nospecialchar)) {
    return false;
  } else {
    return true;
  }
}

function valPass() {
  var pass = $(".n_pass").val();
  if (pass.length < 8) {
    return false;
  } else {
    return true;
  }
}

function valCPass() {
  var cpass = $(".c_pass").val();
  var pass = $(".n_pass").val();
  if (pass == cpass) {
    return true;
  } else {
    return false;
  }
}