/*global google*/

function event_info(str)
{
    var temp = document.getElementById("ct"+str).innerHTML
    document.getElementById("event_name").innerHTML = "<b>Name:</b> " + temp;
    
    temp = document.getElementsByClassName("cd"+str);
    document.getElementById("event_date").innerHTML = "<b>Date:</b> " + temp[0].innerHTML;
    
    temp = document.getElementById("time"+str).innerHTML;
    document.getElementById("event_time").innerHTML = "<b>Time:</b> " + temp;
    
    temp = document.getElementById("cl"+str).innerHTML;
    document.getElementById("event_location").innerHTML = "<b>Location:</b> " + temp;
    
    if (str == '1') {
        document.getElementById("event_description").innerHTML = "<b>Description:</b> Join Dr. Anna Jones in an interactive mental health workshop. Ice cream will be served.";
        document.getElementById("event_sponsor").innerHTML = "<b>Sponsor:</b> CAPS";
    } else if (str == '2') {
        document.getElementById("event_description").innerHTML = "<b>Description:</b> Join Professor Agrawal from Oxford University as he discusses the relationship of science and our changing world";
        document.getElementById("event_sponsor").innerHTML = "<b>Sponsor:</b> Department of Science and Human Culture";
    } else if (str == '3') {
        document.getElementById("event_description").innerHTML = "<b>Description:</b> Students and coaches discuss their experiences of black student-athletes at Northwestern and other schools.";
        document.getElementById("event_sponsor").innerHTML = "<b>Sponsor:</b> Multicultural Student Affairs";
    } else if (str == '4') {
        document.getElementById("event_description").innerHTML = "<b>Description:</b> Students, faculty, and staff are invited to join Students for Justice in Palestine for a candlelight vigil.";
        document.getElementById("event_sponsor").innerHTML = "<b>Sponsor:</b> Students for Justice in Palestine";
    } else if (str == '5') {
        document.getElementById("event_description").innerHTML = "<b>Description:</b> What are your thoughts on LGBTQ+ representation in media?  We'll cover the good, the bad, and the totally nonexistent.  Join us for an open discussion over snacks! "
        document.getElementById("event_sponsor").innerHTML = "<b>Sponsor:</b> Rainbow Alliance"
    } else {
        document.getElementById("event_description").innerHTML = "<b>Description:</b>";
        document.getElementById("event_sponsor").innerHTML = "<b>Sponsor:</b>";
    }
    
}

function initMap() {
    var posCenter = {lat: 42.053, lng: -87.67435};
    var pos1 = {lat: 42.0523, lng: -87.6787};
    var pos2 = {lat: 42.0512, lng: -87.6764};
    var pos3 = {lat: 42.0514, lng: -87.6762};
    var pos4 = {lat: 42.0516, lng: -87.6758};
    var pos5 = {lat: 42.0513, lng: -87.6742};
    
    var posArr = [pos1, pos2, pos3, pos4, pos5];
    var cluster = [];
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: posCenter
    });
    
    var contStr1 = "<div class='date-header cd1 cd5'>Thursday, February 25</div>\
                   <div class='box-event' onclick='event_info(&quot;1&quot;)'>\
                   <span class='box-event-time' id='time1'>5:00</span>\
                   <span class='box-event-name' id='ct1'>Mental Health Workshop</span>\
                   <span class='box-event-loc' id='cl1'>Searle 3-220</span></div>";
    
    var contStr2 = "<div class='date-header cd2'>Friday, February 26</div>\
                    <div class='box-event' onclick='event_info(&quot;2&quot;)'>\
                    <span class='box-event-time' id='time2'>4:00</span>\
                    <span class='box-event-name' id='ct2'>Guest Lecture: Science and Society</span>\
                    <span class='box-event-loc' id='cl2'>Harris 107</span></div>";
                    
    var contStr3 = "<div class='date-header cd3'>Saturday, February 27</div>\
                    <div class='box-event' onclick='event_info(&quot;3&quot;)'>\
                    <span class='box-event-time' id='time3'>7:00</span>\
                    <span class='box-event-name' id='ct3'>Panel on the Black Student-Athlete Experience</span>\
                    <span class='box-event-loc' id='cl3'>Harris L07</span></div>";
    
    var contStr4 = "<div class='date-header cd4'>Sunday, February 28</div>\
                    <div class='box-event' onclick='event_info(&quot;4&quot;)'>\
                    <span class='box-event-time' id='time4'>8:00</span>\
                    <span class='box-event-name' id='ct4'>Candlelight Vigil</span>\
                    <span class='box-event-loc' id='cl4'>The Rock</span></div>";
    
    var contStr5 = "<div class='date-header cd1 cd5'>Thursday, February 25</div>\
                    <div class='box-event' onclick='event_info(&quot;5&quot;)'>\
                    <span class='box-event-time' id='time5'>6:00</span>\
                    <span class='box-event-name' id='ct5'>Rainbow: General Meeting</span>\
                    <span class='box-event-loc' id='cl5'>Locy 314</span></div>";
                    

    var pinArr = [];
    var contStrArr = [contStr1, contStr2, contStr3, contStr4, contStr5];
    var infowindow = new google.maps.InfoWindow();
    
    for (var i = 0; i < 5; i++) {
        var pin = new google.maps.Marker({
            map: map,
            position: posArr[i],
            title: 'Event ' + i
          });
         
            
        google.maps.event.addListener(pin, 'click', (function(pin, i) {
            return function() {
                event_info(i+1);
            }
            })(pin, i));
        
        google.maps.event.addListener(pin, 'mouseover', (function(pin, i) {
            return function() {
                var html = contStrArr[i];
                infowindow.setContent(html);
                infowindow.open(map, pin, html);
                // infowindow.setContent(html);
                // infowindow.open(map, marker);
                }
            })(pin, i));
            
         //google.maps.event.addListener(pin, 'mouseout', (function(pin, i) {
         //   return function() {
         //       infowindow.close();
         //       }
         //   })(pin, i));
    }
    
    cluster.push(pin);
}