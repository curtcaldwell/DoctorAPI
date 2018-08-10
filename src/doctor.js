export class Doctor{
  findDoctorByName(name){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5428626%2C-122.7948136%2C50&user_location=45.5428626%2C-122.7948136&skip=0&limit=10&user_key=424bf63c4070ccf051baf8a3a1e73559`;
      request.onload = function(){
        if(this.status == 200 ) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
