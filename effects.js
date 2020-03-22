class Effects {

    x = 0;
    word;
    text;
    typingSpeed = 150;
    blinkingSpeed = 500;
    audioTyping = new Audio("audio/keyboard-click.mp3");
    middleBox;
    orangeRows;
    whiteBorderLeft;
    balanceText;
    computerCashIcon;

    constructor() {
        this.text = "easy";
        this.word = document.querySelectorAll(".last-word");
        this.middleBox = document.querySelector("#middle-box");
        this.whiteBorderLeft = document.querySelector("#message-balance-2");
        this.orangeRows = document.querySelectorAll(".orange-rows");
        this.balanceText = document.querySelector("#message-balance-2 span");
        this.computerCashIcon = document.querySelector("#computer-cash-icon");


        this.typingWord();
        this.attachEventHandlers();
        //cause of blinking at insertion point
        this.disappearingInsertionPoint();
        this.appearingInsertionPoint();
    }

    typingWord = () => {
        this.audioTyping.play();
        if (this.x < this.text.length) {
            this.word[0].innerHTML += this.text.charAt(this.x);
            this.x++;
            setTimeout(this.typingWord, this.typingSpeed);
        }
    }

    disappearingInsertionPoint = () => {
        this.word[1].innerHTML = "";
        setTimeout(this.appearingInsertionPoint, this.blinkingSpeed);
    }

    appearingInsertionPoint = () => {
        this.word[1].innerHTML = "|";
        setTimeout(this.disappearingInsertionPoint, this.blinkingSpeed);
    }

    attachEventHandlers = () => {
        for (let x = 0; x < this.orangeRows.length; x++) {
            this.orangeRows[x].onmouseover = this.mouseOver;
            this.orangeRows[x].onmouseout = this.mouseOut;
        }
    }

    mouseOver = () => {
        this.middleBox.style.backgroundColor = "#ED6E2D";
        this.whiteBorderLeft.style.borderLeft = "0.6px solid white";
        this.balanceText.style.color = "white";
        this.computerCashIcon.style.filter = "brightness(0%)";
    }

    mouseOut = () => {
        this.middleBox.style.backgroundColor = "white";
        this.whiteBorderLeft.style.borderLeft = "0.6px solid #ED6E2D";
        this.balanceText.style.color = "black";
        this.computerCashIcon.style.filter = "brightness(100%)";
    }
}