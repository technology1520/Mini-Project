// app.js

document.addEventListener('DOMContentLoaded', () => {
  // Dummy data for brands and models
  const brands = ['one plus', 'apple', 'mi'];
  const models = {
    'one plus': ['9r', '10r', '11r'],
    'apple': ['15', '14', '12'],
    'mi': ['Model 1C', 'Model 2C', 'Model 3C'],
  };

  populateDropdown('brand1', brands);
  populateDropdown('brand2', brands);

  // Event listeners to dynamically update model dropdowns based on selected brand
  document.getElementById('brand1').addEventListener('change', () => {
    const selectedBrand = document.getElementById('brand1').value;
    populateDropdown('model1', models[selectedBrand]);
  });

  document.getElementById('brand2').addEventListener('change', () => {
    const selectedBrand = document.getElementById('brand2').value;
    populateDropdown('model2', models[selectedBrand]);
  });
});

function populateDropdown(elementId, options) {
  const dropdown = document.getElementById(elementId);
  dropdown.innerHTML = '';

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    dropdown.appendChild(optionElement);
  });
}

function compare() {
  const product1 = document.getElementById('product1');
  const product2 = document.getElementById('product2');

  const brand1 = document.getElementById('brand1').value;
  const model1 = document.getElementById('model1').value;


  const brand2 = document.getElementById('brand2').value;
  const model2 = document.getElementById('model2').value;

  fetch('localhost:8080/product/one plus/11')
    .then(response => response.json())
    .then(data => {
      // Handle the data from the API
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


  const resultElement = document.getElementById('comparison-result');
  resultElement.innerHTML = '';

  const resultText = document.createElement('p');
  resultText.textContent = `Comparison Result: ${brand1} ${model1} - ${feature1} - ${feature2} vs ${brand2} ${model2} - ${feature3} - ${feature4}`;
  resultElement.appendChild(resultText);
}
