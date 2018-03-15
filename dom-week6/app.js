let page = document.querySelector('#container');

//-----result show div
let showDiv = document.createElement('div');
showDiv.setAttribute('id', 'resultshowDiv');
//--- eyes effect function called here
createOnOffButton();
//----create div for robot
creatingDiv();
//------ result div appended to the page
page.appendChild(showDiv);

searchbtnii();
let savedData = undefined;

//------fetching data
//let savedData = undefined;

fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
    .then(function(response) {
        //  console.log(response);
        return response.json();


    })
    .then(function(data) {
        //console.log(data)
        savedData = data;
        console.log(data);
        addButtons(data);
    })

//-----  add the input buttons for curiculam repo

function addButtons(data) {
    for (let i = 0; i < data.length; i++) {
        //console.log(data[i].name);
        let btn = document.createElement('input');
        btn.setAttribute('class', "curiculamBtn");
        btn.setAttribute('type', "submit");
        btn.setAttribute('value', data[i].name);
        btn.addEventListener("click", function() {
            //---------show the fetch on show div
            //showDiv.innerHTML = JSON.stringify(data[i]);

            modalStr(JSON.stringify(data[i]));

        });

        document.querySelector('.cbody').appendChild(btn);
    }
}
////----------createing modal from here


//------basic structure for the modal function

function modalStr(result) {
    let bb = document.getElementsByTagName('body')[0];

    let modal = document.createElement('div');
    modal.id = 'simpleModal';
    modal.setAttribute('class', 'modal');
    let modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');
    let closeBtn = document.createElement('span');
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerHTML = '&times;';

    //----listen to the close btn
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    //---listen to the outside of the modal to close the modol
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    modal.appendChild(closeBtn);
    modalContent.innerHTML = result;
    modal.appendChild(modalContent);

    modalContent = result;
    bb.appendChild(modal);



}



// let searchdiv = document.createElement('div');
// searchdiv.setAttribute('ID',"searchDiv");
// page.appendChild(searchdiv);


function searchbtnii() {
    let searchBox = document.createElement('input');
    searchBox.setAttribute('type', "text");
    searchBox.id = "searchTextBox";
    searchBox.classList = "search";

    let searchbtn = document.createElement('input');
    searchbtn.id = "searchSubmitId";
    searchbtn.classList = "search";
    searchbtn.setAttribute('type', "submit");
    searchBox.addEventListener("keypress", keyPressed);
    searchbtn.addEventListener('click', function() {
        onSearch(searchBox);

    });

    page.appendChild(searchBox);
    page.appendChild(searchbtn);

}

function keyPressed(k) {

    if (k.code == 'Enter') {
        const textBox = document.getElementById('searchTextBox');
        onSearch(textBox);
    }

    return false;
}



function onSearch(searchBox) {
    if (savedData !== undefined) {
        for (let i = 0; i < savedData.length; i++) {
            if (savedData[i].name.toLowerCase() == searchBox.value.toLowerCase()) {

                showDiv.innerHTML = JSON.stringify(savedData[i])
                break;
            } else {

                showDiv.innerHTML = "Not found";


            }
        }
    }
}

////------the button function that on off the eyes gradient
function createOnOffButton() {
    let onOff = document.createElement('button');
    onOff.innerText = "click [here] or on my [eyes]";
    onOff.addEventListener('click', function() {
        let catchEyes = document.querySelector('.chead');
        catchEyes.classList.toggle("magic");
    });
    page.appendChild(onOff);
}

//----listen to the head to on of the eyes light
let headIdOfrobot = document.getElementById('headIdOfrobot');
headIdOfrobot.addEventListener('click', function() {
    headIdOfrobot.classList.toggle("magic");

});

//---creatingDiv function for robot sheap

function creatingDiv() {
    let robote = document.createElement('div');
    robote.setAttribute('class', "robote");
    let r_signalStick = document.createElement('div');
    r_signalStick.setAttribute('class', "signal");
    let r_head = document.createElement('div');
    r_head.setAttribute('class', "chead");
    r_head.setAttribute('id', "headIdOfrobot");
    let r_body = document.createElement('div');
    r_body.setAttribute('class', "cbody");
    let leftHand = document.createElement('div');
    leftHand.setAttribute('class', "left");
    leftHand.innerHTML = 'j';
    let rightHand = document.createElement('div');
    rightHand.setAttribute('class', "right");
    rightHand.innerHTML = 'j';
    let r_foot = document.createElement('div');
    r_foot.setAttribute('class', "cfoot");

    robote.appendChild(r_signalStick);
    robote.appendChild(r_head);
    robote.appendChild(r_body);
    r_body.appendChild(leftHand);
    r_body.appendChild(rightHand);
    robote.appendChild(r_foot);

    page.appendChild(robote);
}
