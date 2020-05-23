(function() {
    var names = ["Sachin", "Sehwag", "Ms Dhoni", "Steve", "Salman", "Rahul", "Rohit", "Raina", "Uttapa", "Sunil"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 's') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
