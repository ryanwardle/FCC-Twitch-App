// Good eaample https://codepen.io/Olegukoff/full/ZLdWRv

$(document).ready(function(){

  let userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    for (let i = 0; i < userArray.length; i++) {
      let channelName, logo, onOff;
      let user =  userArray[i];
      let url = 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?';
      let url2 = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + user + '?callback=?';

      //GET DISPLAY NAME FOR CHANNEL
      $.ajax({
        type: 'GET',
        url: 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?',
        dataType: 'json',
        success: function(json){
          channelName = JSON.stringify(json.display_name);
          channelName = channelName.replace(/"/, '');
          channelName = channelName.replace(/"/, '');
          console.log(channelName);
          logo = json.logo;
          addData();
        }
      })



    //CHECK IF STREAMER IS ONLINE

    $.ajax({
      type: 'GET',
      url: 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + user + '?callback=?',
      dataType: 'json',
      success: function(json){
        if (json.stream !== null) {
          onOff = 'online';
        }else {
          onOff = 'offline';
        }
        //addData(' is currently ' + onOff);
      }
    })




  function addData(newData){
  let newDiv = document.createElement('div');
  let content = document.createTextNode(channelName)// + newData) //+ ' is currently ' + onOff); //will change diplay just using to test
  newDiv.appendChild(content);
  document.body.appendChild(newDiv);
}

}

});
