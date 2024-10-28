// function doSomething(callback) {
//     setTimeout(() => {
//       console.log('Doing something...');
//       callback('Result from doSomething');
//     }, 1000);
//   }

//   function doSomethingElse(result, callback) {
//     setTimeout(() => {
//       console.log('Doing something else with', result);
//       callback('Result from doSomethingElse');
//     }, 1000);
//   }

//   function doMore(newResult, callback) {
//     setTimeout(() => {
//       console.log('Doing more with', newResult);
//       callback('Result from doMore');
//     }, 1000);
//   }

//   function doLastThing(finalResult, callback) {
//     setTimeout(() => {
//       console.log('Doing the last thing with', finalResult);
//       callback();
//     }, 1000);
//   }

//   // Example of callback hell
//   doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//       doMore(newResult, function(finalResult) {
//         doLastThing(finalResult, function() {
//           console.log('All done!');
//         });
//       });
//     });
//   });





// function c1(callback) {
//     console.log("1")
//     callback()
// }
// function c2(callbac) {
//     console.log("2")
//     callbac()
// }
// function c3(callba) {
//     console.log("3")
//     callba()
// }
// function c4(callb) {
//     console.log("4")
//     callb()
// }

// c1(() => {
//     c2(() => {
//         c3(() => {
//             c4(() => {
//                 console.log("the end")
//             })
//         })
//     })
// })



// let f1 = (callback1) => {
//     callback1()
//     console.log("1")
    
// }
// let f2 = (callback2) => {
//     callback2()
//     console.log("2")
// }
// let f3 = (callback3) => {
//     callback3()
//     console.log("3")


// }
// f1(() => {
//     f2(() => {
//         f3(() => {
//             console.log("the end")
//         })
//     })
// })

function doSomething(callback) {
    setTimeout(() => {
        const cheese="c"
      console.log('Doing something...',cheese);
      callback();
    }, 1000);
  }
  doSomething((value)=>{
    console.log(value)
  },)