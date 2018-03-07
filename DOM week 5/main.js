
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

    let searchbtn = document.createElement('input');
    searchbtn.setAttribute('type', "submit");

    searchbtn.addEventListener( 'click', function(){
      onSearch(searchBox);
    });

    searchdiv.append(searchBox);
    searchdiv.append(searchbtn);

}

function onSearch(searchBox){
  if(savedData !== undefined){
    for(let i = 0; i < savedData.length; i++){
      if(savedData[i].name == searchBox.value){

       divBody.innerHTML = JSON.stringify(savedData[i])
       break;
     }else{

      divBody.innerHTML = "Not found";


      }
    }
  }
}

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
