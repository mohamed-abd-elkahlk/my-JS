// ! IF CONDTION AND HIS ABBREVATION !//
// let t = true;
// let f = false;

// if (f) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// f ? console.log("true") : console.log("false");

// let x = 1;

// if (f) {
//   console.log("true");
// } else if (f) {
//   console.log("1");
// } else {
//   console.log("false");
// }

// f ? console.log("false") : f ?console.log("true"): console.log("1")

// ! IF CONDTION AND HIS ABBREVATION !//

/////////////////////////////////////////////////////////////////////////////////////////////////////

// //! SWITCH CASESS! //
// let x = 3;
// switch (x) {

//   case 0:
//     console.log("0");
//     break;

//   case 1:
//     console.log("1");
//     break;

//   default:
//     console.log("defult");
// }
// //! SWITCH CASESS !// //

/////////////////////////////////////////////////////////////////////////////////////////////////////

// //! ARRAY DEFINITION AND METHODS!// //

//? ADD AND REMOVE FROM THE ARRAY ?//

// const array = [1,2,3,4,5,6,7,8,9]

// console.log(array.length)//*length method  to make you now how many numbers of elements in the array *//

// array.unshift("one")//* unshift method add element to the firs of arry*//
// console.log(array)

// array.push("ten")//* push method add element to the end of arry*//
// console.log(array)

// array.shift("one")//* shift method remove first element from array*//
// console.log(array)

// array.pop("ten")//* pop method remove last element from array*//
// console.log(array)

//? ADD AND REMOVE FROM THE ARRAY ?//

//? SEARCH ELEMENTS FROM THE ARRAY ?//

// let array = [1,2,3,4,2,3]

// console.log(array.indexOf(2))//*indexOf method looking for element on the array //search from start *//
// console.log(array.indexOf(3,2))//*syntex of indexOf(serach element,from index => optional) defult = 0 *//

// console.log(array.lastIndexOf(2))//*indexOf method looking for element on the array //search from end *//
// console.log(array.lastIndexOf(3,2))//*syntex of indexOf(serach element,from index => optional) defult = 0 *//

// console.log(array.includes(2))//* includes method return true if the element exixsts*//

//? SEARCH ELEMENTS FROM THE ARRAY ?//

//? SORT ARRAY ?//

// let array = [1,2,-3,-20,"mohamed","osamed","ibrahem",50.-4000,41]

// console.log(array.sort())//* sort array by alphabit*//

// console.log(array.reverse())//* reverse sort  array but opsite sort => make start at the end and the end start*//

//? SORT ARRAY ?//

//? SLICING ?//

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// console.log(array.slice())//*slice method syntex slice(start[opt],end[opt]) return new array*//
// console.log(array.slice(2))
// console.log(array.slice(2,5))
// console.log(array.slice(-2))
// console.log(array.slice(2,-3))
// console.log(array.slice(-7,-2))

// array.splice(0,0,0)//*splise method syntex splice(start [opt],deletecount[0 to no remove][opt],itmes to add[opt])*//
// console.log(array) //*make change to array*//

// array.splice(0,2)
// console.log(array)

//? SLICING ?//

//? JOIN ARRAY?//

// let bestFrind = ["ahmed"];
// let schoolFrind = ["osama", "mahamed"];

// let allFrinds = bestFrind.concat(schoolFrind); //* concat method return new array after joning them *//
// console.log(allFrinds);

//? JOIN ARRAY?//

// //! ARRAY DEFINITION AND METHODS!// //

/////////////////////////////////////////////////////////////////////////////////////////////////////

// //! LOOP WITH FOR !// //

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let array = ["mohamed", "ahmed", 5, "abd_elrhaman", 484, "matrix", "osame", 45];
// let names = [];

// for (let i = 0; i < array.length ; i++) {
//   if (typeof array[i] === "string") {
//     names.push(array[i]);
//   }
// }

// mainloop:for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === "number") {
//     continue;// braek;
//   }
//   console.log(array[i]);
// }

// //! LOOP WITH WHILE !// //

// let array = ["mohamed", "ahmed", 5, "abd_elrhaman", 484, "matrix", "osame", 45];

// let i = 0;
// while ((i = 10)) {
//   console.log(i);
//   i++;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// //! FUNCTIONS !// //

// function sayHello(name, age) {
//   //   if (age === undefined) {
//   //     age="unknown"
//   //   }
//   age = age || "unknown";
//   return `hallo ${name} your age is ${age}`;
// }
// console.log(sayHello("mohamed", 19));
//? rest functions ?//

// function calc(...num) {
//   let res = 0;
//   for (let i = 0; i < num.length; i++) {
//     res+=num[i];
//   }
//   console.log(res);
//   return `your final result is ${res}`;
// }
// console.log(calc(1, 2, 3))

