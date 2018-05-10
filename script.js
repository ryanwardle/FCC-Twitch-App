// Good eaample https://codepen.io/Olegukoff/full/ZLdWRv

$(document).ready(function(){

  //USER BEING USED FOR TEST PURPOSES, WILL PROBABLY HAVE TO USE FOR LOOP, TO LOOP THROUGH USERS
  //THEN DISPLAY INFORMATION BASED ON JSON DATA
  let user =  userArray[i];
  let userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let url = 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?';
  let url2 = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + user + '?callback=?';
  let channelName, logo, onOff;

  $.getJSON(url, function(json){
    //let jsonString = JSON.stringify(json)
    channelName = JSON.stringify(json.display_name); //sTREAMER DISPLAY NAME
    //console.log(jsonString);
    console.log(channelName);
    logo = json.logo; //image link for logo
  });

//CHECK IF STREAMER IS ONLINE
  $.getJSON(url2, function(json){
    if (json.stream !== null) {
      console.log('online');
      onOff = 'online';
    }else {
      console.log('offline');
      onOff = 'offline';
    }

    //TRYING TO INSERT INTO DOM, MAY NEED TO PUT EVERYTHING INSIDE OF TIS LOOP
    for (let i = 0; i < userArray.length; i++) {
      let newDiv = document.createElement('div');
      let content = document.createTextNode(channelName);
      newDiv.appendChild(content);
      document.body.appendChild(newDiv);
    }

  });

  //NEED TO DISPLAY ALL STREAMS WHEN PAGE LOADS
  //DISPLAY ONLINE ONLY WHEN ONLINE IS CLICKED
  //DISPLAY OFFLINE ONLY WHEN OFFLINE IS CLICKED


});
