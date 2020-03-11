class Effects {

    x = 0;
    word;
    text;
    typingSpeed = 150;
    blinkingSpeed = 500;

    constructor() {
        this.text = "easy";
        this.word = document.querySelectorAll(".last-word");

        this.typingWord();

        //cause of blinking at insertion point
        this.disappearingInsertionPoint();
        this.appearingInsertionPoint();
    }

    typingWord = () => {
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
}