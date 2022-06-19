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

        } 
        )
    }
  



}


