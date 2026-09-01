// const myarr = ["a",100,200,"b"];
// console.log(myarr.length);
//  myarr.push(500);
//  console.log(myarr);
 
// myarr.splice(0 , 3);
// console.log(myarr);

// [1, true , "hello" ,{name: 'helo'} , [1, 2]];
// console.log(typeof["hello"]);

const todolist = [];

function render(){

let todolistHTML = '';

for (let i = 0; i < todolist.length; i++) {
    const tode = todolist[i];
    const html = `
    <div>${tode} </div>
    
    <button onclick = 
    "todolist.splice(${i},1);
    render();">
    Delete </button> 
   
     `;
     todolistHTML += html;
}

console.log(todolistHTML);

document.querySelector('.todo-list').innerHTML = todolistHTML;
}
function addtodo() {
   const inputelemet = document.querySelector('.input');
   const inputvalue = inputelemet.value;
  
   todolist.push(inputvalue);
 console.log(todolist);
 inputelemet.value = "";
 render()
  } ;
