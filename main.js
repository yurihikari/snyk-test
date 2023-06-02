 // XSS test on title using url params (?user="")
 var urlParams = new URLSearchParams(window.location.search);
 var user = urlParams.get('user');
document.getElementById("title").innerHTML = `Hello ${user}`;