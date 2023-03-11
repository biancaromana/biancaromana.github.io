/*Dropdown menu: More information*/
function dropInfo() {
    document.getElementById("info-dropdown").classList.toggle("show");
}

    window.onclick = function(event) {
        if (!event.target.matches('.drop-trigger')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
        }
    }