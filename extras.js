/* mobile bottom-nav highlight */
(function(){var P="profilim fealiyyet oyunlarim gundelik reyler istek beyenilen statistika lists-me".split(" ");
function sync(){var h=(location.hash||"#kesf").slice(1).split("/")[0];document.querySelectorAll(".bnav a").forEach(function(a){var t=a.dataset.tab,on=t===h||(t==="profilim"&&P.indexOf(h)>=0);a.setAttribute("aria-current",on?"page":"false")})}
window.addEventListener("hashchange",sync);window.addEventListener("load",sync);sync()})();

/* theme + spoiler reveal */
(function(){var r=document.documentElement;try{var t=localStorage.getItem("gbx-theme");if(t)r.setAttribute("data-theme",t)}catch(e){}
document.addEventListener("click",function(e){var sp=e.target.closest&&e.target.closest(".spo");if(sp){sp.classList.remove("spo");sp.removeAttribute("title");return}
if(e.target.closest&&e.target.closest("#m-theme,#t-theme")){var n=r.getAttribute("data-theme")==="light"?"dark":"light";r.setAttribute("data-theme",n);try{localStorage.setItem("gbx-theme",n)}catch(x){}}})})();
