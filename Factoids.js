var tips= [
    "Many students at the academy used to go on to become anti-mages. A sort of secret police specializing in appreheanding magical scoundrels",
    "Peter Mason was the previous librarian, he was a military officer and a high-ranking tranlator before becoming librarian","The thick oak forest around the library makes anyone who ventures into it feel like they are having difficulties breathing",
    "Lazarix always wears long black coats or cloaks",
    "Lazarix favors the axe",
    "Oleg can't seem to beat a brain in a jar at chess",
    "The large oak in the cloister garden gave you a cryptic warning",
    "When traveling to the academy you were stopped by baron Black's men, they wanted to see some documents and let you go afterwards",
    "Oleg wears dark green robes, these have protective enchantments on them",
    "A druid named Rovenhaust lives on an island neighbouring the Blacklands, he is supposedly rather powerful",
    "Janixe Beladonna is a clerk at the academy, and is the go to person for practical information",
    "Oleg has protected his office by making it only accessible through a portal that he opens and closes at will",
    "Baron black is a military veteran of the great war between Livonia and Girin",
    "Lazarix' skin is cold to the touch.",
    "A revenant is a powerful reanimated body, it can last without magical upkeep around a whole year",
    "Girin sent some elite companies to prusue some important targets that fled from livonia after the war",
    "An Oblex is a large ooze that can take the shape and absrob the memories of people to almost perfectly impersonate them"
];

var arrayflag = 0;
var output = tips[arrayflag];


function loop(){
    if
    (arrayflag===-1){arrayflag=tips.length-1}
    else if 
    (arrayflag===tips.length){arrayflag=0}
}    
function log()
{console.log (output);
 console.log (arrayflag);
}

function update(){
    loop()
    output = tips[arrayflag]
    document.getElementById("tiptext").innerHTML = (output);
    document.getElementById("tip#").innerHTML = ((arrayflag+1)+"/"+(tips.length));
    log();
}
function left(){
    arrayflag++;
    update()
}
function right(){
    arrayflag--;
    update()
}
function random(){
    var storednumber = arrayflag;
        while (storednumber === arrayflag)
            {arrayflag=parseInt((Math.random()*(tips.length)))}
    update()
}
