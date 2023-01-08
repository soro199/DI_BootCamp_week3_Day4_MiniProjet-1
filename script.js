let color = null;
let mouseDown = false;

// Get Body Element index 0
let body = document.getElementsByTagName("body")[0];

// Get all Children of sidebar
let color_blocks = document.querySelectorAll("#sidebar > *");

// Get all children of main "div"
let fill_blocks = document.querySelectorAll("#main > *");
// Get button element index 0
let clear_button = document.getElementsByTagName("button")[0];

// les Even
clear_button.addEventListener("click", () => {
    for (blockElement of fill_blocks){
        blockElement.style.backgroundColor = "white";
    }
});

//Even
body.addEventListener("mousedown", () => {
    mouseDown = true;
})

//Even
body.addEventListener("mouseup", () => {
    mouseDown = false;
})

//
for (colorElement of color_blocks){
    colorElement.addEventListener("click", (e) => {
        color = e.target.style.backgroundColor;
    });
}

// 
for (blockElement of fill_blocks){
    blockElement.addEventListener("mousedown", (e) => {
        if (color != null) e.target.style.backgroundColor = color;
    });
    blockElement.addEventListener("mouseover", (e) => {
        if (mouseDown && color != null) e.target.style.backgroundColor = color;
    });
}