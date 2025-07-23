const bodyEl = document.querySelector("body");

 let lastTime = 0;
const delay = 20;
bodyEl.addEventListener("mousemove", (event)=>{
    const now = Date.now();
    if(now - lastTime < delay){
        return;
    }
    lastTime = now;

    const xPos = event.offsetX;
    const yPos = event.offsetY;


    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";


    const size = Math.random() * 100+30;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    
    bodyEl.appendChild(spanEl);


    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
})

bodyEl.addEventListener("touchmove", (event)=>{
    const touch = event.touches[0]; 
    const xPos = touch.clientX;
    const yPos = touch.clientY;


    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";


    const size = Math.random() * 100+30;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    
    bodyEl.appendChild(spanEl);


    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
})