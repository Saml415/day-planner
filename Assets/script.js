var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);
var d = new Date();
var timeBoxEl = $('.time-block')
currentHour = d.getHours();
console.log(timeBoxEl)
$('.time-block')
// Apply past class to elements with the time-box class where the data-hour attribute is less than the current hour

// Loop through each time-box el 
// Get the data-hour attribute of time-box el (var)
// If data-hour attribute is less than current hour
// Apply past class to time-box


// Apply present class to elements with the time-box class box where the data-hour attribute is equal to the current hour


// Apply future class to elements with the time-box class box where the data-hour attribute is greater than the current hour 