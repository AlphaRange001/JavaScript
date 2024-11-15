//  ..................1st & 2nd question...................
class complex{
    comple(real,imaginary){
        this.real=real
        this.imaginary=imaginary
        console.log(`${this.real}+i${this.imaginary}`)
    }
    add(num){
        this.real=this.real+num.real
        this.imaginary=this.imaginary+num.imaginary
    }
}
let a=new complex()
a.comple(2,2)
let b=new complex()
b.comple(2,2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`)

// ..................4thnd and 2nd Question...AbortController.............

// class human{
//     constructor(){
//         console.log("helo")
//     }
// }
// class student extends human{
//     constructor(){
//         super()
//         console.log("bello")
//     }
// }
// let b=new student()
// console.log(b instanceof human)


// .....................5th...........

// class Human {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }

//     get name() {
//         return `${this.real} ${this.imaginary}`; // Return as a single string or other format
//     }

//     set name(newValue) {
//         const [real, imaginary] = newValue.split(' ');
//         this.real = real;
//         this.imaginary = imaginary;
//     }
// }

let person = new Human('John', 'Doe');
console.log(person.name); // Output: John Doe

person.name = 'Jane Smith';
console.log(person.name); // Output: Jane Smith
console.log(person.real); // Output: Jane
console.log(person.imaginary); // Output: Smith