//? anonmous functions ?//

// let res=0
// let calc = function (...num){
//     for(let i =0 ; i < num.length; i++) {
//         res+=num[i];
//     }
//     return res;
// }
// console.log(calc(1, 2, 3));

//? nasdted functions ?//

// function sayHello(Fname, Lname) {
//   massege = `hallo`;
//   function concatenat() {
//     massege = `${massege} ${Fname} ${Lname}`;
//   }
//   concatenat();
//   return massege;
// }
// console.log(sayHello("mohamed", "ahmed"));

// function sayHello2(Fname, Lname) {
//   massege = `hallo`;
//   function concatenat() {
//     massege = `${massege} ${Fname} ${Lname}`;
//   }
//   return concatenat();
// }
// console.log(sayHello("mohamed", "ahmed"));

//? arrow funcations ?//

// let fun = () => 10; //*  arrow function syntex if you have on satament one line of code*//
// console.log(fun());

// let fun1 = _ => 10;
// console.log(fun());

// let fun2 = () => {
//   return 10;
// };
// console.log(fun1());

// let fun = (num)=>{
//     return num*2;
// }
// console.log(fun(10))

// let fun = (...num) => {
//   let res = 0;
//   for (let i = 0; i < num.length; i++) {
//     res += num[i];
//   }
//   return `your final result is ${res}`;
// };
// console.log(fun(1, 2, 3));

// //! FUNCTIONS !// //

// //! HIGHER ORDER FUNCTIONS !// //

//? map array (method/funcation) ?//

// let num = [1, 2, 3, 4, 5, 6];
// let newArray = [];

// let addSelf = num.map(function (element, index, array) {
//     console.log(`this is ele ${element}`)
//     console.log(`this is index ${index}`)
//     console.log(`this is arr ${array}`)
//     console.log(`this ${this}`)
//     return element + element
// }, 10);
// console.log(addSelf)

// let addSelf = num.map((element) => element + element, 10);//*map retrun new array *//
// console.log(addSelf);

// function addtion(ele){
//     return ele + ele
// }

// let add = num.map(addtion);
// console.log(add)

//? filter array (method/funcation) ?//

// let num = [1, 2, 3, 4, 5, 6];

// let evenNum = num.filter((e)=>{
//     return (e % 2) === 0;
// })
// console.log(evenNum)

// let frind = [
//   "ahmed",
//   "mohamed",
//   "adel",
//   "ehab",
//   "adham",
//   "mahmoud",
//   "mona",
//   "ibrhaim",
// ];
// let addFilter = frind.filter((e) => {
//   return e.startsWith("m");
// });
// console.log(addFilter);
//*filter retrun new array and make condtion *//

//? reduce array (method/funcation) ?//

// let num = [10, 20, 15, 30];

// let sum = num.reduce((acc, current, index, arr) => {
//   //*accrtion that first element value that sumed *//
//   console.log(`this is first after it's sumed ele ${acc}`);
//   console.log(`this is scond ele ${current}`);
//   console.log(`this is index${index}`);
//   console.log(`this is arr ${arr}`);
//   return acc + current;
// }, 5); //*first value to make the argument *//
// console.log(sum);

//? foreach array (method/funcation) ?//

// //! HIGHER ORDER FUNCTIONS !// //

// //!  OBJECT !// //

// let user = {
//   //* property *//
//   name: "mohamed",
//   age: 19,
//   //* methods *//
//   sayHallo: () => {
//     return "Hallo";
//   },
// };

// console.log(user.sayHallo());
// console.log(user.name);
// console.log(user.age);

// let user = new Object({
//     age:20
// });

// user.name = "mohamed";
// user.age = 19;
// user["contry"] = "Egypt";
// user.sayHallo = () => {
//   return "Hallo";
// };

// let test = {
//   name: "mohamed",
//   age: 19,
//   duobleAge: () => {
//     //? Whem it's arrow function in object it return window ?//
//     return this;
//   },
// };

// let user = {
//   name: "mohamed",
//   age: 19,
//   duobleAge: function () {
//     //? When it's anonemus Function in object this  return obj ?//
//     return this.age * 2;
//   },
// };

// console.log(user.duobleAge());

// let obj = Object.create(user);
// obj.age = 20;

// console.log(obj.duobleAge());

// console.log(user);

// let oneObj = {
//   name: "ahmed",
// };

// let towObj = {
//   age: 20,
// };

// let threeObj = Object.create(towObj);

// threeObj.ShowAge = function () {
//   return this.age;
// };

// console.log(threeObj.ShowAge());

// let obj = Object.assign(threeObj, oneObj, towObj); //? if you don't have targret object you can type {} to targret input?//
// console.log(obj);

