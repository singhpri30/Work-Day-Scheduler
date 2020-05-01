var paraEl = document.querySelector("#currentDay");
var paraE2 = document.querySelector("#cal");

//get the current data and day
var dateEl = moment().format("MMMM Do YYYY, dddd");
//var date1El = moment().calendar();
//var date1El = moment().fromNow("hhh");
// var date1El = moment().hours(10);
// var tt = moment().get('hour');
// var ttr = moment().set('hour', 13);
var currentTime = moment();
console.log(currentTime);
currentTime = currentTime.startOf("day");

var hourEl = currentTime.add(9, 'h');
var rr = moment().hour("13").minutes("00").format("hh:mm A")
console.log(rr);
paraEl.textContent = dateEl;
//paraE2.textContent = hourEl.format(" hh:mm");

paraE2.textContent = currentTime;
$("#cal1").text(hourEl);
$("#cal2").text(rr);

var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];


timeArray.forEach(function (time) {
    var newTimeArray = [];
    newTimeArray.push(moment().hour(time).minutes("00").format("hh:mm A"));
    console.log(newTimeArray);

    var divEl = $("<div>");


    console.log(divEl.text(time));


    $(".container").append(divEl);



});