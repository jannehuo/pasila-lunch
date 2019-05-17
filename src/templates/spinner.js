export default `
<div class="spinner">
  <% data.forEach((item, i) => { %>
    <div class="spinner-item" data-key=<%=i%>></div>  
  <% }) %>
  <div class="spinner-selector"></div>
</div>
`
