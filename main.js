const btnEl = document.getElementById("btn");

btnEl.addEventListener("mouseover", function (e) {
  let top = e.pageY - this.offsetTop;
  let left = e.pageX - this.offsetLeft;
  this.style.setProperty("--topPosition", top + "px");
  this.style.setProperty("--leftPosition", left + "px");
});
