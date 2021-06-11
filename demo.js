const inputA = document.querySelector('#input1');
const inputB = document.querySelector('#input2');
const inputC = document.querySelector('#input3');
const inputD = document.querySelector('#input4');
const inputE = document.querySelector('#input5');
const submit = document.querySelector('#submitbtn');
submitbtn.addEventListener( 'click', function(event) {
    event.preventDefault();
    console.log(inputA.value);
    console.log(inputB.value);
    console.log(inputC.value);
    console.log(inputD.value);
    console.log(inputE.value);
    alert('the value of input1 is' +inputA )
})
