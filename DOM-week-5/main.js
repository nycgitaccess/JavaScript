
let page = document.querySelector('#container');
let searchdiv = document.createElement('div');
searchdiv.setAttribute('ID',"searchDiv");
page.append(searchdiv);
let divBody = document.querySelector('#show');

let savedData = undefined;

fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
  .then(function(response) {
  //  console.log(response);
    return response.json();


  })
  .then(function(data) {
    //console.log(data)
    savedData = data;
    searchbtnii();
    addButtons(data);
  })

function searchbtnii(){
    let searchBox = document.createElement('input');
    searchBox.setAttribute('type', "text");
    searchBox.id = "searchTextBox";

    let searchbtn = document.createElement('input');
    searchbtn.setAttribute('type', "submit");
    searchBox.addEventListener("keypress", keyPressed);
    searchbtn.addEventListener( 'click', function(){
      onSearch(searchBox);

    });

    searchdiv.append(searchBox);
    searchdiv.append(searchbtn);

}
function keyPressed(k) {
  if (k.code == 'Enter'){
      const textBox = document.getElementById('searchTextBox');
    onSearch(textBox);
    console.log("its working !!!!!!!!!!!")
    }             // ...add a new task (using same handler as the button)
  return false;                  // no propagation or default
}



function onSearch(searchBox){
  if(savedData !== undefined){
    for(let i = 0; i < savedData.length; i++){
      if(savedData[i].name.toLowerCase() == searchBox.value.toLowerCase()){

       divBody.innerHTML = JSON.stringify(savedData[i])
       break;
     }else{

      divBody.innerHTML = "Not found";


      }
    }
  }
}
      ///-----  add the input buttons

  function addButtons(data){
    for(let i = 0; i < data.length; i++){
        //console.log(data[i].name);
        let btn = document.createElement('input');
        btn.setAttribute('type', "submit");
        btn.setAttribute('value',data[i].name);
          btn.addEventListener("click", function(){
            divBody.innerHTML =JSON.stringify(data[i]);


          });

        page.appendChild(btn);
    }
  }
