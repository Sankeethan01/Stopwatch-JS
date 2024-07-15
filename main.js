var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")

let min =00
let sec =00
let count =00

start.addEventListener('click', function () {
    watchRun = true
    stopWatch()
})

stop.addEventListener('click', function () {
    watchRun = false
})

reset.addEventListener('click', function () {
    watchRun = false
    min = 0
    sec = 0
    count = 0
    document.getElementById('min').innerHTML = "00"
    document.getElementById('sec').innerHTML = "00"
    document.getElementById('count').innerHTML = "00"
})

function stopWatch() {
    if (watchRun) {
        count++
        if (count == 100) {
            sec++
            count = 0
        }
        if (sec == 60) {
            min++
            sec = 0
        }
        let mins = min
        let secs = sec
        let counts = count
        if (min < 10) {
            mins = "0" + mins
        }
        if (sec < 10) {
            secs = "0" + secs
        }
        if (count < 10) {
            counts = "0" + counts
        }
        document.getElementById('min').innerHTML=mins
        document.getElementById('sec').innerHTML=secs
        document.getElementById('count').innerHTML=counts
        setTimeout(stopWatch,10)

    }
}





