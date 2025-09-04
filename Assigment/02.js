const tree = document.getElementById("tree");
const li = tree.querySelectorAll("li");

li.forEach((element) => {
  const ownText = element.firstChild.data.trim(); // власний текст вузла
  const descendants = element.querySelectorAll("li").length; // кількість усіх нащадків
  alert(`${ownText}: ${descendants}`);
});
