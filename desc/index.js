// humbergur menu
function MenuFunction(){
  console.log("ji");
  let menuBtn = document.querySelector(".nav-ul");
 let icon =document.getElementById("icon")
  if(menuBtn.className === "nav-ul"){
    menuBtn.className += " responsive";
    icon.className="fa-solid fa-xmark"
  } else {
    icon.className="fa-solid fa-bars"
    menuBtn.className= "nav-ul";
  }
}
document.addEventListener("DOMContentLoaded", function() {
   let menuBtn = document.querySelector(".nav-ul");
  let icon =document.getElementById("icon")
  let list =document.querySelectorAll(".nav-ul li a")
  console.log("h");
  list.forEach((li) => {
    console.log(li);
    li.addEventListener("click", () => {
      console.log("object");
      menuBtn.className = "nav-ul";
      icon.className = "fa-solid fa-bars";
    });
  });

  // tabbar
const tabs = document.querySelectorAll(".tab-btn");
const contents= document.querySelectorAll(".content")
tabs.forEach((tab,index)=>{
  console.log(tab);
  tab.addEventListener("click",(e)=>{
    tabs.forEach(tab=>{tab.classList.remove("active")})
    tab.classList.add("active")
    let line=document.querySelector(".line");
  line.style.width=e.target.offsetWidth + "px";
  line.style.left=e.target.offsetLeft + "px";
  contents.forEach(content=>{content.classList.remove("active")})
  contents[index].classList.add("active")
  })
})
});


// typing animation
const textLoad = () => {
    setTimeout(() => {
      const text = document.querySelector(".sec-text");
        text.innerHTML = "Tsubasa";
    }, 0);
    setTimeout(() => {
      const text = document.querySelector(".sec-text");
        text.innerHTML = "a Student";
    }, 4000);
    setTimeout(() => {
      const text = document.querySelector(".sec-text");
        text.innerHTML = "a Developer";
    }, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);


