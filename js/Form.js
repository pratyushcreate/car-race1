class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h3');
        title.html("car racing game");
        title.position(130,0);
       
        this.input.position(130,160);
        this.button.position(250,200);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update(name);
            player.updateCount(playerCount);
            this.greeting.html("hello"+player.name);
            this.greeting.position(130,160);

                
        });
    }

}