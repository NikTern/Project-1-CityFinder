//Event listeners for navbar links
    //landing page redirect
    var searchnav = document.querySelector("#searchnav")
    searchnav.addEventListener("click", function(event){
        event.preventDefault();
        location.replace("./index.html");
    })
    
    var navtitle = document.querySelector(".navtitle")
    navtitle.addEventListener("click", function(event){
        event.preventDefault();
        location.replace("./index.html");
    })

// Date&Time on NavBar//
var time = document.querySelector("#Time")
function displayTime(){
    time.textContent=moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}

displayTime();
setInterval(displayTime, 1000);

// Declaring empty array to populate with city names from local storage
var myCities = [];
var listEl = document.getElementById("my-cities-list");

function getMyCities(){
    for (var i = 0; i < localStorage.length; ++i) {

        var key = localStorage.key(i);

// Checks local storage for keys starting in "SavedCity" then gets the value,
// being the city name and pushes the value to the array declared above.
        if (key.substring(0, 9) === "SavedCity"){
            var cityValue = JSON.parse(localStorage.getItem(key));
            myCities.push(cityValue);
        }
    }
}

getMyCities();

// Loops over the array of items from local storage creating a list item for each one.
myCities.forEach(element => {
    var listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item");
    listEl.appendChild(listItem);
// Adds a button with the city name to each list item.
    var cityButton = document.createElement("button");
    cityButton.setAttribute("id", "cityBtn");
    cityButton.setAttribute("class", "btn btn-outline-success");
    cityButton.textContent = element;
    listItem.appendChild(cityButton);

// Event listener for each button to go back to the City Display page with the API calls.
    cityButton.addEventListener("click", function(){
        localStorage.setItem("clicked-city", cityButton.textContent);
        location.replace("./cityDisplay.html");
    })
})


