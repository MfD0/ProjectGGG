// Get the scrollTop button
const scrollTopButton = document.getElementById("scrollTopButton");

// Show or hide the button when scrolling
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopButton.classList.add("active");
    console.log("scroll button is active now");
  } else {
    scrollTopButton.classList.remove("active");
    console.log("scroll button is not active now");
  }
};

// Scroll to the top when clicking the button
scrollTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};