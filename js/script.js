/*var divrow;
var row;
var m;
var idInp = 0;

document.getElementById('addrw').addEventListener("click", addrow);
document.getElementById('addcl').addEventListener("click", rowco);
// document.getElementsByClassName('tableRow').addEventListener("click", getId);




function addrow() {
    // console.log("Row Added");
    idInp++;
    tableEntire = document.getElementById('tableEntire');

    var numOfCols = document.getElementsByClassName('tableRow')[0].cells.length;
    var numOfRows = document.getElementsByClassName('tableRow').length;

    var newRow = tableEntire.insertRow(numOfRows);
    newRow.classList.toggle("tableRow");

    for (var i=0;i<=numOfCols-1;i++) {
        x = newRow.insertCell(i);
        x.innerHTML =
            '<input class="form-control form-control-sm" readonly="readonly" id="">';
    }
    // enableTxt();

}

function rowco() {
    var tableRows = document.getElementsByClassName('tableRow');
    var rwLen = tableRows.length;

    for (m=0;m<=rwLen;m++) {
        // console.log(m);
        var x = tableRows[m].insertCell(m);
        x.innerHTML = '<input class="form-control form-control-sm" readonly="readonly" id="">';
    }
    document.getElementsByClassName('tableRow').addEventListener("click", getId);
}

function  getId(element) {
    var ki = element.parentNode.parentNode.rowIndex;
    var hy = element.parentNode.cellIndex;
    console.log(ki,hy);
    element.setAttribute('readonly',false);
}*/


/*New Row and col*/
document.getElementById('addRw').addEventListener("click",addRow);
document.getElementById('addCol').addEventListener("click",addCol);
document.getElementById('delRow').addEventListener("click",delRow);
document.getElementById('delCell').addEventListener("click",delCol);
document.getElementById('sort').addEventListener("click",srtTb);

function addRow() {
    var tbl = document.getElementById('tableEntire'), // table reference
        row = tbl.insertRow(tbl.rows.length), // append table row
        i;
// insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        crtCel(row.insertCell(i), i, 'row');
    }
}

// creating DIV and add it to the table cell
function crtCel(cell, text, style) {
    var div = document.createElement('div');
    div.innerHTML = '<input class="form-control form-control-sm" id="">';
    div.setAttribute('class', style);
    div.setAttribute('className', style);
    cell.appendChild(div);
}

function addCol() {
    var tbl = document.getElementById('tableEntire'),
        i;

    for (i = 0; i < tbl.rows.length; i++) {
        crtCel(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}
// deleting table rows with index greater then 0
function delRow() {
    var tbl = document.getElementById('tableEntire'), // table reference
        lastRow = tbl.rows.length - 1,             // set the last row index
        i;
    // delete rows with index greater then 0
    for (i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}

// delete table columns with index greater then 0
function delCol() {
    var tbl = document.getElementById('tableEntire'),
        lastCol = tbl.rows[0].cells.length - 1,
        i, j;
    // delete cells with index greater then 0 (for each row)
    for (i = 0; i < tbl.rows.length; i++) {
        for (j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}

// sort data

function srtTb() {
    var table, rows, swt, i, x, y, frt;
    table = document.getElementById("tableMain");
    swt = true;
    while (swt) {
        swt = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            frt = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                frt = true;
                break;
            }
        }
        if (frt) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            swt = true;
        }
    }
}

/**/
/*
function  getId(element) {
    var ki = element.parentNode.parentNode.rowIndex;
    var hy = element.parentNode.cellIndex;
    console.log(ki,hy);
    element.setAttribute('readonly',false);
}
getId();*/