// let objtow = Object.assign({}, oneObj, towObj, {
//   ShowAge: function () {
//     return this.age;
//   },
// }); //? if you don't have targret object you can type {} to targret input?//
// console.log(objtow);
// console.log(objtow.ShowAge());

// //!  OBJECT !// //

// //! D O M !// //

// let IdElment = document.getElementById("my-div"); //* select elmetnt by ID *//

// console.log(IdElment);

// let TagElment = document.getElementsByTagName("p"); //* select elmetnt by tagname *//

// console.log(TagElment[1]);

// let classNameElment = document.getElementsByClassName("my-span"); //* select elmetnt by className *//

// console.log(classNameElment[0]);

// let qurryElement = document.querySelector(".active"); //* select elmetnt by any thing *//

// console.log(qurryElement);

// console.log(document.title)

// console.log(document.forms)

// //! D O M  EVENTS !// //

// let btn = document.getElementById("btn");

// btn.onclick = function () {//* Event onclick *//
//   console.log("cliked");
// };

// btn.onmouseenter = function () {//* Event onmouseenter *//
//   console.log("onmouseenter");
// };

// btn.onmouseleave = function () {//* Event onmouseleave *//
//   console.log("onmouseleave");
// };

// let input = document.getElementById("input");

// input.onfocus = function () {//* Event onfocus *//
//   console.log("onfocus");
// };

// input.onblur = function () {//* Event  onbluer *//
//   console.log("onblur");
// };

// input.onsubmit = function () {//* Event onsubmit *//
//   console.log("onsubmit");
// };

// window.onscroll = function () { //* Event window scroll *//
//   console.log("hi");
// };

// window.onresize = function () {//* Event window resize *//
//   console.log("onresize");
// };
// let input = document.querySelector('[type="username"]');

// console.log(input);

// document.links[0].onmouseenter = (e) => {//* Event onmouseenter *//
//   console.log(e);
// };

// document.links[0].onclick = (e) => {//* Event onclick *//
//   console.log(e);
//   e.preventDefault();
// };

// document.forms[0].onsubmit = (e) => { //* Event onsubmit *//
//   let userVla = false;
//   let agerVla = false;

//   if (userVla === false || agerVla === false) {
//     e.preventDefault();
//     if (input.value.length < 10) {
//       console.log("valid");
//   e.preventDefault(); //* Event preventDefault to disble submit *//
//     } else {
//       console.log("invalid");
//     }
//   }
// };

// let one = document.querySelector(".one");
// let tow = document.querySelector(".tow");
// window.onload = () => {
//   one.focus();//* Event focus *//
// };
// one.onblur = () => {//* Event blur *//
//   tow.focus();
// };

//? class list mithod ?//

// let ele = document.getElementById("my-div");

// console.log(ele.classList);
// console.log(ele.classList.contains("mo"));
// console.log(ele.classList.contains("show"));
// console.log(ele.classList.item("0"));

// ele.onmouseenter = function () {
//   this.classList.add("div-one", "div-tow");
// };

// ele.onclick = ()=>{
//     ele.classList.add("div-one", "div-tow")
// }

// ele.onclick = function () {
//   this.classList.remove("div-one", "div-tow");
// };

// ele.onclick = function () {
//   this.classList.toggle("osama");
// };

//? css style  ?//

// ele.style.color = "red";
// ele.style.cssText = "font-weight:bold; color:green;";

// ele.style.removeProperty("color")
// ele.style.setProperty("font-size","40px")

//? Deal with elements  ?//

// let ele = document.getElementById("my-div");
// let p = document.createElement("p");

// ele.before("hi from js befroe ele");
// ele.after("hi from js after");
// ele.after(p);

// ele.append(" after");
// ele.prepend("before ");

// ele.remove();

//? Add Event lestiner  ?//

// let ele = document.getElementById("my-div");

// ele.addEventListener("click",function(e){
//     console.log(e.target)
// })

// //! LOCAL  STORGE !// //

// window.localStorage.setItem("color", "red");
// window.localStorage.fontwight = "bold";
// window.localStorage["fontsize"] = "bold";
//* get item *//
// window.localStorage.getItem("color");
// window.localStorage.fontwight;
// window.localStorage["fontsize"];
//* remove one key *//
// window.localStorage.removeItem("color");
//* remove all key *//
// window.localStorage.clear();
//* get key *//
// window.localStorage.key(1);

// let sapn = document.querySelectorAll("span");
// let div = document.querySelector(".a");

// if (window.localStorage.getItem("color")) {
//   // console.log("hi")
//   div.style.backgroundColor = window.localStorage.getItem("color");
//   sapn.forEach((span) => {
//     span.classList.remove("active");
//   });
// } else {
//   console.log("bye");
// }

