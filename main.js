(function() {

var addSpan= function(container,letter){
  if(letter==="\n"){
    var node = document.createElement("br");
  }else {
    var node = document.createElement("span");
    var textnode = document.createTextNode(letter);
    node.appendChild(textnode);
  }
  container.appendChild(node);
}

var asyncAddSpan=function(container,text,iterator){
  setTimeout(()=> {
    addSpan(container,text[iterator])
    if(iterator<text.length-1){
      asyncAddSpan(container,text,iterator+1)
    }
  }, getRandomTimer());
}

var showAWordLikeItIsWritingByAHuman = function (container,text){
  var iterator=0;
  asyncAddSpan(container,text,iterator);
}

var getRandomTimer=function(){
  return getRandomArbitrary(50,150);
}

var getRandomArbitrary=function(min, max) {
  return Math.random() * (max - min) + min;
}

var container =document.querySelector(".container-title-prompt");

var text ="Hello newcomer \nDo you want to know me?";

setTimeout(()=> {
  showAWordLikeItIsWritingByAHuman(container,text);
}, 1000);

})();
