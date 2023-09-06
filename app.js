
// Select the elements we need to manipulate
const theButton = document.getElementById('button');
const panels = document.querySelectorAll('.panel');
const closeButton = document.getElementById('close');
const FollowButton = document.getElementById('Flw');
const BathroomCounter = document.getElementById("BrCounter")

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
  window.open("https://github.com/ILCart/cart-profile").focus()
});

// Add the event listener to the follow button
FollowButton.addEventListener('click', () => {
  window.open("https://github.com/ILCart/cart-profile").focus()
});
// This just keeps counting up for the "? days without using the bathroom"
const Today = new Date() //Gets todays date
const Start = new Date('August 25, 2023 0:0:0') //Gets the date on August 25th
const Diff = Today - Start // Gets the difference between the two
BathroomCounter.textContent = parseInt(Diff/(1000*60*60*24)) //Parses it into milliseconds to days ms>s>h>d