//alert("It works!");
let servblock1 = document.getElementById("s1");
let hed1 = document.getElementById("1h");
let pic1 = document.getElementById("1p");
let ul1 =  document.getElementById("1ul");

let servblock2 = document.getElementById("s2");
let hed2 = document.getElementById("2h");
let pic2 = document.getElementById("2p");
let ul2 =  document.getElementById("2ul"); 

let servblock3 = document.getElementById("s3");
let hed3 = document.getElementById("3h");
let pic3 = document.getElementById("3p"); 
let ul3 =  document.getElementById("3ul");

let servblock4 = document.getElementById("s4");
let hed4 = document.getElementById("4h");
let pic4 = document.getElementById("4p"); 
let ul4_1 =  document.getElementById("4_1ul");
let ul4_2 =  document.getElementById("4_2ul");

let servblock5 = document.getElementById("s5");
let hed5 = document.getElementById("5h");
let pic5 = document.getElementById("5p");
let par5 =  document.getElementById("5par");
let but5 = document.getElementById("bb");

servblock1.onmouseover = function(){
    hed1.style.color = "white";
    hed1.style.transition="0.2s";
    servblock1.style.backgroundColor="black";
    servblock1.style.transition="0.2s";
    ul1.style.color="white";
    ul1.style.transition="0.2s";
    pic1.style.visibility="visible";
}
servblock1.onmouseout = function(){
    hed1.style.color = "black";
    hed1.style.transition="0.2s";
    servblock1.style.backgroundColor="whitesmoke";
    servblock1.style.transition="0.2s";
    ul1.style.color="gray";
    ul1.style.transition="0.2s";
    pic1.style.visibility="hidden";
}

servblock2.onmouseover = function(){
    hed2.style.color = "white";
    hed2.style.transition="0.2s";
    servblock2.style.backgroundColor="black";
    servblock2.style.transition="0.2s";
    ul2.style.color="white";
    ul2.style.transition="0.2s";
    pic2.style.visibility="visible";
}
servblock2.onmouseout = function(){
    hed2.style.color = "black";
    hed2.style.transition="0.2s";
    servblock2.style.backgroundColor="whitesmoke";
    servblock2.style.transition="0.2s";
    ul2.style.color="gray";
    ul2.style.transition="0.2s";
    pic2.style.visibility="hidden";
}

servblock3.onmouseover = function(){
    hed3.style.color = "white";
    hed3.style.transition="0.2s";
    servblock3.style.backgroundColor="black";
    servblock3.style.transition="0.2s";
    ul3.style.color="white";
    ul3.style.transition="0.2s";
    pic3.style.visibility="visible";
}
servblock3.onmouseout = function(){
    hed3.style.color = "black";
    hed3.style.transition="0.2s";
    servblock3.style.backgroundColor="whitesmoke";
    servblock3.style.transition="0.2s";
    ul3.style.color="gray";
    ul3.style.transition="0.2s";
    pic3.style.visibility="hidden";
}

servblock4.onmouseover = function(){
    hed4.style.color = "white";
    hed4.style.transition="0.2s";
    servblock4.style.backgroundColor="black";
    servblock4.style.transition="0.2s";
    ul4_1.style.color="white";
    ul4_2.style.color="white";
    ul4_1.style.transition="0.2s";
    ul4_2.style.transition="0.2s";
    pic4.style.visibility="visible";
}
servblock4.onmouseout = function(){
    hed4.style.color = "black";
    hed4.style.transition="0.2s";
    servblock4.style.backgroundColor="whitesmoke";
    servblock4.style.transition="0.2s";
    ul4_1.style.color="gray";
    ul4_2.style.color="gray";
    ul4_1.style.transition="0.2s";
    ul4_2.style.transition="0.2s";
    pic4.style.visibility="hidden";
}

servblock5.onmouseover = function(){
    hed5.style.color = "white";
    hed5.style.transition="0.2s";
    servblock5.style.backgroundColor="black";
    servblock5.style.transition="0.2s";
    par5.style.color="white";
    par5.style.transition="0.2s";
    but5.style.background="white";
    but5.style.color="black";
    but5.style.transition="0.2s";
    pic5.style.visibility="visible";
}
servblock5.onmouseout = function(){
    hed5.style.color = "black";
    hed5.style.transition="0.2s";
    servblock5.style.backgroundColor="whitesmoke";
    servblock5.style.transition="0.2s";
    par5.style.color="gray";
    par5.style.transition="0.2s";
    but5.style.background="black";
    but5.style.color="white";
    but5.style.transition="0.2s";
    pic5.style.visibility="hidden";
}

let elid = document.getElementById("elps");
let move_el_at_once = setTimeout(elid.style.transform="rotate(40deg)", 0);
let moveEl = setInterval(() => elid.style.transform="rotate(-40deg)", 5000);
let moveElback = setInterval(() => elid.style.transform="rotate(40deg)", 10000);
