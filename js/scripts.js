window.addEventListener("load", function (){
const form = document.getElementById("form");

function gatherInput (event) {
    event.preventDefault();

    const input1 = document.getElementById("firstThing").value;
    const input2 = document.getElementById("secondThing").value;
    const input3 = document.getElementById("thirdThing").value;

    const toArray = [input1, input2, input3];
    
    const newArray = toArray.concat('Reading','Jogging');

    const ul = document.createElement("ul");
    form.after(results);

    const li1 = document.createElement('li');
    li1.innerHTML = newArray[0];
    ul.append(li1);

    const li2 = document.createElement('li');
    li2.innerHTML = newArray[1];
    ul.append(li2);
    
    const li3 = document.createElement("li");
    li3.innerHTML = newArray[2];
    ul.append(li3);
};




function clearForm () {
    document.getElementById("firstThing").value = null;
    document.getElementById("secondThing").value = null;
    document.getElementById("thirdThing").value = null;
};


form.addEventListener("submit", gatherInput);
form.addEventListener("submit", clearForm);

});