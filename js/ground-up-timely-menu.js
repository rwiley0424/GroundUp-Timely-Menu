const dateTime = new Date();
let hour = dateTime.getHours();
console.log (hour);
let linkText = "";
let linkHref = "";


//if-else  if-else logic to handle
// breakfast, lunch and dinner
if(hour < 11){
    linkText = 'Breakfast';
    linkHref = 'breakfast.html';
} else if (hour < 16) {
    linkText = 'lunch';
    linkHref = 'lunch.html';
} else{
    linkText = 'Dinner';
    linkHref = 'dinner.html';
}

// target the meal-link and assign the linkText and linkHref
//dynamically generate an a-tag, assign it it's properties
//and output it to the DOM as a child of the current-menu div
const mealLink = document.createElement('a');
mealLink.href = linkHref;
mealLink.textContent = linkText;
mealLink.className = "button";
const currentMenuDiv = document.getElementById('current-menu');
currentMenuDiv.appendChild(mealLink);

//challenge: put a "Timely Greeting " out in the nav
// if hr is less than 12, say "Good Morning! 10:34 is Coffee Time!"
// else if hr is less than 17, say "Good Afternoon! 16:34 is Coffee Time"
//else hr is at least 17, so say "Good Evening! 18:34 is Coffee Time!"
//use getMinutes() to get the current minute

// if (hr<12){
    // linkText = 'Timely Greeting';
// } else if (hr<17){
    // linkText = 'Good Morning! 10:34 is Coffee Time';
// } else (hr=> 17){
    // linkText = 'Good Evening! 18:34 is Coffee Time!';
// }

const greetingSpan = document.getElementById('greeting');
let greeting = "";
let min = dateTime.getMinutes();
if(hour <12){
    greeting = "Good Morning";
} else if(hour < 17){
    greeting = "Good Afternoon";
}else{
    greeting = "Good Evening";
}

greetingSpan.textContent = greeting + hour + ":" + min + "is Coffee Time!";

