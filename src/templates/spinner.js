export default `
<div class="spinner">
  <div class="spinner-items">
    <% data.forEach((item, i) => { %>
      <div class="spinner-item" data-name=<%=item%> data-key=<%=i%>></div>  
    <% }) %>
  </div>
</div>
`;
