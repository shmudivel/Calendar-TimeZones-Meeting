
function getSelectDay () {
    const selectedDay = document.getElementById("day").value;
    console.log(selectedDay);
}

function getSelectMonth () {
    const selectedMonth = document.getElementById("month").value;
    console.log(selectedMonth);
}

function getSelectYear () {
    const selectedYear = document.getElementById("year").value;
    console.log(selectedYear);
}



function getSelectTimeZone1 (city) {
    const selectedTimeZone1 = document.getElementById("p1").value;
    timeForLoc1(selectedTimeZone1);
}

function getSelectTimeZone2 () {
    const selectedTimeZone2 = document.getElementById("p2").value;
    console.log(selectedTimeZone2);
}

function getSelectTimeZone3 () {
    const selectedTimeZone3 = document.getElementById("p3").value;
    console.log(selectedTimeZone3);
}



const locations = document.querySelectorAll("table.times tbody td")

const timeForLoc1 = function (city) {
    locations.forEach(locationTest => {
        const output = locationTest.querySelector("output")
    
        const now = luxon.DateTime.now().setZone(city)
    
        output.innerHTML = now.toFormat("ccc T")
    })
}
 

//  setInterval(function () {
//      timeForLoc1();
// }, 1000)






