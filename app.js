
// Select the elements we need to manipulate
const theButton = document.getElementById('button');
const panels = document.querySelectorAll('.panel');
const closeButton = document.getElementById('close');
const FollowButton = document.getElementById('Flw');


// Add the event listener to the profile button
theButton.addEventListener('click', () => {
  panels.forEach((panel) => {
    panel.classList.toggle('open');
  });
});

// Add the event listener to the close button
closeButton.addEventListener('click', () => {
  panels.forEach((panel) => { 
    panel.classList.remove('open');
  });
});

// Add the event listener to the follow button
FollowButton.addEventListener('click', () => {
  window.open("www.google.com").focus()
});