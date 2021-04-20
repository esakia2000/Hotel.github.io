const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})
document.getElementById('btn').addEventListener('click', function() {
    alert('Your Booking has Confirmed');
});
document.getElementById('btn2').addEventListener('click', function() {
    alert('Your Booking has Confirmed');
});
document.getElementById('btn3').addEventListener('click', function() {
    alert('Your Booking has Confirmed');
});

var content = document.getElementById("content");
var button = document.getElementById("read-more");

button.onclick = function() {
    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Read More"; 
    } else  {
        //expand the box
        content.className = "open"; 
        button.innerHTML = "Read Less";  
    }
};

var content1 = document.getElementById("content1");
var button1 = document.getElementById("read-more1");

button1.onclick = function() {
    if(content1.className == "open"){
        //shrink the box
        content1.className = "";
        button1.innerHTML = "Read More"; 
    } else  {
        //expand the box
        content1.className = "open"; 
        button1.innerHTML = "Read Less";  
    }
};