// // document.body.style.backgroundColor =

// sapn.forEach((span) => {
//   span.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     sapn.forEach((span) => {
//       span.classList.remove("active");
//       e.target.classList.add("active");
//       window.localStorage.setItem("color", e.target.dataset.color);
//     });
//     if (window.localStorage.getItem("color")) {
//       // console.log("hi")
//       div.style.backgroundColor = window.localStorage.getItem("color");
//       sapn.forEach((span) => {
//         span.classList.remove("active");
//       });
//     //   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`.classList.add("active")) //error
//     }
//   });
// });
// //! LOCAL  STORGE !// //

// //! REDULAR  EXPRESSION !// //

// let str = "hallo elzero mohamd gd4 ElzEro"

// let re = /elzero/ig

// console.log(str.match(re)) //* (i) means no keys sensteve (g)means get all of matches patern *//
// //? match return new array ?// //

// let val = "org net com code io";

// let re = /(org|io|com)/gi; //* (org|io|com) => means or  *//
// console.log(val.match(re));

// let num = "123456789";

// let renum = /[0-4]/g; //* [0-4] => means from 0 to 4  *//
// console.log(num.match(renum));

// let NOrenum = /[^0-4]/g; //* [^0-4] => means anything else from 0 to 4  *//
// console.log(num.match(NOrenum));

// let chr = "abcdefghigklmnobq41651&Y(&(*UKGKVJFAfsdgsd";

// let rechr = /[^a-z]^0-9[^0-9]/g;
// console.log(chr.match(rechr));

// let emails = "osfasf@@@g....com #gse@g.net o-g@f.e 1@1.net mohamed@gmil.com";
// let chrpatern = /\w/g; //? \w mean evry wordchr and number not contain spcial chr ?//
// let notChrPatern = /\W/g; //? \W mean not evry wordchr and number not contain spcial chr ?//

// let validEmail = /\w+@\w+.(com|net)/gi; //? + => one or more *=> zero or more ? => zero or one ?//
// console.log(emails.match(validEmail)); //? {4}=> number of {4,1}=> range {4,}=> at lest 4 or more ?//

// let spam = "1spam pam mspam panm SPAM";
// let valOne = /(\bspam|spam\b)/gi;

// console.log(valOne.test(spam)); //? test return boolan value ?//

// //? lz$ =>end with lz,  we^ =>Start with we , (?= w)=>folow with w (?!w) not followed with w ?//

// let hallo = "i love @ and @";

// console.log(hallo.replace("@","java"))
// console.log(hallo.replaceAll("@","java"))

// //! REDULAR  EXPRESSION !// //

// //! J S O N !// //

// let jsonFromServer = '{"username":"ahmed","age":18}';
// console.log(jsonFromServer);

// let json = JSON.parse(jsonFromServer); //? parse method convert JSON to js object ?//
// console.log(json);

// json["username"] = "mohamed";
// json.age = 19;

// let jsonToServer = JSON.stringify(json);
// console.log(jsonToServer);

// let smal = document.querySelector("small");
// smal.innerHTML = json.username;

// fetch("data.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// //! J S O N LOOP ON DATA !// //

//* loop on data with XMLHttpRequest *//

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/elzerowebschool/repos", true); //? username and password if there was ?//
// req.send();
// console.log(req);
// req.onreadystatechange = function () {
//   //   console.log(req.status);
//   //   console.log(req.readyState);
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let json = JSON.parse(req.responseText);
//     for (let i = 0; i < json.length; i++) {
//       let div = document.createElement("p");
//       div.innerHTML = json[i].full_name;
//       document.body.append(div);
//     }
//   }
// };
//* loop on data with XMLHttpRequest *//

//* promises *//

// const pro = new Promise((resolve,reject)=>{
//     let conect =false
//     if(conect){
//         resolve("connection done")
//     }else{
//         reject("conction lost")
//     }
// })

// pro.then(
//     (resolveValue)=>console.log(`good ${resolveValue}`),
//     (rejectValue)=>console.log(`bad ${rejectValue}`)
// )
//* loop on data with XMLHttpRequest *// //* promises *//

// const get = function (apiLink) {
//   return new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//     req.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(req.responseText));
//       } else {
//         reject(Error("eroor"));
//       }
//     };
//     req.open("GET",apiLink)
//     req.send()
//   });
// };

// get("https://api.github.com/users/elzerowebschool/repos").then((result)=>{
//     result.length = 10
//     return result
// })

//* loop on data with XMLHttpRequest *// //* promises *//

//? FETCH METHOD  ?//

fetch("data.json")
  .then((response) => response.json())
  .then((json) => console.log(json[0].day));

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// //! J S O N !// //
