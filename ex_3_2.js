/*
    \* brief 2. Будильник
*/
function Clock(){
    this.date = new Date();
}
function AlarmClock() {
    var alarmTime;
}

AlarmClock.prototype = Object.create(Clock.prototype);
AlarmClock.prototype.constructor = AlarmClock;

Clock.prototype.start = function() {
    var self = this;
    setInterval(function(){
        self.date = new Date();
    },1000);
}
Clock.prototype.getTime = function() {
    return this.date.toLocaleTimeString();
}

AlarmClock.prototype.start = function(){
    var self = this, prevTime = new Date();
    setInterval(function(){
           if(new Date().getTime() >= self.alarmTime && prevTime < self.alarmTime)
           {
               prevTime = new Date();
               alert("ALARM!!!");
           }
    },1000);
}

AlarmClock.prototype.setAlarmTime = function(alarmDate) {
    var alarmTimeArray = alarmDate.split(':');
    this.alarmTime = new Date().setHours(alarmTimeArray[0],alarmTimeArray[1],alarmTimeArray[2],0); 
}

AlarmClock.prototype.getAlarmTime = function() {
    return this.alarmTime;
}

var alarmClock = new AlarmClock();
alarmClock.setAlarmTime("14:08:10");
alarmClock.start();
// alarmClock.setAlarmTime("12:00:00");