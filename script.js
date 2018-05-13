// Good eaample https://codepen.io/Olegukoff/full/ZLdWRv

//************INSTEAD OF WRITING FUNCTIONI, WILL TRY TO PUT DIRECTLY INTO DOM FROM AJAX SUCCES FUNCTION

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
          logo = json.logo;

          //addData(); *******READ TOP NOTES*******
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
        //addData();   ************READ TOP NOTES*******
      }
    })


//*********READ TOP NOTES***********
function addData(){
let newUl = document.createElement('ul');
newUl.setAttribute('id', 'list' + i);

document.getElementById('streamers').appendChild(newUl);

let li1 = document.createElement('li');
li1.setAttribute('id', 'img' + i);

let img = document.createElement('img');
img.setAttribute('src', logo);
img.setAttribute('alt', "Streamer's Logo");

let li2 = document.createElement('li');
let li3 = document.createElement('li');

li2.innerText = channelName;
li3.innerText = onOff;

document.getElementById('list' + i).appendChild(li1);
document.getElementById('img' + i).appendChild(img);
document.getElementById('list' + i).appendChild(li2);
document.getElementById('list' + i).appendChild(li3);

}


}

});
