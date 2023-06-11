document.addEventListener('DOMContentLoaded', function() {
 // Create an array to store the elements
 var elements = [];

 // Get the required elements from the DOM
 var navList = document.getElementById('navList');
 var elementList = document.getElementById('elementList');
 var newElementInput = document.getElementById('newElementInput');
 var addElementBtn = document.getElementById('addElementBtn');
 var appendedElements = document.getElementById('appendedElements');
 var dropdown = document.getElementById('dropdown');
 var removeElementDropdown = document.getElementById('removeElementDropdown');
 var removeElementBtn = document.getElementById('removeElementBtn');

 // Function to create navigation links
 function createNavLink(element) {
   var li = document.createElement('li');
   var link = document.createElement('a');
   link.href = '#' + element;
   link.textContent = element;
   li.appendChild(link);
   navList.appendChild(li);
 }

 // Function to append elements to the webpage
 function appendElement(element) {
   var li = document.createElement('li');
   li.textContent = element;
   elementList.appendChild(li);

   var div = document.createElement('div');
   div.textContent = element;
   appendedElements.appendChild(div);

   var option = document.createElement('option');
   option.value = element;
   option.textContent = element;
   dropdown.appendChild(option);

   var removeOption = document.createElement('option');
   removeOption.value = element;
   removeOption.textContent = element;
   removeElementDropdown.appendChild(removeOption);

   createNavLink(element);
 }

 // Function to remove elements from the webpage
 function removeElement() {
   var selectedElement = removeElementDropdown.value;
   var index = elements.indexOf(selectedElement);
   if (index !== -1) {
     elements.splice(index, 1);
     removeElementDropdown.remove(index + 1);
     dropdown.remove(index + 1);
     appendedElements.removeChild(appendedElements.childNodes[index]);
     elementList.removeChild(elementList.childNodes[index]);
     navList.removeChild(navList.childNodes[index]);
   }
 }

 // Function to handle the button click event for adding elements
 function addElement() {
   var newElement = newElementInput.value;
   if (newElement !== '') {
     elements.push(newElement);
     appendElement(newElement);
     newElementInput.value = '';
   }
 }

 // Function to handle the button click event for adding elements
 addElementBtn.addEventListener('click', addElement);
 
 // Function to handle the button click event for removing elements
 removeElementBtn.addEventListener('click', removeElement);
 
 // Scroll to the corresponding section when a navigation link is clicked
 navList.addEventListener('click', function(event) {
   if (event.target.tagName === 'A') {
     var targetElement = document.getElementById(event.target.getAttribute('href').substring(1));
     targetElement.scrollIntoView({ behavior: 'smooth' });
     event.preventDefault();
   }
 });
});