function outputname() {
var x,y,name,a,b,answer;
x=document.getElementById("form1") ;
y=x.elements["name"].value;
document.getElementById("demo").innerHTML="Hello "+y+"!";
document.getElementById("deleteMe").innerHTML="";
}
