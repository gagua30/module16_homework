
let nameUser = "";
let dataSession = "";

//обозначаем ключ
let myNameUser = localStorage.getItem('myNameUser');
let myDataSession = localStorage.getItem('myDataSession');

function checkSession (a){
    
    if(a==false){
        nameUser = prompt("Приветствую, назовите свое имя");
        dataSession = new Date();;
        //ключ значение
        localStorage.setItem('myNameUser',`${nameUser}`)
        localStorage.setItem('myDataSession',`${dataSession}`)
        
        
    }else{
        alert(`Приветствую Вас господин ${myNameUser} последний раз вы были у нас ${myDataSession}`);
        dataSession = new Date();;
        localStorage.setItem('myDataSession',`${dataSession}`)
    }
}

console.log('имя',myNameUser);
console.log('дата',myDataSession);
window.onload=checkSession(myNameUser);//вызываем функцию по открытию страницы