



var root=document.getElementById('main');



/*var div1=document.createElement('div');
div1.classList.add('sub');
root.appendChild(div1);

var image=document.createElement('img');
image.src='/home/vishwa/Desktop/reactforstudent/images/download.png';
image.alt='profile picture';
image.classList.add('img');
div1.appendChild(image);

var heading=document.createElement('h2');//creating the heading tag
heading.textContent="Dynamic page";
div1.appendChild(heading);
//root.appendChild(div1);

var para=document.createElement('p');
para.textContent="vishwa@gmial.com"
div1.appendChild(para);

var anc=document.createElement('a');
anc.href="/home/vishwa/Desktop/reactforstudent/profile.html"
anc.textContent="view profile";
anc.classList.add('a');
div1.appendChild(anc);*/


var div=[];
var image=[];
var heading=[];
var heading2=[];
var para=[];
var anc=[];
var names=["vishwa","Ram","krishna"];
var prof=["Full Stack Developer","Front End Developer","Back End Developer"];
var email=["vishwa@gmail.com","Ram@gmail.com","krishna@gmail.com"];
var string=["dynamicprofile.html","dynamicprofile2.html","dynamicprofile3.html"]
for (var i = 0; i <= 2; i++) {
	div[i]=document.createElement('div');
	div[i].classList.add('sub');
	root.appendChild(div[i]);

	 image[i]=document.createElement('img');
	image[i].src='images/download.png';
	image[i].alt='profile picture';
	image[i].classList.add('img');
	div[i].appendChild(image[i]);

	 heading[i]=document.createElement('h2');//creating the heading tag
	heading[i].textContent=names[i];
	div[i].appendChild(heading[i]);

	heading2[i]=document.createElement('h2');//creating the heading tag
	heading2[i].textContent=prof[i];
	div[i].appendChild(heading2[i]);
	//root.appendChild(div1);

	 para[i]=document.createElement('p');
	para[i].textContent=email[i];
	div[i].appendChild(para[i]);

	 anc[i]=document.createElement('a');
	anc[i].href=string[i];
	anc[i].textContent="view profile";
	anc[i].classList.add('a');
	div[i].appendChild(anc[i]);
	
}





