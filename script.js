
var today = $("#today");
today.html(moment().format('dddd MMMM Do YYYY'));

var hourBlock = $(".container");

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for (i = 0; i < hours.length; i++) {
    var currentHour = parseInt(moment().format("H"));
    var plannerHour = parseInt(moment(hours[i], "ha").format("H"));
    var color;
    if (plannerHour < currentHour) {
        color = "grey";
    }
    else if (plannerHour === currentHour) {
        color = "red";
    }
    else {
        color = "green";
    }

    var time = $('<div>').addClass("row time-block").attr("id", "row" + i);
    $(".container").append(time);
    var targetTime = $("#row" + i);
    var timeCol = $("<div>").addClass("col-md-1 hour").text(hours[i]);
    $("#row" + i).append(timeCol);
    var eventCol = $("<textarea>").addClass("col-md-10" + " " + color).text(localStorage.getItem(hours[i]));
    $("#row" + i).append(eventCol);
    var savebuttonCol = $("<button>").addClass("col-md-1 saveBtn");
    $("#row" + i).append(savebuttonCol);
}

$('.saveBtn').click(function () {
    var textEvent = $(this).prev().val();
    var time = $(this).prev().prev().text();
    localStorage.setItem(time, textEvent);
});













