var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);
var d = new Date();
var timeBoxEl = $('.time-block')
currentHour = d.getHours();
var dataHour = $('.time-block').attr('data-hour')
console.log(dataHour) 
console.log(timeBoxEl.length)

// Apply past class to elements with the time-box class where the data-hour attribute is less than the current hour

        
for(var i = 0; i < timeBoxEl.length; i++){
    
}        // Loop through each time-box el 

// If data-hour attribute is less than current hour
// Apply past class to time-box


// Apply present class to elements with the time-box class box where the data-hour attribute is equal to the current hour
