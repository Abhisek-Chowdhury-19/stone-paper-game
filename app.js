const choices=document.querySelectorAll(".choice");
var compoption=["Rock","Paper","Scissors"];
var winner=true;
var userscore=0;
var computerscore=0;
var tie=()=>{
    document.querySelector(".msg").innerHTML= `The Game is Tie`
    document.querySelector(".msg").style.backgroundColor="#ADA8B6";
}
var getcompc=()=>{
    var data=Math.floor(Math.random()*3);
    return compoption[data];
}
var winnercheck=(user,comp)=>{

if (user===comp) {
   tie();

}
else{
if(user=="Rock"){
    winner=(comp=="Paper")? false :true;
}
else if(user=="Paper"){
winner=(comp=="Rock")? true :false;
}
else{
winner=(comp=="Rock")? false :true;

}


if (winner) {
    document.querySelector(".msg").innerHTML= `User Win Your Choice, ${user}  Computer ${comp}`
    document.querySelector(".msg").style.backgroundColor="green";
    userscore++;
    document.querySelector(".user").innerHTML= userscore


}
else{
       document.querySelector(".msg").innerHTML= `User Win Your Choice, ${user}  Computer ${comp}`
       document.querySelector(".msg").style.backgroundColor="red";
       computerscore++;
       document.querySelector(".comp").innerHTML= computerscore;

}
}

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       var user=choice.getAttribute("id");
       var cochoice=getcompc();
       winnercheck(user,cochoice)

    })
})