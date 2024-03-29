function form_input_is_Float(input){
    return !isNaN(input)&&parseFloat(input)==input;
}

function testTheGlycanDirectInput(form){
	for (var i = 0; i < form.elements.length; i++) {
		if(form.elements[i].name=="Monoisotopic_Mass" || form.elements[i].name=="Average_Mass"  ){
			if(form.elements[i].value==""){
				alert("All the value must be filled"  );
				return false
			}
			var letter = /^[0-9.]+$/;
			if(!form.elements[i].value.match(letter)  ){
				alert("Can't have letter input for mass");
				return false;
			}
		}
	}
	return true;
	
}


function testIt(form) {
    for (var i = 0; i < form.elements.length; i++) {
        
        if(form.elements[i].name=="X-Axis" ){
        	if(form.elements[i].value==""){
        		alert("X-Axis value must be filled"  );
        		return false;
        	}else if(form.elements[i].value!=""){
        		if(form_input_is_Float(form.elements[i].value)){
           		}else{
        		alert("X-Axis value must be float"  );
        		return false;
        		}
        	}
        }
        if(form.elements[i].name=="Y-Axis" ){
        	if(form.elements[i].value==""){
        		alert("Y-Axis value must be filled"  );
        		return false;
        	}else if(form.elements[i].value!=""){
        		if(form_input_is_Float(form.elements[i].value)){
           		}else{
        		alert("Y-Axis value must be float"  );
        		return false;
        		}
        	}
        }
        
       
        
    }
    
    
    return true;
    
}
function testRange(form) {
    for (var i = 0; i < form.elements.length; i++) {
        
        if(form.elements[i].name=="Range" ){
        	if(form.elements[i].value > 2){
        		alert("Range value must not more then 2"  );
        		return false;
        	}
        }
        
        
       
        
    }
    
    
    return true;
    
}
function testImportDataSet(form){
	 for (var i = 0; i < form.elements.length; i++) {
	        
	        if(form.elements[i].name=="dataFile" ){
	        	if(form.elements[i].value == null){
	        		alert("Need to upload data first!!!"  );
	        		return false;
	        	}
	        }
	        
	        
	       
	        
	    }
	    
	    
	    return true;
}
function arrangeSno(tableId)

 {

             var tblObj = document.getElementById(tableId);

             var no_of_rows = tblObj.rows.length;

              for(var i=0; i<no_of_rows-1; i++)

           tblObj.rows[i+1].cells[0].innerHTML = i+1;

 }

 function addRows(tableId) {
	 

     var tblObj = document.getElementById(tableId);


     var no_of_rows = tblObj.rows.length;

     var row_in_table = tblObj.insertRow(no_of_rows);

     var colCount = tblObj.rows[0].cells.length;

   //  var rno=eval(tblObj.rows[no_of_rows-1].cells[0].innerHTML) +1;


     for(var i=0; i<colCount; i++) {

        var column_in_row = row_in_table.insertCell(i);
        
        column_in_row.innerHTML = tblObj.rows[1].cells[i].innerHTML;	
         
     //   if (i==0)  column_in_row.innerHTML = rno;

        switch(column_in_row.childNodes[0].type) {

             case "text":

                     column_in_row.childNodes[0].value = "";
                     
                     break;

             case "checkbox":

                     column_in_row.childNodes[0].checked = false;

                     break;

             case "select-one":

                     column_in_row.childNodes[0].selectedIndex =0;

                     break;

         }
        

     }
     
 }

 function deleteRow(tableID) {
     try {
     var table = document.getElementById(tableID);
     var rowCount = table.rows.length;
     if(rowCount <= 2) {
         alert("Cannot delete all the rows.");
         
     }else{
     for(var i=0; i<rowCount; i++) {
         var row = table.rows[i];
         var chkbox = row.cells[0].childNodes[0];
         if(null != chkbox && true == chkbox.checked) {
             if(rowCount <= 2) {
                 alert("Cannot delete all the rows.");
                 break;
             }
             table.deleteRow(i);
             rowCount--;
             i--;
         }
	  }
     }
     }catch(e) {
         alert(e);
     }
 }
 function setDataType() {
	  var selElem = document.getElementById("Data_type");
	  if (selElem.options[selElem.selectedIndex].value=="decimal" ) {
	    document.getElementById("p").className = "showSel";  // display
	    document.getElementById("x").className = "showSel";  // display
	    document.getElementById("p_t").className = "showSel";  // display
	    document.getElementById("x_t").className = "showSel";  // display
	  }else if(selElem.options[selElem.selectedIndex].value=="character" || selElem.options[selElem.selectedIndex].value=="character varying" ) {
		document.getElementById("x").className = "showSel";  // display
		document.getElementById("x_t").className = "showSel";  // display
		document.getElementById("p").className = "hideSel";  // hide it
	    document.getElementById("p_t").className = "hideSel";  // hide it
	  }
	  else {
	    document.getElementById("p").className = "hideSel" ; // hide it
	    document.getElementById("x").className = "hideSel";  // hide it
	    document.getElementById("p_t").className = "hideSel" ; // hide it
	    document.getElementById("x_t").className = "hideSel"  ;// hide it
	  }
}
