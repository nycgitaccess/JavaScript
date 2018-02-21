// idies array
var bookids =["harryporter","thor","ironman","captinamirica","halk","avangers","spiderman","antman","xman","deadpool"];
// Discription object
var Bookinfo = {
    "harryporter":{

    name:"Harry Porter",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "thor":{

    name:"Thor",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "ironman":{

    name:"Ironman",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "captinamirica":{

    name:"Captin Amirica",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "halk":{

    name:"Halk",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "avangers":{

    name:"Avangers",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "spiderman":{

    name:"Spider-Man",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "antman":{

    name:"Ant-Man",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "xman":{

    name:"X-Man",
    author:".....",
    title:"Movie",
    language:"English"
  },
  "deadpool":{

    name:"Deadpool",
    author:".....",
    title:"Movie",
    language:"English"
  }

}

/// images object

var imgObj = {
    "harryporter":"images/harry_potter.jpg",
    "thor":"images/thor.jpg",
    "ironman":"images/ironman31.jpg",
    "captinamirica":"images/captin.jpg",
    "halk":"images/hulk.jpg",
    "avangers":"images/avengers.jpg",
    "spiderman":"images/spiderman.jpg",
      "antman":"images/antman.jpeg",
    "xman":"images/xman.jpg",
    "deadpool":"images/deadpool.jpg"

}


let page = document.getElementById('container');

////-------------header section
let header = document.createElement("header");
let header2 = document.createElement("h2");
header2.innerHTML = "This a websit that show my fav movies"
header.append(header2);
page.append(header);
///  ----------function-----------------
function genroter(){
  /// warper div
	let assinDiv= document.createElement('div');
  assinDiv.setAttribute("id","warper");
  /// go through every array
	for(let i = 0; i < bookids.length; i++){
    
      ///create div teg
			let box = document.createElement('div');
      box.setAttribute("class", "ulli");
      // create ul teg
			let unorderlist = document.createElement('ul');
      //li create li
      let listitem = document.createElement('li');
      //assign value to li


      listitem.innerHTML = "<span>NAME :</span>"+" "+Bookinfo[bookids[i]].name+"</br>"+"<span>AUTHOR :</span>"+" "+Bookinfo[bookids[i]].author+"</br>"+"<span>TYPE :</span>"+" "+Bookinfo[bookids[i]].title+"</br>"+"<span>LANGUAGE : </span>"+" "+Bookinfo[bookids[i]].language;



      // create img teg
    let x = document.createElement("IMG");
    //set the where is my img
    x.setAttribute("src",imgObj[bookids[i]]);
    //spacify the width
    x.setAttribute("width","300px");
    /// show all the images to waeper diiv
    box.append(x);

      //put every li to ul
			unorderlist.append(listitem);
      //put ul to box div
			box.append(unorderlist);
      // put every box div to warper div
      assinDiv.append(box);

	}
//show the warper div to webpage
	page.append(assinDiv);
}
genroter();
