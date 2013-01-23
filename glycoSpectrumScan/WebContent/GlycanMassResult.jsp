<%@ include file="Header.jsp" %>
<body>
	<%
	ArrayList <glycans> gs  = (ArrayList <glycans>)request.getAttribute("glycanss");
	double total_monoisotopic_mass= new Double(request.getAttribute("total_monoisotopic_mass").toString());
	double total_average_mass= new Double(request.getAttribute("total_average_mass").toString());
	request.setAttribute("glycanss", gs);
	request.setAttribute("total_monoisotopic_mass", total_monoisotopic_mass);
	request.setAttribute("total_average_mass",total_average_mass);
	
	request.getSession().setAttribute("glycanss",gs);
	
	
	%>
	
	<div class="container">
	 
	 	<div class="hero-unit">
	 			<h1>Clycan Mass Results</h1><br>
	 		<!-- <a>Total monoisotopic mass is:</a><%=total_monoisotopic_mass %><a>/Total average mass is:</a><%=total_average_mass %><br> -->	
			 	<table border='1' width="100%">
			 		<tr>
			 			<td><a>Clycan number</a></td>
			 			<td><a>Total monoisotopic</a></td>
			 			<td><a>Total average</a></td>
			 		</tr>
			 		<%
			 		for(int i=0; i<gs.size();i++){
			 		%>
			 		<tr>
			 			<td><%=i+1 %></td>
			 			<td><%=gs.get(i).Monoisotopic_Mass %></td>
			 			<td><%=gs.get(i).Average_Mass %></td>
			 		</tr>
			 		<%} %>
			 	</table><br>
			<a href="GlycanMass.jsp">Back</a>
	 	</div>
	</div>
	<jsp:include page="ProteinSequence.jsp" flush="true" />

</body>
</html>