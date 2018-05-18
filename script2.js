$(document).ready(function(){

  showAllStreamers();


function showAllStreamers(){

  let userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    for (let i = 0; i < userArray.length; i++) {

      let channelName, logo, onOff, info;
      let user =  userArray[i];
      let url = 'https://wind-bow.gomix.me/twitch-api' + '/channels/' + user + '?callback=?';
      let url2 = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + user + '?callback=?';

      //GET DISPLAY NAME AND LOGO FOR CHANNEL
      $.getJSON(url).then(function(json){
        channelName = JSON.stringify(json.display_name);
        channelName = channelName.replace(/"/, '');
        channelName = channelName.replace(/"/, '');
        logo = json.logo;

        //DISPLAY DATA BY MAKING AND INSERTING LIST INTO DOM
        let newUl = document.createElement('ul');
        newUl.setAttribute('id', 'list' + i);
        document.getElementById('streamers').appendChild(newUl);

        let li1 = document.createElement('li');
        li1.setAttribute('id', 'img' + i);

        let img = document.createElement('img');
        img.setAttribute('src', logo);
        img.setAttribute('alt', "Streamer's Logo");

        let li2 = document.createElement('li');

        li2.innerText = channelName;

        document.getElementById('list' + i).appendChild(li1);
        document.getElementById('img' + i).appendChild(img);
        document.getElementById('list' + i).appendChild(li2);

      //GET AND DISPLAY ONLINE OR OFFLINE STATUS
        return $.getJSON(url2)
      }).then(function(json){
        //CREATING <A> AND PLACING INTO DOM
        let a = document.createElement('a');
        a.setAttribute('href', 'https://www.twitch.tv/' + user);
        a.setAttribute('target', '_blank');
        a.setAttribute('class', 'channel-link')
        a.setAttribute('id', 'status' + i);
        document.getElementById('list' + i).appendChild(a);

        //ARRAY USED IN FOR EACH LOOP FOR ONLINE/OFFLINE CLICK BUTTONS
        let onOffArray = [];

        //DISPLAYING ONLINE OFFLINE STATUS
        if (json.stream !== null) {
          info = json.stream.game;

          onOff = 'online ' + info;
          onOffArray.push(onOff);
          document.getElementById('status' + i).classList.add('online');
        }else {
          onOff = 'offline';
          onOffArray.push(onOff);
          document.getElementById('status' + i).classList.add('offline');
        }

        //SETTING TEXT OF <A> IN DOM;
        a.innerText = onOff;

        //******CLICK TO SEE WHO IS ONLINE OR OFFLINE
            $('#online').click(function(){
              onOffArray.forEach(function(val){
                if (val === 'offline') {
                  document.getElementById('list' + i).style.display = 'none';
                }else if (val !== 'offline') {
                  document.getElementById('list' + i).style.display = 'flex';
                }
              })
            });

            $('#offline').click(function(){
              onOffArray.forEach(function(val){
                if (val !== 'offline') {
                  document.getElementById('list' + i).style.display = 'none';
                }else if (val === 'offline') {
                  document.getElementById('list' + i).style.display = 'flex';
                }
              })
            });

});

}

}

//HAVE FULFILLED USER STORIES BUT CAN MAKE BETTER
//2. SEARCH BAR TO SEARCH FOR STREAMER
//****WOULD BE ABOVE EXTRA****
//3. ABILITY TO ADD USER TO LIST
//4. ABILITY TO REMOVE USER


//FUNCTION CLEARS ALL STREAMERS
function clearStreamers(){
  let streamers = document.getElementById('streamers');
  while (streamers.firstChild) {
  streamers.removeChild(streamers.firstChild);
  }
}

//CLICK TO DISPLAY ALL STREAMERS
$('#all').click(function(){
  clearStreamers();
  showAllStreamers();
});


});
