

const player1 = "X"
const player2 = "O"
var play=player1;
var gameover=false;

iniciaSpaces();




function iniciaSpaces(){
    var spaces =document.getElementsByClassName("space");

    for(var i=0;i<spaces.length;i++){
        spaces[i].addEventListener("click", function (){
            if(gameover){
                return;
            }
            if(this.getElementsByTagName("img").length==0){
               if(play==player1){
                   this.innerHTML="<img src='imagens/X.svg'>";
                   this.setAttribute("play",player1);
                   play=player2;
               }else{
                   this.innerHTML="<img src='imagens/O.svg'>";
                     this.setAttribute("play",player2);
                   play=player1;
               }
            } 
            verificaVencedor();
        } 
        )
    }

}

function verificaVencedor(){
 
    var a1=document.getElementById("a1").getAttribute("play"); 
    var a2=document.getElementById("a2").getAttribute("play");
    var a3=document.getElementById("a3").getAttribute("play");

    var b1=document.getElementById("b1").getAttribute("play");
    var b2=document.getElementById("b2").getAttribute("play");
    var b3=document.getElementById("b3").getAttribute("play");

    var c1=document.getElementById("c1").getAttribute("play");
    var c2=document.getElementById("c2").getAttribute("play");
    var c3=document.getElementById("c3").getAttribute("play");

    var vencedor="";

        if((a1==a2&&a1==a3&&a1!="")||(a1==b1&&a1==c1&&a1!="")||(a1==b2&&a1==c3 && a1!="")){
            vencedor=a1;
        }else if((b2==b1&&b2==b3&&b2!="")||(b2==a2&&b2==c2&&b2!="")||(b2==a3&&b2==c1&&b2!="")){
            vencedor=b2;
        }else if((c3==c1&&c3==c2&&c3!="")||(c3==b3&&c3==a3&&c3!="")){
            vencedor=c3;
        }
    if(vencedor=="X"){
        Swal.fire("the winner is "+"<img src='imagens/X.svg'>")
        gameover=true;
        return;
    }   else if(vencedor=="O"){
        Swal.fire("The winner is "+"<img src='imagens/O.svg'>")
        gameover=true;
        return;
    }

    var spaces =document.getElementsByClassName("space");
    var cont=0;
    for(var i=0;i<spaces.length;i++){
        if(spaces[i].getAttribute("play")==""){
            cont=1;
        }
       
    }
    if(cont==0){
        Swal.fire("Draw");
        gameover=true;
    }

}


function restart(){
   var restarts=document.getElementById("restartgame");
    restarts.addEventListener("click", function (){
    var spaces =document.getElementsByClassName("space");
    for(var i=0;i<spaces.length;i++){
        spaces[i].innerHTML="";
        spaces[i].setAttribute("play","");
    }
    gameover=false;
    play=player1;
});
}










