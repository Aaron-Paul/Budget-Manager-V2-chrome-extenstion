$(function(){

    chrome.storage.sync.get(['limit','total'],function(budget){
        $('#limit').val(budget.limit);
        $('#total').val(budget.total);
    });

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit});
        }
    });

    $('#setSpend').click(function(){
        var spend = $('#total').val();
        var displayElement =document.getElementById('total');
        if (spend){
            chrome.storage.sync.set({'total': spend});
            displayElement.textContent=spend;
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){
          
            var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Resetting Total",
                message: "Total has been reset to 0."
            };
            var displayElement =document.getElementById('total');
            displayElement.textContent=0;

            chrome.notifications.create('resetNotif', notifOptions);
           
        });
    });
});