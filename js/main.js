var share = document.querySelectorAll(".icon-share");
var detail = document.querySelector("#detail");
var shareContainer = document.querySelector("#share-container");
var shareContainerDesktop = document.querySelector("#share-container-desktop");
share.forEach(el=>el.addEventListener("click",()=>{
    if(window.innerWidth>=768){
        shareContainerDesktop.classList.toggle("active");
    }else{
        shareContainer.classList.toggle("active");
        detail.classList.toggle("hide");
    }
}));
window.addEventListener("resize",()=>{
    if(window.innerWidth>=768){
        if(shareContainer.classList.contains("active")){
            shareContainerDesktop.classList.add("active");
            shareContainer.classList.remove("active");
            detail.classList.remove("hide");
        }
    }else{
        if(shareContainerDesktop.classList.contains("active")){
            shareContainerDesktop.classList.remove("active");
            shareContainer.classList.add("active");
            detail.classList.add("hide");
        }
    }
});