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


$('.saveBtn').click(function(event) {
    event.preventDefault();
    var userInput = $(this).siblings().eq(1).val();
    id = $(this).parent().attr("id")
    localStorage.setItem(id , userInput);

})

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));