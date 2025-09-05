const table = document.querySelector("#numbers");
for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.background = "red";
}
