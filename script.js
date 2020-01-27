
var today = $("#today");
today.html(moment().format('MMMM Do YYYY'));

var hourBlock = $(".container");

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for (i = 0; i < hours.length; i++) {
    var time = $('<div>').addClass("row time-block").attr("id", "row" + i);
    $(".container").append(time);
    var targetTime = $("#row" + i);
    var timeCol = $("<div>").addClass("col-md-1 hour").text(hours[i]);
    $("#row" + i).append(timeCol);
    var eventCol = $("<textarea>").addClass("col-md-10").text("Add your to-do here");
    $("#row" + i).append(eventCol);
    var savebuttonCol = $("<button>").addClass("col-md-1 saveBtn");
    $("#row" + i).append(savebuttonCol);
}

$(savebuttonCol).on('click')







