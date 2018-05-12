// Good eaample https://codepen.io/Olegukoff/full/ZLdWRv

$(document).ready(function(){

  //****************CURRENTLY NEED TO FIGURE OUT HOW TO INSERT DATA INTO DOM, NOT WORKING OR NEED TO FIGURE OUT
  // **** HOW TO ACCURATELY DISPLAY SOME OF THE DATA AND THEN BUILD FROM THERE

  let userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    for (let i = 0; i < userArray.length; i++) {   //userArray.length
      let channelName, logo, onOff;
      let user =  userArray[i];
      let url = 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?';
      let url2 = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + user + '?callback=?';

      //SEEMS LIKE DATA IS NOT COMING BACK IN ORDER AND IS GIVING PROBLEMS TO DISPLAY
      $.getJSON(url, function(json){
        //let jsonString = JSON.stringify(json)
          //console.log(jsonString);
        channelName = JSON.stringify(json.display_name);
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
        let newDiv = document.createElement('div');
        let content = document.createTextNode(channelName + ' is currently ' + onOff); //will change diplay just using to test
        newDiv.appendChild(content);
        document.body.appendChild(newDiv);
  });

  //MAY NEED TO ADD CLASSES ETC.. TO HELP STYLE DIV
}
  //NEED TO DISPLAY ALL STREAMS WHEN PAGE LOADS
  //DISPLAY ONLINE ONLY WHEN ONLINE IS CLICKED
  //DISPLAY OFFLINE ONLY WHEN OFFLINE IS CLICKED

});
