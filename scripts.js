var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
//document.getElementsByTagName('head')[0].appendChild(script);

let translate = document.getElementById("translate").addEventListener("mouseout",
    function ()
    {
        this.style.border = "1px solid #000";
    }
);
