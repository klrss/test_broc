/* function main and create a table */
window.onload = function CreateTbl(){

/* create a table*/
var tbl = document.createElement("table");
tbl.setAttribute("id","table");

/* loop to create rows with cells */
for (var i = 0; i<4; i++)
    {
    var row = document.createElement("tr");
    row.setAttribute("id","tr");
    for (var j=0;j<4;j++){
    var cell = document.createElement("td");
    cell.setAttribute("id","td");
    row.appendChild(cell);
    }
    tbl.appendChild(row);
}
document.body.appendChild(tbl);
/* Buttons */
for (var i =0;i<4;i++){
var btn = document.createElement("button");
document.body.appendChild(btn);
var txt = document.createTextNode("+");
btn.appendChild(txt);
}
document.getElementsByTagName("button")[0].setAttribute("id","addrow");
document.getElementsByTagName("button")[1].setAttribute("id","addcol");
document.getElementsByTagName("button")[2].setAttribute("id","delrow");
document.getElementsByTagName("button")[3].setAttribute("id","delcol");
document.getElementById("delrow").innerHTML="-";
document.getElementById("delcol").innerHTML="-";

/* Move button*/
tbl.onmousemove = function(){Coord(event)};
function Coord(event){
  var y = event.clientY;
  var x = event.clientX;
  btnDelRow.style.top = y +'px';
  btnDelCol.style.left =  x +'px';
  if (tbl.rows.length > 1){
    btnDelRow.style.visibility="visible";
  }
  if (tbl.rows[0].cells.length > 1){
    btnDelCol.style.visibility="visible";
  }
}

/* Insert Row */
var btnAddRow =document.getElementById("addrow");
btnAddRow.onclick = function(){InsRow()};
function InsRow() {
    var b = tbl.insertRow(-1);
    for(var i=0; i < tbl.rows[0].cells.length; i++){
      b.insertCell(i);
      }
    }
/* Insert Column*/
var btnAddCol = document.getElementById("addcol");
btnAddCol.onclick = function(){InsColumn()};
function InsColumn() {
    for (var i=0; i < tbl.rows.length; i++){
    tbl.rows[i].insertCell(0);
    }
}
/* Delete row */
var btnDelRow = document.getElementById("delrow");
btnDelRow.onclick = function() {DelRow()};
  function DelRow(){
  tbl.deleteRow(0);
/*invisible button to delete row*/
  if (tbl.rows.length===1){
    btnDelRow.style.visibility="hidden";
  }
}
/*Delete column */
var btnDelCol = document.getElementById("delcol");
btnDelCol.onclick = function(){DelCol()};
  function DelCol(){
    for(var i=0; i < tbl.rows.length; i++){
    tbl.rows[i].deleteCell(0);
    }
/* invisible button to delete colummn*/
    if (tbl.rows[0].cells.length ===1){
      btnDelCol.style.visibility="hidden";
    }

}

/*div.onmouseout =function(){Clear(event)}
function Clear(event){
  btnDelRow.style.visibility ="hidden";
  btnDelCol.style.visibility = "hidden";

}*/
}
