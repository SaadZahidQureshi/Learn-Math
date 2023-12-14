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



document.addEventListener("DOMContentLoaded", function() {
  // Function to get query parameters from the URL
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Check if the showAlert parameter is present in the URL
  const showAlertParam = getQueryParam("showAlert");
//   console.log(showAlertParam)
  if (showAlertParam === "true") {
    // The showAlert parameter is present, display the alert
    const alertBox = document.querySelector('.alert.alert-success');
    if (alertBox) {
      alertBox.classList.remove('d-none');
    }
  }
});

