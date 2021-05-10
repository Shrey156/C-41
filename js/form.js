class Form{
    constructor(){
        this.title =createElement('h2');
        this.input =createInput("Name");
        this.button = createButton('Play');
        this.reset = createButton('Reset');
        this.greeting =createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(displayWidth/2-50,0);
    
        this.input.position(displayWidth/2-40,displayHeight/2-80);
      
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.reset.position(displayWidth-100,20)

        this.button.mousePressed(()=>{
        player.name =this.input.value();
        this.input.hide();
        this.button.hide();

        playerCount = playerCount + 1;
        player.index=playerCount;
        
        player.updateCount(playerCount);
        player.update();
           
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);

        });

        this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        Player.updateCarsAtEnd(0);
        });
        
        
    }
}