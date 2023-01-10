//synchronous: another work starts after one is completed and so on....
//Javascript is a Synchronous programming language and is single threaded. 

console.log("script start");

const id = setTimeout(() => {
   console.log("Inside setTimeout");
}, 1000);

for(let i=1;i<100;i++) {
    console.log("....");
}
console.log("settimeout id is",id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");
