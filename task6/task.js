const num =  Math.floor(Math.random() * 100);

function randomNumber() {
    //создаем Promis
    const myPromis = new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(num%2==0){
                resolve(`Завершено успешно. Сгенерированное число — ${num}`)
            }
            else{
                reject(`Завершено с ошибкой. Сгенерированное число — ${num}`)
            }
        }, 3000)
    });
        
        

    myPromis
        .then((result) =>{
            console.log(result)
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally(() =>{
            console.log("Работа окончена")
        });
};

randomNumber()

