var img = document.querySelector("img");
var result = document.querySelector("#result");
var chanda = document.querySelector("#chanda");
var mosque = document.querySelector("#mosque");
var score1 = document.querySelector("#score")
var count1 = document.querySelector("#count")

score = 0
count = 0

function chand() {

    var choise = 0;
    var randomNo = Math.ceil(Math.random() * 2);

    console.log(randomNo);
    if (randomNo == 1) {
        result.innerHTML = "You Won The Toss";
        img.src = "https://th.bing.com/th/id/R.67c301f636400f72a81f1d5747561274?rik=%2fJAfAQNhy6iPJw&pid=ImgRaw&r=0";
   
        count++
        score++
        count1.innerHTML=`Attempt Count : ${count}`
        score1.innerHTML=`Score : ${score}` }

    else {
        result.innerHTML = "You Lost The toss";
        img.src = "https://th.bing.com/th/id/R.8426b67b7688242450aeef860d992539?rik=cHaW0vsL6PdzkQ&pid=ImgRaw&r=0";
    
        count++
      
        count1.innerHTML=`Attempt Count : ${count}`
        score1.innerHTML=`Score : ${score}`}



}
function masjid() {
   
    var choice = 0;

    var random1No = Math.ceil(Math.random() * 2);

    console.log(random1No);
    if (random1No == 2){
    
        result.innerHTML = "You Won The Toss";
        img.src = "https://th.bing.com/th/id/R.8426b67b7688242450aeef860d992539?rik=cHaW0vsL6PdzkQ&pid=ImgRaw&r=0";
    
        count++
        score++
        count1.innerHTML=`Attempt Count : ${count}`
        score1.innerHTML=`Score : ${score}`}
    else {
        
            result.innerHTML = "You Lost The toss";
            img.src = "https://th.bing.com/th/id/R.67c301f636400f72a81f1d5747561274?rik=%2fJAfAQNhy6iPJw&pid=ImgRaw&r=0";
        
   
            count++
          
            count1.innerHTML=`Attempt Count : ${count}`
            score1.innerHTML=`Score : ${score}`     }



}