var addOne = document.getElementById("addOne")
var addTwo = document.getElementById("addTwo")
var addFour = document.getElementById("addFour")
var minusOne = document.getElementById("minusOne")
var minusTwo = document.getElementById("minusTwo")
var minusFour = document.getElementById("minusFour")
var multiplyTwo = document.getElementById("multiplyTwo")
var devideTwo = document.getElementById("devideTwo")
var resset = document.getElementById("resset")
var score = document.getElementById("score")
var realScore = 0
addOne.addEventListener("click",function() {
    realScore++
    score.textContent="score"+" "+realScore
})
addTwo.addEventListener("click",function(){
    realScore+=2
    score.textContent="score"+" "+realScore
})
addFour.addEventListener("click",function(){
    realScore+=4
    score.textContent="score"+" "+realScore
})
multiplyTwo.addEventListener("click",function(){
    realScore*=2
    score.textContent="score"+" "+realScore
})
devideTwo.addEventListener("click",function(){
    realScore/=2
    score.textContent="score"+" "+realScore
})
minusOne.addEventListener("click",function(){
    realScore--
    score.textContent="score"+" "+realScore
})
minusTwo.addEventListener("click",function(){
    realScore-=2
    score.textContent="score"+" "+realScore
})
minusFour.addEventListener("click",function(){
    realScore-=4
    score.textContent="score"+" "+realScore
})
resset.addEventListener("click",function(){
    realScore=0
    score.textContent="score"+" "+realScore
})