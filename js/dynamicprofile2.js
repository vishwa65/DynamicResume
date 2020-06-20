var data1;
//var name;


function loadJsonFile(file,callback){
    var fileRequest =new XMLHttpRequest();
    fileRequest.overrideMimeType("application/json");
    fileRequest.open("GET",file,true);
    fileRequest.onreadystatechange = function(){
      if(fileRequest.readyState === 4 && fileRequest.status=="200"){
        callback(fileRequest.responseText);
        //console.log(fileRequest.response);
      }
    }
    fileRequest.send();
  }
  loadJsonFile("js/data.json",function(text){
    data1=JSON.parse(text);
    console.log(data1.details.name);
    console.log(data1.details.prof);
   // name=data1.details.name;
    
    
    
  })







var root=document.getElementById('main');







// 1st division
var div1=document.createElement('div');
div1.classList.add('sub');
var image=document.createElement('img');
image.src='images/download.png';
image.alt='profile picture';
image.classList.add('img');
div1.appendChild(image);
var heading=document.createElement('h2');
heading.textContent="Ram";
div1.appendChild(heading);
var heading2=document.createElement('h3');
heading2.textContent="Front End Developer";
div1.appendChild(heading2);
div1.appendChild(document.createElement("hr"));
var para=document.createElement('p');
para.textContent="Ram@gmail.com";
div1.appendChild(para);
var para2=document.createElement('p');
para2.textContent="chittoor"
div1.appendChild(para2);
root.appendChild(div1);

function generateTableHead(table,data) 
		{
  		let thead = table.createTHead();
  		let row = thead.insertRow();
  		for (let key of data) 
  			{
    			let th = document.createElement("th");
    			let text = document.createTextNode(key);
    			th.appendChild(text);
    			row.appendChild(th);
 
			};
		}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}




//2nd division
var div2=document.createElement('div');
div2.classList.add('sub2');
var heading=document.createElement('h1');
heading.textContent="Carrier objective";
div2.appendChild(heading);
var para=document.createElement('p');
para.textContent="To work in an environment where i can utilize my skills and knowledge"
div2.appendChild(para);
div2.appendChild(document.createElement("hr"));
var heading2=document.createElement('h2');
heading2.textContent="Educational Details";
div2.appendChild(heading2);
let table1 = document.createElement("table");
let details=[{SNO:1,Institute:"RGUKT",Course:"PUC",YOP:"2018",Percentage:"95" },{SNO:2,Institute:"RGUKT",Course:"PUC",YOP:"2017",Percentage:"95" },{SNO:3,Institute:"M E.M HS",Course:"SSC",YOP:"2016",Percentage:"98" }];
let data=Object.keys(details[0]);
generateTableHead(table1,data);
generateTable(table1, details);

div2.appendChild(table1);

var heading3=document.createElement('h2');
heading3.textContent="Skills";
div2.appendChild(heading3);
var ol=document.createElement('ol');
var li=document.createElement("li");
li.textContent="C";
ol.appendChild(li);
var li=document.createElement("li");
li.textContent="Java";
ol.appendChild(li);
var li=document.createElement("li");
li.textContent="HTML";
ol.appendChild(li);
var li=document.createElement("li");
li.textContent="CSS";
ol.appendChild(li);
var li=document.createElement("li");
li.textContent="JS";
ol.appendChild(li);
div2.appendChild(ol);


var heading4=document.createElement('h2');
heading4.textContent="HOBBIES";
div2.appendChild(heading4);
var ul=document.createElement('ul');
var li=document.createElement("li");
li.textContent="Reading";
ul.appendChild(li);
var li=document.createElement("li");
li.textContent="Surf The Web";
ul.appendChild(li);
var li=document.createElement("li");
li.textContent="Play Board Games";
ul.appendChild(li);
var li=document.createElement("li");
li.textContent="Listening songs";
ul.appendChild(li);
div2.appendChild(ul);




root.appendChild(div2);



		//creating table
		










	
