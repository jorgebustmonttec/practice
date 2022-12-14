let homePoints=document.getElementById("home-points-el")
let guestPoints=document.getElementById("guest-points-el")
let homePointsLocal=0;
let guestPointsLocal=0;

function test(team,points){
    console.log("click")
    let teamf=team;
    if(team==0){
        homePointsLocal+=points;
        homePoints.innerText=homePointsLocal
    }
    if(team==1){
        guestPointsLocal+=points;
        guestPoints.innerText=guestPointsLocal
    }

    console.log(points)


}


function reset(){
    console.log("reset")
    homePointsLocal=0;
    guestPointsLocal=0;
    homePoints.innerText=homePointsLocal;
    guestPoints.innerText=guestPointsLocal;
}