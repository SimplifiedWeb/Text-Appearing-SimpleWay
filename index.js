const mainheading = "Text Appearing";
const mainhead = document.getElementById("mainhead");
let mainstart = 0;
function mainAppear(){
    mainhead.innerText = mainheading.slice(0,mainstart)
    mainstart++;
}
setInterval(mainAppear,150);



const heading = "Harry Styles";
const head = document.getElementById("heading");
let start = 0;
function appear(){
    head.innerText = heading.slice(0,start);
    start++;
}
setInterval(appear,150)

const letter = `Golden, golden, golden
As I open my eyes
Hold it, focus, hoping
Take me back to the light
I know you were way too bright for me
I'm hopeless, broken
So you wait for me in the sky
Browns my skin just right
You're so golden
You're so golden
I'm out of my head
And I know that you're scared
Because hearts get broken`;

const para = document.getElementById("letter");
let start1 = 0;
function appear1(){
    para.innerText = letter.slice(0,start1);
    start1++;
}

setInterval(appear1,100);

// document.getElementById(
//     function first(){
//         console.log('hello')
//         function second(){
//             console.log("world")
//         }
//         const person = {
//             first: "fazi",
//             lastname : "shaikh",
//         }
//         console.log("Hello world")

//         class animal{
//             constructor(name,age,color) {
//                 this.name = name;
//                 this.age = age;
//                 this.color = color;
//             }

//         }
//     }

// )


