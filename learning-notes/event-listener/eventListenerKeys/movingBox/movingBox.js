const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keyup", event => {
    myBox.textContent = "🐶";
})

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {

        // event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                myBox.textContent = "Up";
                break;
            case "ArrowDown":
                y += moveAmount;
                myBox.textContent = "Down";
                break;
            case "ArrowLeft":
                myBox.textContent = "Left";
                x -= moveAmount;
                break;
            case "ArrowRight":
                myBox.textContent = "Right";
                x += moveAmount;
                break;

        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`

    }
})