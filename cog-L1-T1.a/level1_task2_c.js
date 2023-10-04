function addNumbers() {
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

   
    const sum = num1 + num2;

    
    document.getElementById('result').textContent = `Result: ${sum}`;
}   