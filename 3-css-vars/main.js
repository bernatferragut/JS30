// Input Selection
const inputs = document.querySelectorAll('.controls input'); // returns a Node List
// on change event 
inputs.forEach( input => input.addEventListener('change', handleUpdate));
// console log function
function handleUpdate()  {
    // console.log(this.dataset);
    const suffix = this.dataset.size || ''; // returns a Data List
    // Selecting CSS VARS selecting the whole DOM and setting the name 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) ;
}
o

