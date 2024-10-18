// sayhello =()=>{
//     console.log("helo world")
// };
// console.log("start")
// setTimeout(sayhello, 4000);
// console.log("End");

// console.log("start");
// setTimeout(()=>{
//     console.log("first task complete");
//     setTimeout(() =>{
//         console.log("second task completed");
//         setTimeout(() =>{
//             console.log("third task complete");
//         },3000)
//     },1000)
// },5000)

// const mypromise= new Promise((resolve , reject) =>{
//     let success = true;
//     if(success)
//     {
//         resolve("data send success");
//     }else{
//         reject("data Failed to send");
//     }
// });
// mypromise
//    .then((message) => console.log(message))
//    .catch((error) => console.log("the eror is in feild",+ error))

//promises
// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//    if (success){
//     resolve("data sent successfully");
//    }
//    else{
//     reject("Failed to send data");
//    }
// });

// myPromise.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 85 },
    { name: 'David', score: 45 }
  ];
  
  function getStudents() {
    return new Promise((resolve) => {
      resolve(students);
    });
  }
  
  // Calling the function to get the student data
  getStudents()
    .then((data) => {
      console.log(data);
    });
 
   

