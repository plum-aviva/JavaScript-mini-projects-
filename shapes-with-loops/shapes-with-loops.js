makeWhileLoop = document.getElementById("whileLoop");
makeDoWhileLoop = document.getElementById("doWhileLoop");
playWithShape = document.getElementById("playWithShape");
playWithShape2 = document.getElementById("playWithShape2")


levelChoice = document.getElementById("levelInput");
submitChoice = document.getElementById("submitButton");
levelChoice1 = document.getElementById("levelInputa");
submitChoice1 = document.getElementById("submitButtona");






submitChoice.onclick = function () {
    document.getElementById("div1").innerHTML = "";
    let i = 0;
    let j = levelChoice.value;

    while (j > i) {
        //new line
        while (j > i) {
            let span = document.createElement("span");
            let spanText = document.createTextNode("🌻");
            span.appendChild(spanText);
            document.getElementById("div1").appendChild(span);
            j--;
        }
        let para = document.createElement("p");
        let paraText = document.createTextNode("");
        para.appendChild(paraText);
        document.getElementById("div1").appendChild(para);
        j = levelChoice.value;
        i++
    }

}

submitChoice1.onclick = function () {
    document.getElementById("div1a").innerHTML = "";
    let i = 0;
    let j = 0;

    console.log(levelChoice1);

    while (i < levelChoice1.value) {
        //new line
        while (i >= j) {
            let span = document.createElement("span");
            let spanText = document.createTextNode("🐣");
            span.appendChild(spanText);
            document.getElementById("div1a").appendChild(span);
            j++;
        }
        let para = document.createElement("p");
        let paraText = document.createTextNode("");
        para.appendChild(paraText);
        document.getElementById("div1a").appendChild(para);
        j = 0;
        i++;
    }

}





makeDoWhileLoop.onclick = function () {
    let i = 0; // initialise for the outer loop
    // outer loop
    do {
        let j = 0; // initialise for inner loop
        // Inner loop
        do {
            let span = document.createElement("span");
            let spanText = document.createTextNode("🌻");
            span.appendChild(spanText);
            document.getElementById("div2").appendChild(span);
            j++; // increment j to move to the next colun
        } while (j <= i); // continue inner loop intil j <= i

        let para = document.createElement("p");
        let paraText = document.createTextNode("");
        para.appendChild(paraText);
        document.getElementById("div2").appendChild(para);

        i++; // increment i to move to the next row
    } while (i < 5); // continue outer loop until i < 5

}

playWithShape.onclick = function () {

    let i = 0;
    let j = 0;


    while (i < 8) {
        while (j <= i) {
            let span = document.createElement("span");
            let spanText = document.createTextNode("🌻");
            span.appendChild(spanText);
            document.getElementById("div3").appendChild(span);
            j++;
            let k = 9;
            while (k > j) {
                let span = document.createElement("span");
                let spanText = document.createTextNode("🥝");
                span.appendChild(spanText);
                document.getElementById("div3").appendChild(span);
                k--;
            }
        }
        let para = document.createElement("p");
        let paraText = document.createTextNode("");
        para.appendChild(paraText);
        document.getElementById("div3").appendChild(para);
        j = 0;
        i++;
    }

}

playWithShape2.onclick = function () {
    let i = 0;
    // got to clear "div4"


    // Outer loop
    while (i < 4) {
        let j = 0;  // Counter for flowers (🌻)
        let k = 8;  // Counter for kiwis (🥝)
        let l = 12; // counter for smiles (😇)




        while (j <= i) {
            let span = document.createElement("span");
            let spanText = document.createTextNode("🌻");
            span.appendChild(spanText);
            document.getElementById("div4").appendChild(span);
            j++;
        }

        while (k > 3) {
            let span = document.createElement("span");
            let spanText = document.createTextNode("🥝");
            span.appendChild(spanText);
            document.getElementById("div4").appendChild(span);
            k--;
        }
        while (l > i) {
            let span = document.createElement("span");
            let spanText = document.createTextNode("😇");
            span.appendChild(spanText);
            document.getElementById("div4").appendChild(span);
            l -= 3;
        }

        // New line after each row
        let para = document.createElement("p");
        let paraText = document.createTextNode("");
        para.appendChild(paraText);
        document.getElementById("div4").appendChild(para);

        i++;
    }
}