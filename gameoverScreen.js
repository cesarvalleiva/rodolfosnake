const GameOverScreen = {
    show: function (game) {
        document.querySelector("#game-over #restart-button").onclick = () => {
            this.hide()
            game.start()
        }

        document.querySelector("#overlay").style.display = "block"
        document.querySelector("#game-over").style.opacity = 0
        document.querySelector("#game-over").style.display = "block"

        gsap.to(document.querySelector("#game-over"), 2, {
            ease: "Elastic.easeOut",
            opacity: 1,
            top: 120
        })
    },
    hide: function () {
        document.querySelector("#overlay").style.display = "none"
        document.querySelector("#game-over").style.display = "none"
    }
}