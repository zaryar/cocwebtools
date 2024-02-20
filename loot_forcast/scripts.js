function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h >= 12){
        h = h != 12 ? h - 12 : h;
        session = "PM";
    }
    
    if(h == 0){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    // Calculate the percentage of the day that has passed
    var percentage = ((date.getHours() + m / 60) / 24) * 100;

    // Adjust the position of the line
    var line = document.getElementById('time-line');
    line.style.left = percentage + '%';

    setTimeout(showTime, 1000);
    
}

showTime(); 