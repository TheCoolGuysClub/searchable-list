function selector(restriction, items) {
  for(let i = 0; i < items.length; i++) {
    if(items[i].innerHTML.indexOf(restriction) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

let input = document.getElementsByTagName("input");
input[0].addEventListener("keyup", function(){
  let inputNoCase = input.value;
  let list = document.getElementsByTagName("ul");
  selector(inputCase, list);

})