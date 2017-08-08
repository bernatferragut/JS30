// Input Selection
const inputs = document.querySelectorAll('.controls input');
// console log function
function handleUpdate()  {
    // console.log(this.value);
    // console.log(this.dataset);
    const suffix = this.dataset.size || '';
    // console.log(suffix);
    // Selecting CSS VARS selecting the whole DOM and setting the name 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) ;
}
// on change event 
inputs.forEach( input => input.addEventListener('change', handleUpdate));

