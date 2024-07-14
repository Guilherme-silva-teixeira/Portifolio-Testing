var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
//translate button onmouseleave bug
let translate = document.getElementById("translate").addEventListener("mouseout",
    function ()
    {
        this.style.border = "1px solid #000";
    }
);
