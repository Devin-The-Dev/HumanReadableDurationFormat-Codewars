function formatDuration(seconds) {
    // Complete this function
    // let hours = 120
    // let minutes = 60
    console.log(seconds);
    if (seconds < 60) {
        if (seconds === 0) {
            return "now";
        } else if (seconds === 1) {
            return seconds + " second";
        }
        return "" + seconds + " seconds"
    }
    if (seconds >= 60 && seconds < 3360) {
        let minutes = seconds / 60;
        if (seconds / 60 === 1) {
            return "" + minutes + " minute"
        }
        return "" + minutes + " minutes";
    }
    // //   Hours
    //   if (seconds%120 === 0 && seconds >= 3600) {
    //     console.log(seconds/3600);
    //     return "" + seconds/3600 + " hour";
    //   }
    // //   Minutes
    //   if (seconds%60 === 0 && seconds >= 60) {
    //     console.log(seconds/60);
    //     return "" + seconds/60 + " minutes";
    //   }
}
