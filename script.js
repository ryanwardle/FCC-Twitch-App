// Good eaample https://codepen.io/Olegukoff/full/ZLdWRv

$(document).ready(function(){

  //USER BEING USED FOR TEST PURPOSES, WILL PROBABLY HAVE TO USE FOR LOOP, TO LOOP THROUGH USERS
  //THEN DISPLAY INFORMATION BASED ON JSON DATA
  let user =  'freecodecamp';
  let userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let url = 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?';

  $.getJSON(url, function(json){
    let jsonString = JSON.stringify(json)
    let channelName = JSON.stringify(json.display_name);
    console.log(jsonString);
    console.log(channelName);

      let logo = json.logo; //image link for logo
  });


});
