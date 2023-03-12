function shout(string) {
    //todo
return string.toUpperCase(); //shout(string)
//receives one argument and returns it in all caps:
//Error: Expected undefined to equal 'HELLO' when
//the above error happen the test is looking to 
//return a value
// can use upperCase on a string too IE. "hello!".toUpperCase();//"HELLO!"
}

function whisper(string) {

    return string.toLowerCase();
}

function logShout(string) {
string = string.toUpperCase();
console.log(string);

}
function logWhisper (string) {
    string = string.toLowerCase();
    console.log(string);
}

function sayHiToHeadphonedRoommate(string) {

if(string === string.toLowerCase()){
return "I can't hear you!";

}
else if (string === string.toUpperCase()) {
    return "YES INDEED!";
}
else if (string === "Let's have dinner together!"){
    return "I would love to!"
}}

