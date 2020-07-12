const numberContainer = document.querySelector('.number-container');
const buttonContainer = document.querySelector('.button-container');
const sortedNumbers = [1,2,3,4,5,6,7,8,9];

function shuffleNumbers() {
  let result = [...sortedNumbers].sort(function() {
    return 0.5 - Math.random();
  });

  return result;
}

function constructGrid (order){
  const fragment = new DocumentFragment()
  const shuffledArr = order === 'shuffle' ? shuffleNumbers() : sortedNumbers;
  shuffledArr.forEach(element => {
    const division = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = element;
    division.appendChild(span);
    fragment.appendChild(division);
  });

  numberContainer.appendChild(fragment);
}

//iife
(function(){
  constructGrid('shuffle');
})();

// Event listener
buttonContainer.addEventListener('click', (e) => {
  if(e.target.id){
    numberContainer.innerHTML = '';
    constructGrid(e.target.id);
  }
})

