let x = document.querySelector("h1");

let a = document.querySelector("#plus");

let b = document.querySelector("#minus");

let c = document.querySelector("#reset");

a.addEventListener("click",function(){
    
 let y=parseInt(x.innerHTML)
 x.innerHTML=y + 1;
 if (x.innerHTML % 2 == 0){
    x.style.backgroundColor="green";
 }else{
    x.style.backgroundColor="red";
 }
 if (y == 10)
     x.innerHTML = 10
})

b.addEventListener("click",function(){
    
    let z=parseInt( x.innerHTML);
    x.innerHTML= z-1;
if (x.innerHTML % 2 ==0){
    x.style.backgroundColor="green"
}else{
    x.style.backgroundColor="red"
}
if ( z==0){
    x.innerHTML= 0
}
    
})

c.addEventListener("click", function(){
    x.innerHTML= 0
})

