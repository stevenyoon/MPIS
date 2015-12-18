    var map;
    var activeItem = "none";
  function initMap() {

    var eth = {lat: 47.375737, lng: 8.547935};

    map = new google.maps.Map(document.getElementById('map'), {
      center: eth,
      zoom:17,
      disableDefaultUI: true
    });

    //Friends on the map
    map.addListener('click', function() {
      $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
      $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";

    });

    var erikLoc = {lat: 47.375737, lng: 8.547935};
    var stevenLoc = {lat: 47.376605, lng: 8.547506};
    var andreaLoc = {lat: 47.376178, lng: 8.546701};
    var iremLoc = {lat: 47.376756, lng: 8.548470};
    var abhaLoc = {lat: 47.376860, lng: 8.546400};

    var names = ["erik", "steven", "irem", "andrea", "abha"];
    var locations = [erikLoc, stevenLoc, iremLoc, andreaLoc, abhaLoc];

    var erikIcon = {
        url: 'images/erik kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var erikMarker = new google.maps.Marker({
        position: erikLoc,
        map: map,
        title: name,
        icon: erikIcon
    });
    erikMarker.addListener('click', function(){
      if(activeItem != "erik"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "erik";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/erik.jpg)'});
        $('#friendName').text("Erik");
      });
    var stevenIcon = {
        url: 'images/steven kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var stevenMarker = new google.maps.Marker({
        position: stevenLoc,
        map: map,
        title: name,
        icon: stevenIcon
    });
   stevenMarker.addListener('click', function(){
      if(activeItem != "steven"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "steven";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/steven.jpg)'});
        $('#friendName').text("Steven");
      });
    var iremIcon = {
        url: 'images/irem kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var iremMarker = new google.maps.Marker({
        position: iremLoc,
        map: map,
        title: name,
        icon: iremIcon
    });
    iremMarker.addListener('click', function(){
      if(activeItem != "irem"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "irem";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/irem.jpg)'});
        $('#friendName').text("Irem");
      });
    var andreaIcon = {
        url: 'images/andrea kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var andreaMarker = new google.maps.Marker({
        position: andreaLoc,
        map: map,
        title: name,
        icon: andreaIcon
    });
    andreaMarker.addListener('click', function(){
      if(activeItem != "andrea"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "andrea";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/andrea.jpg)'});
        $('#friendName').text("Andrea");
      });
    var abhaIcon = {
        url: 'images/abha kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var abhaMarker = new google.maps.Marker({
        position: abhaLoc,
        map: map,
        title: name,
        icon: abhaIcon
    });
    abhaMarker.addListener('click', function(){
      if(activeItem != "abha"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "abha";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/abha.jpg)'});
        $('#friendName').text("Abha");
    });

    //Events on the map
    var chocolateLoc = {lat: 47.37599, lng: 8.547935};

    var events = ["chocolate"];
    var eventlocations = [chocolateLoc];

    var chocolateIcon = {
        url: 'images/chocolate.jpg',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var chocolateMarker = new google.maps.Marker({
        position: chocolateLoc,
        map: map,
        title: name
    });
    chocolateMarker.addListener('click', function(){
      if(activeItem != "event"){
        $('#eventWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "event";
      }else{
        $('#eventWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeItem = "none";
      }
        $('#eventImg').css({'background-image': 'url(images/chocolate.jpg)'});
        $('#eventName').text("Free Chocolate!");
        $('#eventDescription').text("Location: HG F.21");
      });

  }


  $(document).ready(function(){
    //controls the menus on the left side
    var activeMenu = "none";
    $('#menuButton').click(function(){
      if(activeMenu != "friends"){
        $('#friendList').css({
          '-webkit-transform': 'translateY(0px)', 'transform': 'translateX(0px)'
        });
        $('#eventList').css({
          '-webkit-transform': 'translateY(-400px)', 'transform': 'translateX(-500px)'
        });
        activeMenu = "friends";
      }else{
        $('#friendList').css({
          '-webkit-transform': 'translateY(-400px)', 'transform': 'translateX(-500px)'
        });
        activeMenu = "none";
      }
    });

    $('#eventListButton').click(function(){
      if(activeMenu != "events"){
        $('#eventList').css({
          '-webkit-transform': 'translateY(0px)', 'transform': 'translateX(0px)'
        });
        $('#friendList').css({
          '-webkit-transform': 'translateY(-400px)', 'transform': 'translateX(-500px)'
        });
        activeMenu = "events";
      }else{
        $('#eventList').css({
          '-webkit-transform': 'translateY(-400px)', 'transform': 'translateX(-500px)'
        });
        activeMenu = "none";
      }
    });


  });