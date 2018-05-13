// Good eaample https://codepen.io/Olegukoff/full/ZLdWRv

//HAVE NAME DISPLAYED, NEED TO FIGURE OUT HOW TO ADD TO DISPLAY AND THEN I NEED TO STYLE THER DISPLAY

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
          //addData();
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
        addData(); //(' is currently ' + onOff);
      }
    })

  function addData(){
  let newUl = document.createElement('ul');
  newUl.setAttribute('id', i);
  document.getElementById('streamers').appendChild(newUl);
  let li1 = document.createElement('img');
  li1.setAttribute('src', logo);
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');

  //let liContent1 = document.createTextNode(logo);
  //let liContent2 = document.createTextNode(channelName);
  //let liContent3 = document.createTextNode(onOff);


  //li1.innerText = logo;
  li2.innerText = channelName;
  li3.innerText = onOff;

  document.getElementById(i).appendChild(li1);
  document.getElementById(i).appendChild(li2);
  document.getElementById(i).appendChild(li3);

}

//GOING TO TRY TO WRITE WHOLE FUNCTION THEN CALL AT END

  //addData();
}

});
