$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});




const circle = document.getElementById("circle");

document.addEventListener("mousemove", (e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
});




// التحقق من وجود عداد في Local Storage
if (localStorage.getItem('visitCount')) {
    let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('counter').innerText = visitCount;
} else {
    localStorage.setItem('visitCount', 1);
    document.getElementById('counter').innerText = 1;
}