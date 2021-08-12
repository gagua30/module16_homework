const parser = new DOMParser();

//XML:

const xmlString = `
    <list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
    </list>
`;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//получаем все DOM-ноды

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const profNode = studentNode.querySelector("prof");
const ageNode = studentNode.querySelector("age");
const langAttr = nameNode.getAttribute("lang"); 



const list =  { list: [
    { name: firstNode.textContent + secondNode.textContent, age: ageNode.textContent, prof: profNode.textContent, lang: langAttr},
    

]}

console.log(list)
//JS объект
/* {
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
} */