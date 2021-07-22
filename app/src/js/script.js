//OCEANUS
function makeTimerOceanus() {
    var endTime = new Date("05 August 2021 19:00:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days-oceanus").html(days + "<span>Days</span>");
        $("#hours-oceanus").html(hours + "<span>Hours</span>");
        $("#minutes-oceanus").html(minutes + "<span>Minutes</span>");
        $("#seconds-oceanus").html(seconds + "<span>Seconds</span>");		
	}
    setInterval(function() { makeTimerOceanus(); }, 1000);
//THEIA    
function makeTimerTheia() {
    var endTime = new Date("06 August 2021 19:00:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days-theia").html(days + "<span>Days</span>");
        $("#hours-theia").html(hours + "<span>Hours</span>");
        $("#minutes-theia").html(minutes + "<span>Minutes</span>");
        $("#seconds-theia").html(seconds + "<span>Seconds</span>");		
    }
    setInterval(function() { makeTimerTheia(); }, 1000);
//Hyperion

function makeTimerHP() {
    var endTime = new Date("07 August 2021 09:00:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days-hyperion").html(days + "<span>Days</span>");
        $("#hours-hyperion").html(hours + "<span>Hours</span>");
        $("#minutes-hyperion").html(minutes + "<span>Minutes</span>");
        $("#seconds-hyperion").html(seconds + "<span>Seconds</span>");		
    }setInterval(function() { makeTimerHP(); }, 1000);
//Cronos

function makeTimerCronos() {
    var endTime = new Date("07 August 2021 13:00:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days-cronos").html(days + "<span>Days</span>");
        $("#hours-cronos").html(hours + "<span>Hours</span>");
        $("#minutes-cronos").html(minutes + "<span>Minutes</span>");
        $("#seconds-cronos").html(seconds + "<span>Seconds</span>");		
    }
    setInterval(function() { makeTimerCronos(); }, 1000);            

$(document).ready(function() {
    var message = document.getElementsByClassName("message");

    // When the user clicks on the button, open the modal
    $(".button").click(function() {
        $(".message").css("display", "block");
      });
});
$(function(){ 
    $("#header").load("/app/src/views/header.html");
    $("#footer").load("/app/src/views/footer.html"); 
});
$(document).ready(function() {
    $('.banner-header').slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        fade: true,
    });
});