var five = require("johnny-five"),
  board, motion;
var myBoard, myLed;
board = new five.Board();

board.on("ready", function() {

  // Create a new `motion` hardware instance.
  motion = new five.IR.Motion(7);
  myLed = new five.Led(13);
  myLed2 = new five.Led(12);
  myLed3 = new five.Led(11); 
  myLed4 = new five.Led(10);
  myLed5 = new five.Led(9); 
  myLed6 = new five.Led(8); 
  myLed7 = new five.Led(3); 
  myLed8 = new five.Led(6); 
  myLed9 = new five.Led(5); 
  myLed10 = new five.Led(4); 
  
  // Inject the `motion` hardware into
  // the Repl instance's context;
  // allows direct command line access
  this.repl.inject({
    motion: motion,
    led: myLed, led2:myLed2, led3:myLed3,led4:myLed4,led5:myLed5,led6:myLed6,led7:myLed7,led8:myLed8,led9:myLed9,led10:myLed10
  });

  // Pir Event API

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function(err, ts) {
    console.log("calibrated", ts);
  });

  // "motionstart" events are fired when the "calibrated"
  // Led strobe fast when motion has started
  motion.on("motionstart", function(err, ts) {
    console.log("motionstart", ts);
    myLed.strobe(50);
    myLed2.strobe(50);
    myLed3.strobe(50);
    myLed4.strobe(50);
    myLed5.strobe(50);
    myLed6.strobe(50);
    myLed7.strobe(50); 
    myLed8.strobe(50); 
    myLed9.strobe(50); 
    myLed10.strobe(50);
 
  });

  // "motionstart" events are fired following a "motionstart event
  // when no movement has occurred led strobe slower in different patterns
  motion.on("motionend", function(err, ts) {
    console.log("motionend", ts);
    myLed.strobe(1000);
    myLed2.strobe( 1000 );
    myLed3.strobe(1000);
    myLed4.strobe( 1000 );
    myLed5.strobe(1000);
    myLed6.strobe( 1000 );
    myLed7.strobe(1000); 
    myLed8.strobe(1000); 
    myLed9.strobe(1000); 
    myLed10.strobe(1000);
  });
});
