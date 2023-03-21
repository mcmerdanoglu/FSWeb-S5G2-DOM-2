import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
/*
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});*/

//"mouseover" and "mouseout"
const fareOver = document.querySelector(".intro img");

fareOver.addEventListener(
  "mouseover",
  (event) =>
    (event.target.src =
      "https://thumbs.dreamstime.com/b/red-bus-adventure-beach-21417868.jpg")
);

fareOver.addEventListener(
  "mouseout",
  (event) => (event.target.src = "http://localhost:9000/img/fun-bus.jpg")
);

//"keydown"

document.addEventListener("keydown", function (event) {
  alert(`Bir tuşa basıldı. Basılan tuş:  ${event.key.toUpperCase()}`);
});

//wheel

let count = 1;
const yuvarla = window.addEventListener("wheel", function (e) {
  alert(`${count} defa wheel yaptın`);
});

//load

window.addEventListener("load", (event) => {
  alert("Bu sayfa yüklendi!");
});

//focus

const focused = document.querySelector(".text-content h2");

focused.addEventListener(
  "focus",
  (event) => (event.target.style.backgroundColor = "purple")
);

//resize

const resizeP2 = document.getElementsByTagName("p")[2];
window.addEventListener("resize", (event) => {
  resizeP2.style.color = "purple";
});

//scrool
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.body.style.backgroundColor = "orange";
  }
}
//dblclick

const dcP3 = document.getElementsByTagName("p")[3];
dcP3.addEventListener("dblclick", (event) => {
  dcP3.style.color = "blue";
});
