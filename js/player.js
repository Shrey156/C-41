class Player{
constructor(){

this.name = null;
this.index = null;
this.distance = 0;
this.rank = null;

}
 
getCount(){
var playerCountRef = database.ref('playerCount');
playerCountRef.on("value",function(data){
playerCount = data.val();
})
}

updateCount(count){
database.ref('/').update({
    playerCount:count
})
}

update(){
    
var playerIndex = "players/player " + this.index;

database.ref(playerIndex).set({
    name : this.name,
    distance : this.distance
}) 
}

/*static function :/static function are never called by the object of the class,because the function contains
data about all the object of the class.Only a class a can called the static function */
static getPlayerInfo(){

var playerInfoRef = database.ref('players')
playerInfoRef.on("value",(data)=>{
allPlayers = data.val();
})
}

getCarsAtEnd(){
database.ref('carsAtEnd').on("value",(data)=>{
    this.rank=data.val();
})
}

static updateCarsAtEnd(rank){
database.ref('/').update({
    carsAtEnd:rank
})
}
}