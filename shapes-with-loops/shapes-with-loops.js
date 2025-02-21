makeWhileLoop = document.getElementById("whileLoop");
makeDoWhileLoop = document.getElementById("doWhileLoop");
playWithShape = document.getElementById("playWithShape");
playWithShape2 = document.getElementById("playWithShape2")


levelChoice = document.getElementById("levelInput");
submitChoice = document.getElementById("submitButton");
levelChoice1 = document.getElementById("levelInputa");
submitChoice1 = document.getElementById("submitButtona");

levelChoice2 = document.getElementById("levelInputb");
submitChoice2 = document.getElementById("submitButtonb");

levelChoice3 = document.getElementById("levelInputc");
submitChoice3 = document.getElementById("submitButtonc");




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

// now same with do while loop - with input box 

submitChoice1.onclick = function () {
    document.getElementById("div1a").innerHTML = "";
    let i = 0;
    let j = 0;

    console.log(levelChoice1);

    while (i < levelChoice1.value) {
        //new line
        while (i >= j) {
            let span = document.createElement("span");
            let spanText = document.createTextNode(` innerloop - j = ${j} and i = ${i} so 2nd condition is true`);
            span.appendChild(spanText);
            document.getElementById("div1a").appendChild(span);
            j++;
        }
        let para = document.createElement("p");
        let paraText = document.createTextNode(`outerloop - j = ${j} and i = ${i} so 2nd condition is false`);
        para.appendChild(paraText);
        document.getElementById("div1a").appendChild(para);
        j = 0;
        i++;
    }

}



submitChoice2.onclick = function () {
    document.getElementById("div1b").innerHTML = "";

    let i = 0;

    do {
        let para = document.createElement("p");
        let paraText = document.createTextNode(`I am outer loop  i = ${i} 🥸`);
        para.appendChild(paraText);
        console.log(levelChoice2);
        document.getElementById("div1b").appendChild(para);
        i++; // increment i to move to the next row
        console.log(levelChoice2);
    } while (i <= levelChoice2.value);



    let k = 0;

    do {
        let j = 0;

        do {
            let span = document.createElement("span");
            let spanText = document.createTextNode(`I am inner loop - i = ${k} j = ${j} 🦔`);
            span.appendChild(spanText);
            document.getElementById("div1b").appendChild(span);
            j++; // increment j to move to the next colun
        } while (j <= k); // continue inner loop intil j <= i


        let para = document.createElement("p");
        let paraText = document.createTextNode(`I am outer loop  i = ${k} j = ${j} 🧚`);
        para.appendChild(paraText);
        console.log(levelChoice2);
        document.getElementById("div1b").appendChild(para);
        k++; // increment i to move to the next row
        console.log(levelChoice2);
    } while (k < levelChoice2.value);

    let l = 0;

    do {
        let j = levelChoice2.value;

        do {
            let span = document.createElement("span");
            let spanText = document.createTextNode(`I am inner loop - i = ${l} j = ${j} 🐸`);
            span.appendChild(spanText);
            document.getElementById("div1b").appendChild(span);
            j--; // increment j to move to the next colun
        } while (j >= l); // continue inner loop intil j <= i


        let para = document.createElement("p");
        let paraText = document.createTextNode(`I am outer loop  i = ${l} j = ${j} 🧚`);
        para.appendChild(paraText);
        console.log(levelChoice2);
        document.getElementById("div1b").appendChild(para);
        l++; // increment i to move to the next row
        console.log(levelChoice2);
    } while (l <= levelChoice2.value);
}



submitChoice3.onclick = function () {
    document.getElementById("div1c").innerHTML = "";

    for (let i = 0; i <= levelChoice3.value; i++) {
        let para = document.createElement("p");
        let paraText = document.createTextNode(`I am outer loop  i = ${i} 🌞`);
        para.appendChild(paraText);
        console.log(levelChoice3);
        document.getElementById("div1c").appendChild(para);
        console.log(levelChoice3);
    }


    for (let k = 0, j = 0; k <= levelChoice3.value; k++) {

        for (let j = 0; j <= k; j++) {
            lastj = j;
            let span = document.createElement("span");
            let spanText = document.createTextNode(`I am inner loop - i = ${k} j = ${j} 🦔`);
            span.appendChild(spanText);
            document.getElementById("div1c").appendChild(span);
        }
        let para = document.createElement("p");
        let paraText = document.createTextNode(`I am outer loop  i = ${k} j = ${j} 🦕`); //can't define j here
        para.appendChild(paraText);
        console.log(levelChoice3);
        document.getElementById("div1c").appendChild(para);

        console.log(levelChoice3);

    }

    for (let l = 0, j = levelChoice3.value; l <= j; l++) {
        for (let j = levelChoice3.value; j >= l; j--) {
            let span = document.createElement("span");
            let spanText = document.createTextNode(`I am inner loop - i = ${l} j = ${j}🐣 `);
            span.appendChild(spanText);
            document.getElementById("div1c").appendChild(span);
        }
        let para = document.createElement("p");
        let paraText = document.createTextNode(`I am outer loop  i = ${l} j= ${j} 🦕🐨`);
        para.appendChild(paraText);
        console.log(levelChoice3);
        document.getElementById("div1c").appendChild(para);

        console.log(levelChoice3);
    }

}








console.log(levelChoice2);






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