//logic for user interface

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Doctor } from './doctor.js';

$(document).ready(function() {
  $('#bykeyWord').click(function() {
    let input = $('#userInput').val();
    $("userInput").val("");


    let newDoctor = new Doctor();
    let promise = newDoctor.findDoctorByKey(input);

    promise.then(function(response) {
      let doctor = JSON.parse(response);
      
      for (let i = 0; i < doctor.data.length; i++) {
        $("#output").append("<div>" +
      '<h2>' + doctor.data[i].profile.first_name + " " + doctor.data[i].profile.last_name + '</h2>'
    );
  }
}, function (error) {
  $("#error").text(`there was an Error:${error.message}`);
      $("#error").text(`there was an Error:${error.message}`);
});
});
});
