<%@ include file="Header.jsp" %>
<body>
	<%
	
	glyco_sequence gs = (glyco_sequence) request.getSession().getAttribute("gs");
	LinkedList <NewMass_GS> gs_NM=(LinkedList <NewMass_GS>)request.getSession().getAttribute("gs_NM");
	
	%>
 <div class="container">
	 
	 	<div class="hero-unit">
	 	<h1>Mass Spectrum</h1><br><br>
				<p style="font-size:30px;"> <a>Manually input data here:</a></p>
				
				<form action="GenerateImageSevlet" onsubmit="return testIt(this);" method="post" name="TableForm">
					<input class="btn btn-primary btn-medium" type="button" value="Add More Column" onclick="addRows('Creat_table');" />
					<input class="btn btn-primary btn-medium" type="button" value="Delete Column" onclick="deleteRow('Creat_table')" />
					<br>
					<br>
					<table id="Creat_table" border="1">
						<tr>
							<td>Select to Delete</td>
							<td> X-Axis</td>
							<td> Y-Axis</td>
						</tr>
						<tr>
						 	<td><input type="checkbox" name="delchk" /></td>
							<td><input type="text" name="X-Axis"/> </td>
						    <td><input type="text" name="Y-Axis" /> </td>
						</tr>
						
					 </table>
					 			
					 
							
					  <br><input class="btn btn-primary btn-medium" type="submit" value="Submit">
				</form>
				
				<p style="font-size:30px;"> <a>Or upload data here:</a></p>	
				<form method="post" action="UploadServlet" onsubmit="return testImportDataSet(this);" enctype="multipart/form-data">
				        Select file to upload: <input type="file" name="dataFile"
				            id="fileChooser" /><br />
				            
				<a>Selected for Sequence:</a>
				<select  name="SelectedSequence" id="SelectedSequence" >
					<% for(int i=0; i<gs_NM.size(); i++){%>
						 <option value=<%=gs.glyco_sequence.get(i) %>><%=gs.glyco_sequence.get(i)%></option>
					
					<%}%>
				
				</select>
				       
				        <br /> <input class="btn btn-primary btn-medium" type="submit" value="Upload" />
				</form>
		</div>
		<div class="row">
		<div class="span12">	
		
		<% for(int i=0; i<gs_NM.size(); i++){ %>
			<a>Mass adding to: </a> <%=gs.glyco_sequence.get(i) %></a><br>
			<%for(int j=0; j<gs_NM.get(i).new_m_mass.size(); j++){ %>	
				<%=gs.Combination.get(i).Combination.get(j)%> <a>: New Monoisotopic mass:</a> <%=gs_NM.get(i).new_m_mass.get(j)%> <a>New Average mass:</a> <%=gs_NM.get(i).new_a_mass.get(j)%> <br> 
			<%} %>
		<%} %>
		</div>
		
		</div>
</div>			    

</body>
</html>