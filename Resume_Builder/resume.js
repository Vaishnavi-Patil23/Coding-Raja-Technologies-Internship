// Function to add new work experience field
function addNewWEField() {
    const weContainer = document.getElementById('we');
    const newWEField = document.createElement('textarea');
    newWEField.classList.add('form-control', 'weField', 'mt-2');
    newWEField.setAttribute('rows', '3');
    weContainer.insertBefore(newWEField, document.getElementById('weAddButton'));
}

// Function to add new academic qualification field
function addNewAQField() {
    const aqContainer = document.getElementById('aq');
    const newAQField = document.createElement('textarea');
    newAQField.classList.add('form-control', 'aqField', 'mt-2');
    newAQField.setAttribute('rows', '3');
    aqContainer.insertBefore(newAQField, document.getElementById('aqAddButton'));
}

// Function to generate CV with provided information
function generateCV() {
    const name = document.getElementById('nameField').value;
    const contact = document.getElementById('contactField').value;
    const address = document.getElementById('addressField').value;
    const fb = document.getElementById('fbField').value;
    const insta = document.getElementById('instaField').value;
    const linked = document.getElementById('linkField').value;
    const objective = document.getElementById('objField').value;
    const workExperienceFields = document.querySelectorAll('.weField');
    const academicQualificationFields = document.querySelectorAll('.aqField');

    // Fill CV template with provided information
    document.getElementById('nameT').textContent = name;
    document.getElementById('contactT').textContent = contact + ' | ' + address;
    document.getElementById('fbT').textContent = fb;
    document.getElementById('instaT').textContent = insta;
    document.getElementById('linkedT').textContent = linked;
    document.getElementById('objT').textContent = objective;

    const weList = document.getElementById('weT');
    weList.innerHTML = '';
    workExperienceFields.forEach(field => {
        const li = document.createElement('li');
        li.textContent = field.value;
        weList.appendChild(li);
    });

    const aqList = document.getElementById('aqT');
    aqList.innerHTML = '';
    academicQualificationFields.forEach(field => {
        const li = document.createElement('li');
        li.textContent = field.value;
        aqList.appendChild(li);
    });

    // Show CV template
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

// Function to print CV template
function printCV() {
    window.print();
}
