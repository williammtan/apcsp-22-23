// 7.2.5 Height in Meters

var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start(){
	convertHeightToMeters(6,4);
	convertHeightToMeters(0, 6);
}

function convertHeightToMeters(feet, inches) {
    println(Math.round((feet*0.3048+inches*0.0254)*10000)/10000);
}