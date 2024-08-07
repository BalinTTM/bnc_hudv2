
$(function () {

    function display(bool) {
        if (bool) {
            $("body").show();
        } else {
            $("body").hide();
        }
    }
    display(true)

    var isOxygenShown = false;
    $("#oxygen-back").hide();  

    window.addEventListener('message', function(event) {
        if (event.data.type === "ui") {
            if (event.data.status == true) {
                display(true)
            }
            else {
                display(false)
            }
        }
        else if (event.data.type === "update") {
            var date = new Date();
            document.getElementById("health").style.width = event.data.health + "%";
            document.getElementById("stamina").style.width = event.data.stamina + "%";
            document.getElementById("armor").style.width = event.data.armor + "%";
            document.getElementById("stamina").style.width = event.data.stamina + "%";

            
            if (event.data.oxygen < 100) {
                if (!isOxygenShown) {
                    $("#oxygen-back").show();
                    $("#oxygen").show();

                    isOxygenShown = true;
                }
                if (event.data.oxygen > 0){
                    document.getElementById("oxygen").style.width = event.data.oxygen + "%";
                }
                else{
                    document.getElementById("oxygen").style.width = "0%";
                }
                
            }
            
            else if (event.data.oxygen >= 100) {
                if (isOxygenShown) {
                    $("#oxygen-back").hide();
                    $("#oxygen").hide();
                    isOxygenShown = false; 
                }
            }
            
        }      
        
    })

    
})