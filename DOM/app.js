/* 1 */
const x = document.getElementById("container");
console.log(x);
/* 2 */
const y = document.querySelector("#container");
console.log(y);
/* 3` */
const z = document.querySelectorAll(".second");
console.log(z);
/* 4 */
const a = document.querySelector("ol .third");
console.log(a);
/* 5 */
/* const b = document.querySelector("#container");
b.innerText = "Hello"; */
/* 6,7 */
const c = document.querySelector(".footer");
c.classList.add("main");
c.classList.remove("main");
/* 8 */
const d = document.createElement("li");
/* 9 */
d.innerText = "four";
/* 10 */
const e = document.querySelector("ul");
e.appendChild(d);
/* 11 */
const f = document.querySelectorAll("ol li");
for (let i = 0; i < f.length; i++) {
  f[i].style.backgroundColor = "green";
}
/* 12 */
const g = document.querySelector(".footer");
g.remove();
