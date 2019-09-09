const message = document.querySelector('#messages');
/*
const section = document.createElement('section');
section.className = "message";
section.textContent = "What are you bringing for the dinner? You have been upgraded to the grown-up table";

message.appendChild(section);

const section1 = document.createElement('section');
section1.className = "message";
section1.textContent = "Bringing for dinner?? I thought I was just a guest." 


message.appendChild(section1);

const section2 = document.createElement('section');
section2.className = "message";
section2.textContent = "Nope you are our daughter. The oldest at that. Time to start moving your own weight. Speaking of guest...?";

message.appendChild(section2);

const section3 = document.createElement('section');
section3.className = "message";
section3.textContent = "I will bring canned cranberry sauce. Also please don't start.";

message.appendChild(section3);

const section4 = document.createElement('section');
section4.className = "message";
section4.textContent = "Look forward to see you";

message.appendChild(section4);
*/

/*Practice Document Fragment*/

// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an a section component element
const section = document.createElement('section');
section.className = "message";
section.textContent = "What are you bringing for the dinner? You have been upgraded to the grown-up table";
fragment.appendChild(section)

// Create an a section component element
const section1 = document.createElement('section');
section1.className = "message";
section1.textContent = "Bringing for dinner?? I thought I was just a guest." 
fragment.appendChild(section1)

// Create an a section component element
const section2 = document.createElement('section');
section2.className = "message";
section2.textContent = "Nope you are our daughter. The oldest at that. Time to start moving your own weight. Speaking of guest...?";
fragment.appendChild(section2)

// Create an a section component element
const section3 = document.createElement('section');
section3.className = "message";
section3.textContent = "I will bring canned cranberry sauce. Also please don't start.";
fragment.appendChild(section3)

// Create an a section component element
const section4 = document.createElement('section');
section4.className = "message";
section4.textContent = "Look forward to see you";
fragment.appendChild(section3)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
message.appendChild(fragment)