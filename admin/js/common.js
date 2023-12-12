// Your JavaScript
function toggleActive(element) {
    // Remove 'active' class from all nav links
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked nav link
    element.classList.add('active');
}
