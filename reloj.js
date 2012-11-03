 var Clock = function(hours, minutes, seconds) {
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds; 
this.alarm = "";   
    
    
this.time = function() {
var newHours = this.hours;
var newMinutes = this.minutes;
var newSeconds = this.seconds;
 
    if(newHours < 10) {
    newHours = "0" + this.hours;
     } 
        
    if(newMinutes < 10) {
    newMinutes = "0" + this.minutes;
     }
 
    if(newSeconds < 10) {
    newSeconds = "0" + this.seconds;
    }    
      
    return newHours + ":" + newMinutes + ":" + newSeconds;
     } 
    
    
    
    
    this.tick = function() {
    
    this.seconds += 1
       
    if(this.seconds > 59) {
        this.seconds = 0;
        this.minutes += 1; 
    }
    
    if(this.minutes > 59) {
    this.minutes = 0;
    this.hours += 1;
    }
    
    if(this.hours > 23) {
    this.hours = 0;
    }
    
        if(this.alarm == this.time()) {
        console.log(this.time() + " " + "Alarm") }
        
        
      

    }; 

  this.addalarm = function(alarm) {
        this.alarm = alarm;
        };
};

var clock = new Clock(23, 59, 59);
clock.addalarm("00:00:01") ;
console.log(clock.time());
clock.tick();
clock.tick() ; 
console.log(clock.time());  


