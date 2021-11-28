var pid = 0;
$(document).ready(function () {
  loadPatients();
 
});

function loadPatients() {
  
  
  $.ajax({
    type: "POST",
    url: "../../assets/php/chart1.php",
    
    success: function (response) {
      var jsonData = JSON.parse(response);
      if (jsonData.status === "error") {
        swal({
          text: jsonData.message,
          type: "warning",
        }).then(function () {
         
        });
      } else {
        //$(".pat_table").DataTable().clear().draw();
        //$(".pat_table").DataTable().destroy();
        
        for ($i = 0; $i < jsonData.data.length; $i++) {
          $("tbody").append(
              "<tr><td>" +jsonData.data[$i].pid +
              "</td><td>" +jsonData.data[$i].fname +
              "</td><td >" + jsonData.data[$i].lname +
              "</td><td >" +jsonData.data[$i].gender +
              "</td><td>" +jsonData.data[$i].dob +
              "</td><td>" +jsonData.data[$i].address +
              "</td><td >" +jsonData.data[$i].city +
              "</td><td >" +jsonData.data[$i].phoneno +
              "</td><td>" +jsonData.data[$i].description +
              "</td><td>" +jsonData.data[$i].appointment +
              "</td></tr>"
          );
        }
        $(".pat_table").DataTable();
      }
    },
  });
}
