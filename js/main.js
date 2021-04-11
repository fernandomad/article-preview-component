var share = document.querySelectorAll(".icon-share");
var detail = document.querySelector("#detail");
var shareContainer = document.querySelector("#share-container");
share.forEach(el=>el.addEventListener("click",()=>{
    shareContainer.classList.toggle("active");
    detail.classList.toggle("hide");
}));