// transform: rotate(0deg);

var sec = 0;
var min = 0;

fCLock();
function fCLock() {

    console.log(sec);

    if( sec <= 360){
        document.getElementById('sec_arrow').style.transform = 'rotate('+ sec +'deg)';
        sec = sec + 6;
        setTimeout(fCLock,20);
    }
    else if (min < 360){
        sec = 0;
        min = min + 6;
        console.log(sec);
        console.log(min);
        document.getElementById('min_arrow').style.transform = 'rotate('+ min +'deg)';
        setTimeout(fCLock,20);
    }
}
