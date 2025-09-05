const tree = document.getElementById("tree");
const li = tree.querySelectorAll("li");

li.forEach((element) => {
  const ownText = element.firstChild.data;
  const descendants = element.querySelectorAll("li").length;
  alert(`${ownText}: ${descendants}`);
});
