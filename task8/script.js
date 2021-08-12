const pageNumber = document.querySelector(".inputNumberOne");
const limit = document.querySelector(".inputNumberTwo");
const button = document.querySelector(".button");


function sum() {
    
    if(pageNumber.value <1 && limit.value <1 ||pageNumber.value > 10 && limit.value  > 10||isNaN(pageNumber.value) && isNaN(limit.value)){
        alert('Номер страницы и лимит вне диапазона от 1 до 10')
        
    }
    else if(pageNumber.value < 1 || pageNumber.value > 10 || isNaN(pageNumber.value)){
        alert('Номер страницы вне диапазона от 1 до 10')
    }
    else if(limit.value < 1 || limit.value > 10 || isNaN(limit.value)){
        alert('Лимит страницы вне диапазона от 1 до 10')
    }else{
        useRequest(`https://picsum.photos/v2/list?page=${pageNumber.value}&limit=${limit.value}`, displayResult);
        
    }
}


function useRequest(url, callback) {
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
          if (callback) {
           callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };
    
  const resultNode = document.querySelector('.result');
  
  function displayResult(apiData) {
    
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
      
    });
    
    resultNode.innerHTML = cards;
    localStorage.setItem('list', JSON.stringify(apiData))//добавляем новый
  }

  window.onload=displayResult(JSON.parse(localStorage.getItem('list')));//вызываем функцию по открытию страницы


button.addEventListener('click', sum);



