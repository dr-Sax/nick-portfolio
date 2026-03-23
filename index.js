const remote_icon = document.getElementById('remote-div');
const remote_control = document.getElementById('remote-dropdown');

remote_icon.addEventListener('click', () => {
    console.log('hello');
    if (remote_control.style.display == "none") {
        remote_control.style.display = "block";
    } else {
        remote_control.style.display = "none";
    }
        
});

const remote_screen = document.getElementById('remote-screen');

remote_screen.addEventListener('click', () => {
    window.location.href = "/techno-juggling.html";
        
});



