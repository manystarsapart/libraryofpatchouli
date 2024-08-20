const wrapper = document.getElementById("wrapper");
// const wakeup = document.getElementById("wakeup");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// ^^ sleep code from online. https://www.sitepoint.com/delay-sleep-pause-wait/


// document.addEventListener('DOMContentLoaded', () => {
//     sleep(1000);
//     while (true) {
//         wrapper.classList.remove("bg-white");
//         wrapper.classList.add("bg-black");
//         sleep(1000);
//         wrapper.classList.remove("bg-black");
//         wrapper.classList.add("bg-white");
//         sleep(1000);
//     }
// })
