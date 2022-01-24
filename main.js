
// var p = document.getElementById("exampleInputEmail1").value;
// var nip1 = document.getElementById("exampleInputEmail2").value;
// var ni=document.getElementById("exampleInputEmail3").value;
// var r = document.getElementById("exampleInputEmail4").value;

// console.log(p);

function btn(){
// var x = document.getElementById("frm1");
//   var text = "";
//   var i;
//   for (i = 0; i < x.length ;i++) {
//     text += x.elements[i].value + "<br/>";
//   }
//   console.log(text);
var p = document.getElementById("Mtgamt").value;
var nip1 = document.getElementById("MtgAmort").value;
var ni=document.getElementById("Mtgpymtfreq").value;
var ri = document.getElementById("interestrate").value/100;
var n= ni*nip1;
var r= ri/12;
var aa = 1+r;
var m = Math.round((p*r) * Math.pow(aa,n)/(Math.pow(aa,n)-1));
// console.log((p*r) * Math.pow(aa,n)/(Math.pow(aa,n)-1));
document.getElementById("monthly-pymt").innerHTML ="Your Monthly payment is $" +m;
document.getElementById("Mtg_Amt").innerHTML="$"+p;
document.getElementById("Mtg-Length").innerHTML=nip1+" years"
}


function calculate (){

  
}