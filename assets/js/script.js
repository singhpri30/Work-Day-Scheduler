//get the current data and day
var currentDate = moment().format("MMMM Do YYYY, dddd"); //moment() will give the current date and time format the date using format()
$("#currentDay").text(currentDate);

// var currentTime = moment();
// console.log(currentTime);
// currentTime = currentTime.startOf("day");

// var hourEl = currentTime.add(9, 'h');
// var rr = moment().hour("13").minutes("00").format("hh:mm A")
// console.log(rr);
// paraEl.textContent = dateEl;
// //paraE2.textContent = hourEl.format(" hh:mm");

// paraE2.textContent = currentTime;
// $("#cal1").text(hourEl);
// $("#cal2").text(rr);

var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];


timeArray.forEach(function (time) {
    var newTimeArray = [];
    newTimeArray.push(moment().hour(time).minutes("00").format("hh:mm A"));
    console.log(newTimeArray);
    //create an element to append all the elements
    var containerEl = $("<div>", {
        class: "input-group input-group-lg",
    });

    //create an element to store time
    var spanEl = $("<span>", {
        class: "input-group-text ml-5 time-block hour",
    });
    spanEl.text(newTimeArray);


    //create an element to store text
    var inputEl = $("<input>", {
        class: "form - control form",
        type: "textarea",
    });


    //create an element to save text
    var buttonEl = $("<button>", {
        class: "btn fa fa-1x fa-save btn-outline-secondary saveBtn",
        type: "button",

    });






    var divEl = $("<div>");


    console.log(divEl.text(time));

    $("#time-block").append(containerEl);
    containerEl.append(spanEl, inputEl, buttonEl);



});