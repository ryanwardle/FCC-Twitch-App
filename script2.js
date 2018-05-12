$(document).ready(function(){


  let userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    for (let i = 0; i < 1; i++) {   //userArray.length
      let channelName, logo, onOff;
      let user =  userArray[i];
      let url = 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?';
      let url2 = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + user + '?callback=?';

      //SEEMS LIKE DATA IS NOT COMING BACK IN ORDER AND IS GIVING PROBLEMS TO DISPLAY
      $.getJSON(url, function(json){
        //let jsonString = JSON.stringify(json)
          //console.log(jsonString);
        channelName = JSON.stringify(json.display_name);
        console.log(channelName);
        channelName = channelName.replace(/"/, '');
        channelName = channelName.replace(/"/, '');
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
      //MAY NEED TO ADD CLASSES ETC.. TO HELP STYLE DIV
      let newDiv = document.createElement('div');
      let content = document.createTextNode(channelName + ' is currently ' + onOff); //will change diplay just using to test
      newDiv.appendChild(content);
      document.body.appendChild(newDiv);
  });
}
  //NEED TO DISPLAY ALL STREAMS WHEN PAGE LOADS
  //DISPLAY ONLINE ONLY WHEN ONLINE IS CLICKED
  //DISPLAY OFFLINE ONLY WHEN OFFLINE IS CLICKED

});
