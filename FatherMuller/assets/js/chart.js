var pid = 0;
$(document).ready(function () {
  loadPatients();
});

function loadCustomers(status,day) {
  $.ajax({
    type: "POST",
    url: "source/.php",
    data:{
      status:status,
      day:day
    },
    success: function (response) {
      var jsonData = JSON.parse(response);
      if (jsonData.status === "error") {
        swal({
          text: jsonData.message,
          type: "warning",
        }).then(function () {
         
        });
      } else {
        $(".pat_table").DataTable().clear().draw();
        $(".pat_table").DataTable().destroy();
        for ($i = 0; $i < jsonData.data.length; $i++) {
          $(".pat_data").append(
            "<tr><td>" +
              jsonData.data[$i].cid +
              "</td><td >" +
              jsonData.data[$i].biomaxid +
              "</td><td >" +
              jsonData.data[$i].name +
              "</td><td>" +
              jsonData.data[$i].planstart +
              "</td><td>" +
              jsonData.data[$i].planexpiry +
              "</td><td >" +
              jsonData.data[$i].phoneno +
              "</td><td >" +
              jsonData.data[$i].feetype +
              "</td><td>" +
              service +
              "</td><td>" +
              jsonData.data[$i].status +
              "</td><td>" +
              jsonData.data[$i].vaccinated +
              "</td><td><button type='button' id='sendMessage' class='btn btn-primary '>Send</button></td></tr>"
          );
        }
        $(".cus_table").DataTable({
          scrollY: 350
        });
      }
    },
  });
}
