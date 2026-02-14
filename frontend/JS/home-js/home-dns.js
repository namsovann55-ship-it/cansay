import StyleHome from "./style-home.js";
import toggleSidebar from "./toggleBtn.js";

function SideBar(){
    fetch("./HTML/home/SideBar.html")
    .then(res=>res.text())
    .then(data=>{
        document.getElementById("side_bar").innerHTML=data;
        StyleHome("./CSS/style/home-style.css");
    });
}
function NavTop(){
    fetch("./HTML/home/NavTop.html")
    .then(res=>res.text())
    .then(data=>{
        document.getElementById("nav_top").innerHTML = data;

        // const btn = document.getElementById("toggleBtn");

        // console.log(btn);

        // btn.addEventListener("click", toggleBtn);
        toggleSidebar();
    });
}


export {SideBar};
export {NavTop};