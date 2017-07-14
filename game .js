var items = [
  {name: 'apple', value: 4},
  {name: 'orange', value: 3},
  {name: 'elephant', value: 650},
];

var first = document.queryselector("#first");
var second = document.queryselector("#second");
var firstdiv = document.queryselector("#.first");
var seconddiv = document.queryselector("#.second");

first.addEventlistener('click', function() {
  if(firstdiv.value < seconddiv.value) {
    count++;
  } else {
    console.log("WRONG");
  }
});


function setIte() {
  function rand(first) {
    var i = math.floor(math.random()*(item.length));
    if(i == first);
  }else{
    return i;
  }
}
var i = rand();
firstDiv.value = item[i].value;
firstDiv.innertext = item[i].name;
var j = rand(j);
secondDiv.value = items [j].value;
secondDiv.innertext = items;
}

setitems();
