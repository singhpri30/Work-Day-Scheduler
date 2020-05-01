//get the current data and day
var currentDate = moment().format("MMMM Do YYYY, dddd hh:mm A"); //moment() will give the current date and time format the date using format()
$("#currentDay").text(currentDate);

// time Array to hold time values
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// loop to iterate over timeArray
timeArray.forEach(function (time) {

    // an empty array to hold formatted timeArray values
    var newTimeArray = [];

    //converting values of timeArray into proper format using moment.js methods
    newTimeArray.push(moment().hour(time).minutes("00").format("hh:mm A"));
    console.log(newTimeArray);


    //create a div element to append all other elements
    var containerEl = $("<div>", {
        class: "input-group input-group row", //adding multiple classes to div element
    });

    //create a div element to store time
    var timeEl = $("<div>", {
        class: "input-group-text time-block hour", //adding multiple classes to div element
    });

    //create a span element to display time
    var spanEl = $("<span>");
    spanEl.text(newTimeArray); // setting text to newTimeArray
    timeEl.append(spanEl); //appending span to div element


    //create a text-area element to store user input
    var inputEl = $("<textarea>", {
        class: "form-control description w-auto rounded",// adding multiple classes to textarea
        type: "textarea",
    });


    //create a button element to save text-area input
    var buttonEl = $("<button>", {
        class: "btn fa fa-1x fa-save btn-outline-secondary saveBtn", //adding multiple classes to button
        type: "button",

    });

    //appending all the elements to container div
    containerEl.append(timeEl, inputEl, buttonEl);

    //appending container div element to display on the page
    $("#time-block").append(containerEl);


});