// innerHTML task

// task 1
let info = document.getElementById("info")
info.innerHTML = `<h2> task 1</h2>
<strong> welcome to javascript</strong>` 

console.log(info)

// task 2
let info1 = document.getElementById("info1")
info1.classList = `<h2> task 2 </h2>
<strong>i love javascript</strong>`
console.log(info1)

// task 3
let container = document.getElementById("container")
container.innerHTML = `<h2> task 3</h2>
<h2> MY FIRST HEADING</h2>`
console.log("container")
// task 4
let message = document.getElementById("message")
message.innerHTML = `<h2> task 4 </h2>
<em> learning javaScript</em>`

// task 5
let list = document.getElementById("list")
list.innerHTML = `<h2> task 5 </h2>
<ul>
<li>HTML</li>
<li>css</li>
<li>javascript</li>
</ul>`

// task 6
let contant = document.getElementById("contant")
contant.innerHTML = `<h2> task 6 </h2>
                    <h2>About me</h2>
                    <p> i am learning web devlopment</p>
                    <strong> pratice Every Day </strong>`

                    
// task 7
 let new1 = document.getElementById("new")
new1.innerHTML = `<h2> task 7 </h2>
                   <h2> new title </h2>
                   <p> new contant</p>`

// task 8

let student = {
    name: "Rahul",
    course: "JavaScript",
    city: "Pune"
};
let student1 = document.getElementById("student")
student1.innerHTML = `<h2> task 8 </h2>
                      <h2>${student.name}</h2>
                      <p> ${student.course}</p
                      <p> ${student.city}</p>
`
// task 9
let Apple ={
    name:"Apple 17 pro",
    price:"80,000",
    brand:"Apple"
};
let brand1 = document.getElementById("brand")
brand1.innerHTML = `<h2> task 9 </h2>
                    <h3> ${Apple.name}</h3>
                    <p> ${Apple.price}</p>
                    <p> ${Apple.brand}</p>`


 // task 10
// - fname
// - lname
// - role
// // - email 
 let personDetail ={
    fname:"rishita",
    lname:"kadam",
    role:"frontend Developer",
    email:"abc@gmail.com",


 };
 let person = document.getElementById("person")
 person.innerHTML = `<h2> task 10 </h2>
                      <div>
                      <strong>Employee profile

                      <h3>${personDetail.fname} ${personDetail.lname}</h3>
                      <p>${personDetail.role}</p>
                      <p> ${personDetail.email}</p>
        
                      </div>`         


// innerText task

// task 1
let hello=document.getElementById("hello")
hello.innerText = "Welcome to javaScript ";

// task 2
let msg = document.getElementById("msg")
msg.innerText = "I love javascript";

// task 3
let demo = document.getElementById("demo")
demo.innerText ="<strong> hello javaScript</strong>"


// task 4
let DOM = document.getElementById("DOM");
console.log(DOM.innerText)

// task 5
let old = document.getElementById("old")
old.innerText="new world"

// task 6
let detail = document.getElementById("detail")
detail.innerText = `Name:Rahul
                    course:Augular`

// task 7
let a = 20;
let b = 25;

let sum = a + b;

let result = document.getElementById("result");

result.innerText = "Result: " + sum;

// task 8
let status = document.getElementById("status");;
status.innerText="completed"

// task 9
let data = document.getElementById("data")
data.innerText = `Name:Rahul
                  course : javaScript
                  city:pune`

// task 10
let dom= document.getElementById("dom")
dom.innerText = `i love BootStrap`  


// classlist task

// 1
let add1 = document.getElementById("add1");

add1.classList.add("active");

console.log(add1.classList);

// 2
let para = document.getElementById("con");
para.classList.add("box","container")
para.classList.remove("box")
console.log(para.classList)

// 3
let title = document.getElementById("title")
title.classList.add("heading")
title.classList.remove("ing")
console.log(title.classList)

// 4
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");

para1.classList.add("text");
para2.classList.add("text");

console.log(para1.classList);
console.log(para2.classList);

// 5
let Dom = document.getElementById("do")
Dom.classList.add("todo","work")
Dom.classList.remove("work")
console.log(Dom.classList)

// 6
let boot = document.getElementById("boot")
boot.classList.add("alert-success")
boot.classList.remove("alert")
console.log(boot.classList)
// 7
let fullname = document.getElementById("fullname")
fullname.classList.add("riya-jhadav")
fullname.classList.remove("riya")
console.log(fullname.classList)

// 8
let name = document.getElementById("name")
name.classList.add("rishita")
console.log(name.classList)

// 9
let rollno = document.getElementById("rollno")
rollno.classList.add("23","24","25")
rollno.classList.remove("24")
console.log(rollno.classList)

// 10
let course = document.getElementById("course");
course.classList.add("html","css","java");
course.classList.remove("html","java");
console.log(course.classList)



