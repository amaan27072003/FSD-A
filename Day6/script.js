let ar = [1,2,2,3,34,33,45];
// let newar = ar.map((x) => x * 2);
// console.log(newar);
// let newar = ar.filter((x) => x % 2 == 0).map((x) => x * 3);

// let newar = ar.reduce((x,y) => x + y, 0);
// console.log(newar);
let arr = [1, 2, 3, 34, 33, 45];

let newar = arr
  .filter((x) => x % 2 === 0)  
  .map((x) => x * 4)           
  .reduce((sum, x) => sum + x, 0);   

console.log(newar);

const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 85 },
    { name: 'David', score: 45 }
  ];
  
  const totalScore = students
    .filter(student => student.score > 60)   
    .map(student => student.score * 2)       
    .reduce((sum, score) => sum + score, 0); 
  
  console.log(totalScore);
