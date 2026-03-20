const remote_icon = document.getElementById('remote');
const remote_control = document.getElementById('remote-dropdown');

remote_icon.addEventListener('click', () => {
    console.log('hello');
    if (remote_control.style.display == "none") {
        remote_control.style.display = "block";
    } else {
        remote_control.style.display = "none";
    }
        
});
