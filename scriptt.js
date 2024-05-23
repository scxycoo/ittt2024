var charachter=document.getElementById( "charachter" );
var block=document.getElementById( "block" );
function jump(){
    if(charachter.classList != "animate"){
        charachter.classList.add( "animate");
    }
    
    setTimeout( function(){
        charachter.classList.remove( "animate" );

    },500)
}
var checkdead=setInterval(function(){
    var charachertop=
    parseInt(window.getComputedStyle(charachter).getPropertyValue("top"));
    var blockleft=
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if( blockleft<20 && blockleft>0 && charachertop>=130 ){
        block.style.animation="none";
        block.style.display="none";
        alert("GAME OVER!");
    }
},10)