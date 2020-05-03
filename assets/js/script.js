//get the current data and day
var currentDate = moment().format("dddd, MMMM Do YYYY, hh:mm A"); //moment() will give the current date and time, format the date using format()
$("#currentDay").text(currentDate);

// time Array to hold time values
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// loop to iterate over timeArray
timeArray.forEach(function (time) {
    var newTimeArray = [];// an empty array to hold formatted timeArray values

    //converting values of timeArray into proper format using moment.js methods
    newTimeArray.push(moment().hour(time).minutes("00").format("hh:mm A"));

    //create a div element to append all other elements
    var containerEl = $("<div>", {
        class: "input-group input-group row", //adding multiple classes to div element
        "data-time": time,
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
        class: "form-control description w-auto rounded input-area",// adding multiple classes to textarea
        type: "textarea",
        id: time,
    });
    //create a button element to save text-area input
    var buttonEl = $("<button>", {
        class: "btn fa fa-1x fa-save btn-outline-secondary saveBtn btnEl", //adding multiple classes to button
        type: "button",
    });
    //appending all the elements to container div
    containerEl.append(timeEl, inputEl, buttonEl);

    //appending container div element to display on the page
    $("#time-block").append(containerEl);
});

//looping over each row to display different color code
$(".row").each(function () {
    var currentTime = moment().hours(); //storing current time
    var timeBlock = parseInt($(this).attr("data-time")); //getting the data-time attribute value and storing it in a variable

    if (currentTime > timeBlock) {
        $(this).find(".input-area").addClass("past"); //adding the class past to text-area if currentTime > timeBlock
        $(this).find(".input-area").prop('readonly', true);// adding readonly property to texarea when time is in past
    }
    else if (currentTime < timeBlock) {
        $(this).find(".input-area").addClass("future"); //adding the class future to text-area if currentTime < timeBlock
        $(this).find(".input-area").removeAttr('readonly');// removing readonly property from texarea when time is in future
    }
    else if (currentTime === timeBlock) {
        $(this).find(".input-area").addClass("present");//adding the class present to text-area if currentTime === timeBlock
    }
});

//get data from local storage
for (var i = 0; i < timeArray.length; i++) {

    $("#" + timeArray[i]).val(localStorage.getItem(timeArray[i]));
}

//set local storage on button click event
$(".btnEl").on("click", function (event) {
    event.preventDefault();

    //get the value of textarea on abutton click
    var userInput = $(this).siblings(".input-area").val();

    //get the value of data attribute from parent element
    var storageKey = $(this).parent(".row").attr("data-time");

    //save the values in local storage as key value pair
    localStorage.setItem(storageKey, userInput);
})




