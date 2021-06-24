var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);
var d = new Date();
var timeBoxEl = $('.time-block')
currentHour = d.getHours();
var dataHour = $('.time-block').attr('data-hour')
console.log(currentHour) 
console.log(timeBoxEl.length)
console.log(timeBoxEl)

$( ".time-block" ).each(function(index) {
    var dataHour = $(this).attr('data-hour')
    console.log(dataHour);
    if(dataHour < currentHour){
        $(this).addClass('past');
        
    }
    if(dataHour == currentHour){
        $(this).addClass('present');
        
    }

    if(dataHour > currentHour){
        $(this).addClass('future');
        
    }
  });



