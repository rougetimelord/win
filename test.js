var test = function () {
    var e = document.getElementById("result"), ua = navigator.userAgent, regex = new RegExp('NT (6|5)', 'gi');
    if (regex.test(ua)) {
        document.title = "RIP restart now";
        e.className = "fail";
        e.innerText = "Just stop using old windows";
    }
    else {
        e.className = "pass";
        e.innerText = "You're safe... For now"
    }
}
document.addEventListener('DOMContentLoaded', test);