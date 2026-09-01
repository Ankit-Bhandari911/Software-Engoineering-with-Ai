// let i = 1;
//  while ( i <= 5) {
//     console.log(i);
//     i++;
//  }

//  for ( let i = 1 ; i <= 5; i++) {
//     console.log(i);
//  }  

// const hello = [
//     "hello", "world", "javascript", "html", "css"
// ];

// for (let i = 0 ; i < hello.length ; i ++) {
//     console.log(i);
//      const value = hello[i];
//     console.log(value);
// } 

 const nos = [1, 2, 3, 4, 5];
 let total = 0;

 for ( let i = 0; i < nos.length; i++) {
    const value = nos[i];
    total = total + value;
 }
 console.log(total);

 const double = [];
  for (let i = 0; i < nos.length; i++) {
    const value = nos[i];
    double.push(value ** 2);
  }
  console.log(double);