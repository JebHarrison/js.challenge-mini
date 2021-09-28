const myNumber = 3;
 if (myNumber >= 0){
    console.log("It's a positive number")
} else {
    console.log("It's a negative number")
}

function daysUntilTheWeekend(event){
var days = event.target.value;
// if (!days){
//     return alert("Sorry we didn't recognise that day")
// }else {
//     return alert("Sorry we didn't recognise that day")
// }

days = days.toUpperCase();

var howMany;

switch(days){
    case "Monday":
        howMany = "Five more days left"
        break;
    case "Tuesday":
        howMany = "Four more days left"
        break;
    case "Wednesday":
        howMany = "Three more days left"
        break;
    case "Thursday":
        howMany = "Two more days left"
        break;
    case "Friday":
        howMany = "One more day left put on your party shoes!"
        break;
    case "Saturday":
        howMany = "It's the weekend baby let's groove tonight"
        break;
    case "Sunday":
        howMany = "Well that was quick, let's take it easy today"
        break;
    }

    alert(days + howMany);
}