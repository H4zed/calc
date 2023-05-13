const inputElements = document.querySelectorAll('input[type="number"]');
inputElements.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.length >= 2) {
      input.value = input.value.slice(0, 2);
    }
  });
});

// получаем элементы формы
const emotesInput = document.getElementById('emotes');
const chibisInput = document.getElementById('chibis');
const panelsInput = document.getElementById('panels');
const badgesInput = document.getElementById('badges');
const totalCostElement = document.getElementById('total-cost');

// добавляем обработчик событий на изменение значения каждого поля
emotesInput.addEventListener('input', updateTotalCost);
chibisInput.addEventListener('input', updateTotalCost);
panelsInput.addEventListener('input', updateTotalCost);
badgesInput.addEventListener('input', updateTotalCost);

function updateTotalCost() {
  // получаем значения из всех полей и суммируем их
  const emotesCost = parseFloat(emotesInput.value) * (parseFloat(emotesInput.value) > 2 ? 0.87 : 1) * 7 || 0;
  const chibisCost = parseFloat(chibisInput.value) * (parseFloat(chibisInput.value) > 2 ? 0.87 : 1) * 10 || 0;
  const panelsCost = parseFloat(panelsInput.value) * (parseFloat(panelsInput.value) > 2 ? 0.87 : 1) * 10 || 0;
  const badgesCost = parseFloat(badgesInput.value) * (parseFloat(badgesInput.value) > 2 ? 0.87 : 1) * 5 || 0;
  const totalCost = emotesCost + chibisCost + panelsCost + badgesCost;
  
  // обновляем текст на странице
  totalCostElement.textContent = `$${totalCost.toFixed(0)}`;
}


// Очищаем поля формы, если в них стоит "0"
const inputs = [emotesInput, chibisInput, panelsInput, badgesInput];
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    if (input.value === "0") {
      input.value = "";
    }
  });
  
  input.addEventListener('blur', () => {
    if (input.value === "") {
      input.value = "0";
    }
  });
});


