
    var num = document.querySelectorAll(".alphabet").length;
    for(var i=0;i<num;i++){
        document.querySelectorAll(".alphabet")[i].addEventListener("click",handle);
    }
        function handle(){
        var sym = this.innerHTML;
        makeSound(sym.toUpperCase());
        buttonAnimation(sym)
        }
    
            document.addEventListener("keypress",function(event){
                makeSound(event.key.toUpperCase());
                buttonAnimation(event.key);
            
        });
        function makeSound(key){
            switch(key){
    case 'A':
        var audio = new Audio("sounds/apple.mp3");
        audio.play();
        break;
    case 'B':
        var audio = new Audio("sounds/ball.mp3");
        audio.play();
        break;
    
    case 'C':
        var audio = new Audio("sounds/cat.mp3");
        audio.play();
        break;
    case 'D':
        var audio= new Audio("sounds/dog.mp3");
        audio.play();
        break;
    
    case 'E':
        var audio  = new Audio("sounds/elephant.mp3")
        audio.play();
        break;
    case 'F':
        var audio = new Audio("sounds/fish.mp3");
        audio.play();
        break;
    case 'G':
        var audio = new Audio("sounds/gun.mp3");
        audio.play();
        break;
    case 'H':
            var audio = new Audio("sounds/hat.mp3");
            audio.play();
            break;
    case 'I':
        var audio = new Audio("sounds/ice.mp3");
        audio.play();
        break;
    case 'J':
        var audio = new Audio("sounds/jeep.mp3");
        audio.play();
        break;
    case 'K':
        var audio = new Audio("sounds/kite.mp3");
        audio.play();
        break;
    case 'L':
        var audio = new Audio("sounds/lamp.mp3");
        audio.play();
        break;
    case 'M':
        var audio = new Audio("sounds/monkey.mp3");
        audio.play();
        break;
    case 'N':
        var audio = new Audio("sounds/nest.mp3");
        audio.play();
        break;
    case 'O':
        var audio = new Audio("sounds/owl.mp3");
        audio.play();
        break;

    
    case 'P':
            var audio = new Audio("sounds/parrot.mp3")
            audio.play();
            break;
    case 'Q':
        var audio = new Audio("sounds/queen.mp3");
        audio.play();
        break;
    case 'R':
        var audio = new Audio("sounds/ring.mp3");
        audio.play();
        break;
    case 'S':
        var audio = new Audio("sounds/sparrow.mp3");
        audio.play();
        break;
    case 'T':
        var audio = new Audio("sounds/tiger.mp3");
        audio.play();
        break;
    case 'U':
        var audio = new Audio("sounds/umbrella.mp3");
        audio.play();
        break;
    case 'V':
        var audio = new Audio("sounds/violin.mp3");
        audio.play();
        break;
    case 'W':
        var audio = new Audio("sounds/watch.mp3");
        audio.play();
        break;
    case 'X':
        var audio = new Audio("sounds/xmas.mp3");
        audio.play();
        break;
    case 'Y':
        var audio = new Audio("sounds/yak.mp3");
        audio.play();
        break;
    case 'Z':
        var audio = new Audio("sounds/zebra.mp3");
        audio.play();
        break;

    default:
    console.log("default");                                                      
}
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
},100);
}
