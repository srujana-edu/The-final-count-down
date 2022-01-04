let main = document.getElementById("main");
let header=document.getElementById("head1");
header.innerHTML="count down started";



let countDown = new Date("sep, 23 2023 17:00:00").getTime();

let countTime = setInterval(function(){

    let presentDate = new Date().getTime();
    let reachingTime = countDown - presentDate;

    let days = Math.floor(reachingTime / (1000*60*60*24));
    let hours = Math.floor((reachingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((reachingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((reachingTime % (1000 * 60)) / 1000);

    main.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (reachingTime < 0) {
        clearInterval(countTime);
        main.innerHTML = "Reached Target"
    }
}, 1000);