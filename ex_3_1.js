/*
    \* brief 1.исправить часы
*/

function Clock(){
    this.date = new Date();
}
Clock.prototype.start = function() {
    var self = this;
    setInterval(function(){
        self.date = new Date();
    },1000);
}
Clock.prototype.getTime = function() {
    return this.date.toLocaleTimeString();
}
const myClock = new Clock();
myClock.start();
console.log(myClock.getTime());
setTimeout(function(){
    console.log(myClock.getTime());
},2000);
