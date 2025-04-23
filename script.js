
// class Person{
//     constructor(name,age){
//     // person1.call(this,name)
//     this.name=name
//      console.log(`my name is ${this.name}`);    
//     }
   
// }
// Person.prototype.person1=function(){
//     console.log(`also my name is ${this.name}`);
// }

// const obj=new Person("raj","18")
// const obj2=new Person("deep","18")
// obj.person1()
// obj2.person1()


// const myArr=[1,2,3,4]

// Array.prototype.newProto=function(){
//     sum=0
//     this.forEach(function(num){
//         sum+=num;
//     })
//     console.log(sum);
// }
// myArr.newProto()


// class Person{
//     nam="rajsingh"
//     constructor(name,age){
//         this.name=name
//         console.log(`my name is ${this.name}`);
//     }
// }
// const obj=new Person('raj',19)
// Object.prototype.username=function(){
//     console.log(`also this is ${this.nam}`);
// }
// console.log(obj);


const fruits=new Map()

fruits.set('apples',500)
fruits.set('mango',400)
fruits.set('bananas',600)
console.log(fruits.size);

console.log(fruits);



// for(const [key,value] of fruits){
//     console.log(`the key is ${key} and value is : ${value}`)
// }
for(const x of fruits.entries()){
    console.log(x)
}
for(const x of fruits.keys()){
    console.log(x)
}

for(const x of fruits.values()){
    console.log(x)
}



fruits.forEach(function(value,key) {
    console.log(`the key is ${key} and value is ${value}`);
    
})

console.log(fruits.entries())
console.log(typeof fruits.entries())

console.log( fruits.keys());
console.log(fruits.values());


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




const cours= {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

let{coursename,price}=cours

console.log(coursename);

