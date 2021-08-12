const button = document.querySelector('.buttonStart');
const inputNum = document.querySelector('.inputNumberUser');
const resultNode = document.querySelector('.results');







button.addEventListener('click',()=> searchUser());

function searchUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${inputNum.value}/todos`)
    .then((response)=>{
        const result = response.json();
        return result;
    })
    .then((data)=>{
        displayTask(data)
    })
}   


function displayTask(data) {
    
    let cards = '';
    /* let cardBlock = ''; */
    if(data.length == 0){
        cards = `<span>Такого пользователя не существует!</span>`
    }else{
    data.forEach(item => {
        serachCompleted = item.completed ? '' : 'serachCompleted'
        cards += `
        <li class="${serachCompleted}">${item.title}</li>
        <span>${item.completed}</span>
       
      `;
    }) 
    };

    resultNode.innerHTML = cards;
}