var titles = document.getElementsByClassName("cal_title");
var titlesCount = titles.length;
for (var i = 0; i < titlesCount; i += 1) {
    titles[i].onclick = function(e) {
        document.getElementById("event_space").innerHTML = "hi";
    };
}

function newEvent()
{
    document.getElementById("event_space").style.height = "100%";
    document.getElementById("filter-form").style.height = "0%";
    var evt = document.getElementById("event_space");
    var btn = document.createElement("button");
    btn.setAttribute('id', 'temp_btn');
    btn.addEventListener("click", oldEvent);
    var txt = document.createTextNode("Click me");
    btn.appendChild(txt);
    evt.appendChild(btn);
}
function new_clicked()
{
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("creation_sidebar").style.display = "initial";
}


function submit_clicked()
{
    alert("Your event has been submitted for review!");
    document.getElementById("sidebar").style.display = "initial";
    document.getElementById("creation_sidebar").style.display = "none";
}

function oldEvent()
{
    document.getElementById("event_space").style.height = "45%";
    document.getElementById("filter-form").style.height = "55%";
    var a = document.getElementById("temp_btn");
    a.parentNode.removeChild(a);
}

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

function sync_alert()
{
    alert("Success! The event has been successfully added to your calendar.")
}