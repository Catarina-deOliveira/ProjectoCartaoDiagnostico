
function addColumn(tblId)
{
    var tblHeadObj = document.getElementById(tblId).tHead;
    for (var h=0; h<tblHeadObj.rows.length; h++) {
		var newTH = document.createElement('th');
		tblHeadObj.rows[h].appendChild(newTH);
        newTH.innerHTML = '<label class="two" for="NomedaColuna"><p class="hide"></p><input class="getValue" type="text" id="NomedaColuna"></label>'
    }
    var tblBodyObj = document.getElementById(tblId).tBodies[0];
        for (var i=0; i<tblBodyObj.rows.length; i++) {
    	var newCell = tblBodyObj.rows[i].insertCell(-1);
		newCell.innerHTML = ' '
	
	}

  
	
}

function deleteColumn(tblId)
{
	var allRows = document.getElementById(tblId).rows;
	for (var i=0; i<allRows.length; i++) {
		if (allRows[i].cells.length > 1) {
			allRows[i].deleteCell(-1);
		}
	}
}

function removerLinha(tblId) {
   // var tabela = document.getElementById("novaTabela");
   // var numeroLinhas = tabela.rows.length;
   // tabela.deleteRow(numeroLinhas-1);
    var table = document.getElementById(tblId);
      var row = table.getElementsByTagName('tr');
      if (row.length != '2') {
          row[row.length - 1].outerHTML = '';
      }
                
}

function addLinha(tblId) {
         
       var table = document.getElementById(tblId);
       var numOfRows = table.rows.length;
            // Captura a quantidade de colunas da última linha da tabela
            var numOfCols = table.rows[numOfRows-1].cells.length;

            // Insere uma linha no fim da tabela.
            var newRow = table.insertRow(numOfRows);
            numOfCols.innerHTML = (numOfRows-1) + 1;
            // Faz um loop para criar as colunas
            for (var j = 0; j < numOfCols; j++) {
                //celula1 = numOfCols.insertRow(0);
               // celula1.innerHTML = (numOfRows-1) + 1;
                // Insere uma coluna na nova linha 
                newCell = newRow.insertCell();
               
                // Insere um conteúdo na coluna
                newCell.innerHTML =  ' ' ;
              // celula1 = newRow.insertRow(0);
             
                // Insere um conteúdo na coluna
              
                
            }
    
}



        function deleteTable(button) {
            button.parentNode.remove();
        }

        function myFunction () {
            document.querySelectorAll("label.one").forEach(hide => {
              
                hide.children[1].innerHTML =  hide.children[2].value;
            });
        document.querySelectorAll("label.two").forEach(hide => {
             
                hide.children[1].innerHTML =  hide.children[1].value;
            });

            let doc = new jsPDF('p', 'pt', 'letter');
            let elementHandler = {
                '#ignorePDF': function (element, renderer) {
                    return true;
                }
            };
            let source = window.document.getElementsByClassName("canvas_div_pdf")[0];
            doc.fromHTML(
                source,
                10,
                10,
                {
                    'width': 180,'elementHandlers': elementHandler
                });
            doc.f

         // doc.output("dataurlnewwindow");
           doc.save('file.pdf');

            // document.getElementById("formWrapper").innerHTML = "<p>Thank you for submitting the form.</p>"

        }



       
