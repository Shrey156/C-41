class Gamestate{
constructor(){

}
//this function is for reading from database
getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState = data.val();
})
}
//getState is updated by update function
update(state){
database.ref('/').update({
    gameState:state
});
}

/*async function means we need to wait for certain instruction inside the function to finish.we put await
in this instruction(this is called as promised base behaviour)*/ 
async start(){
if(gameState===0){
player = new Player();

var playerCountRef=await database.ref('playerCount').once("value");

if(playerCountRef.exists){
playerCount = playerCountRef.val();
player.getCount();
}

form = new Form();
form.display();
} 

car1 =createSprite(100,200,10,10); 
car2 =createSprite(300,200,10,10); 
car3 =createSprite(500,200,10,10); 
car4 =createSprite(700,200,10,10); 
cars = [car1,car2,car3,car4];
car1.addImage(carImg1);
car2.addImage(carImg2);
car3.addImage(carImg3);
car4.addImage(carImg4);

}

play(){


    form.hide();
    text("Game Start",200,250);
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers!==undefined){
background(groundImg);
image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*6)
        
var index = 0;
//this is the index of the array
var x = 200;
var y;
//plr is a counter 
        for(var plr in allPlayers){
            //add 1 to the index 
            index = index + 1;
            //position a car a little away from each other
            x = x+200;
            //for  y use data from data base
            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;


            if(index===player.index){
            stroke(10)
            fill("red")
            ellipse(x,y,60,60);
            //cars[index-1].shapeColor = "red";

            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
            }
        }
    }
    
    if(keyWentDown(UP_ARROW) && (player.index!== null)){
        player.distance = player.distance + 20;
        player.update();
        }
        if(player.distance>3740){
        gameState = 2;
        player.rank = player.rank +1;
        Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
        }

end(){
 console.log("end");
 console.log(player.rank);
     }
}

