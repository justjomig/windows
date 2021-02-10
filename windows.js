// WINDOW METHODS / OBJECT / PROPERTIES

// Alert 
alert('Hello World');

// Prompt 
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure?')) {
console.log('YES');
} else {
console.log('NO');
}

let value;

// Outer Height and Width
value = window.outerHeight;
value = window.outerWidth;

// Inner Height and Width
value = window.innerHeight;
value = window.innerWidth;

// Scroll points
value = window.scrollY;
value = window.scrollX;

// Location Object
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

// Redirect
// window.location.href = 'https://www.google.com/';
// Reload
window.location.reload();

// Navigation Object
value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.userAgent;
value = window.navigator.platform;
value = window.navigator.vendor;
console.log(value);