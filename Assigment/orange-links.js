let link = document.querySelectorAll("a");
link.forEach((elem) => {
  let href = elem.getAttribute("href");
  if (!href) return;
  if (href.includes("://") && !href.startsWith("http://internal.com")) {
    elem.style.color = "orange";
  }
});
