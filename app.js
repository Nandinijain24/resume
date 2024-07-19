function addNewWEField(){

     let newNOde=document.createElement('textarea')
     newNOde.classList.add('form-control')
     newNOde.classList.add('weField')
     newNOde.classList.add('mt-2')
      
// add in we id
     let weOb=document.getElementById('we');
     //we  use this line to add new textarea before weAddButton
     let weAddButtonOb=document.getElementById('weAddButton')

     weOb.insertBefore(newNOde,weAddButtonOb);
}

function addNewaqField(){
     
     let newNode=document.createElement('textarea')
     newNode.classList.add('form-control')
     newNode.classList.add('aqField')
     newNode.classList.add('mt-2')

     let aqob=document.getElementById('aq');

     let aqbuttonob=document.getElementById('aqAddButton')

     aqob.insertBefore(newNode,aqbuttonob);


}

//generating cv
function generatecv(){
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML=nameField;

   //namet2 field
   let nameFieldd=document.getElementById("nameField").value;
   let nameT2=document.getElementById("nameT2");
   nameT2.innerHTML=nameFieldd;

   // direct code namet2 field 
   //document.getElementById("nameT2").innerHTML=nameField;

   let contactField=document.getElementById("contactField").value
   let contactT=document.getElementById("contactT");
   contactT.innerHTML=contactField;

document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

   document.getElementById('LinkedT').innerHTML=document.getElementById("linkedField").value;
 
   document.getElementById("gitT").innerHTML=document.getElementById("githubField").value

   document.getElementById("ObjectiveT").innerHTML=document.getElementById("objectiveField").value

// document.getElementById("weT").innerHTML=
//document.getElementById("workExperienceField").value

//document.getElementById("aqT").innerHTML=document.getElementById("aq").value


// work education
let wes=document.getElementsByClassName("weField")

let str="";
for(let e of wes){
     str=str+ `<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML=str;

//academic qualification
let aqs=document.getElementsByClassName("aqField")

let str1="";
for(let e of aqs){
     str1=str1+ `<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML=str1;
document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display="block"

}
//print cv
function printcv(){
     window.print();
}