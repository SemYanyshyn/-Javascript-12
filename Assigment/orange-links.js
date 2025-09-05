const link = document.querySelectorAll("a");
link.forEach((elem) => {
  const href = elem.getAttribute("href");
  if (!href) return;
  if (href.includes("://") && !href.startsWith("http://internal.com")) {
    elem.style.color = "orange";
  }
});
