const WelcomeScreen = {
    show: function (game) {
        document.querySelector("#welcome-screen #start-button").onclick = () => {
            this.hide()
            document.querySelector("#game-container").style.display = "block"
            game.start()
        }

        document.querySelector("#welcome-screen").style.display = "block"
    },
    hide: function () {
        document.querySelector("#welcome-screen").style.display = "none"
    }
}