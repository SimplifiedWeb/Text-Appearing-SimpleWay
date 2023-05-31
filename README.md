# Text-Appearing-SimpleWay
I develope the text appearing project. It's simple let me explain the logic. So you can implement in your different projects.

So this is a simple project,Text appearing.

So for example, I provided this code in the file let me explain it,
const heading = "Harry Styles";
const head = document.getElementById("heading");
let start = 0;
function appear(){
    head.innerText = heading.slice(0,start);
    start++;
}
setInterval(appear,150)

so simple in this, we iterate each letter one by one by 150 milisecond. By iterating means we are calling our function each time by
150 miliseconds using setInterval. and Each time the function give a letter. slice(0, start) means each time we get a letter starting from
0 and then incrementing the start++. So always remember we are talking about the index. so if the start was 3 then we are talking about
the third index whatever the charachter was should return. it gives charachter by index.

for all the other one the same logic will apply we have to start from 0 and increment it and set it by index using slice method.

And also if you're in desktop hover the text appearing div, it get's expand so you can see better picture of it.

So for all the text we can Apply this logic to achive our desired Goals.

Hope this helps.
