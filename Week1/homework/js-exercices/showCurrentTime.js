var myTime = setInterval(myFuncTimer, 1000);

    function myFuncTimer() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("time").innerHTML = t;
    }

        