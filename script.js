// tasks-- collection of datas
let arr = [{
    dp:"https://plus.unsplash.com/premium_photo-1668485966810-bcaa10f47781?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://plus.unsplash.com/premium_photo-1668485967268-f757c5799b1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://plus.unsplash.com/premium_photo-1736378273167-5ea5722ddaa0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1741439432848-ae1301dca116?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://images.unsplash.com/photo-1531500562390-19d2cf941c3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1650873793909-f31e95dad593?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://plus.unsplash.com/premium_photo-1741194732641-eca20483c388?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1740428639827-79acb8f07709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://plus.unsplash.com/premium_photo-1738772658416-e2192df71896?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]

let content = document.querySelector(".story-sec");
let card = document.getElementById("photo-card");
let heart = document.querySelector("i");
let toggleIcon =document.getElementById("icontwo")

// tasks-- creating dp for story in js
// so we pushes elements in content where depending on no. of arr the img and other property would be avail
let current = ""
arr.forEach((val,indx) => {
        content.innerHTML += `<div class="story"> <img id="${indx}" src="${val.dp}" alt=""> </div>`
})



// tasks-- seeing the story on click of dp
// after three sec story disappears
// and gradient background color disappers too
content.addEventListener("click", function(dets){
    if (dets.target.tagName === "IMG") { 
        let clickedStory = dets.target.parentElement; 
        clickedStory.style.background = "#3b3b3b";
    }

    var insideStory = document.querySelector(".full-screen")
    insideStory.style.display = "block"
    insideStory.style.backgroundImage = `url(${arr[dets.target.id].story})`
    card.style.display = "none"
    setTimeout(() => {
        insideStory.style.display = "none"
        insideStory.style.backgroundColor = "black"
        card.style.display = "block"
        
    }, 2000);

})

card.addEventListener("dblclick", function(){
    heart.style.opacity = 0.7
    heart.style.transform ="translate(-50%, -50%) scale(1)"
    heart.style.color = "red"
    setTimeout(() => {
        heart.style.opacity = 0,
        heart.style.transform = "translate(-50%, -50%) scale(0)",
        heart.style.color = "white"
    }, 2000);
    // toggleIcon.classList.replace("ri-heart-line", "ri-heart-fill");
    likeBtn()

})
function likeBtn(){
    toggleIcon.classList.replace("ri-heart-line", "ri-heart-fill");
    toggleIcon.addEventListener("click", function(){
        toggleIcon.classList.replace("ri-heart-fill", "ri-heart-line");    })
}