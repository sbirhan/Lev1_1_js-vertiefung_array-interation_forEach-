var arrayUnorderedList = [];
var arrayOrderedList = [];

function sortData(){
    var InputString = TextInputBox.value;
    arrayUnorderedList.push(InputString);
    UnorderedList.value = arrayUnorderedList;
    arrayOrderedList = arrayUnorderedList;
    arrayOrderedList.sort();
    OrderedList.value = arrayOrderedList;
    TextInputBox.value = "";
    InputString = "";
}