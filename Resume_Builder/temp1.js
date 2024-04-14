function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    // weOb.appendChild(newNode); 
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generate CV
function generateCV() {
    document.getElementById("nameT1").innerHTML = document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkField").value;

    document.getElementById("objT").innerHTML = document.getElementById("objField").value;

    let wes = document.getElementsByClassName('weField');
    let str = '';
    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    // Academic Qualification
    let aqs = document.getElementsByClassName('aqField');
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;
    //code for setting image

    let file=document.getElementById('imgField').files[0]
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function()
    {
    //set image to template 
    document.getElementById('imgTemplate').src = reader.result;
    };
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printCV() {
    window.print();
}
