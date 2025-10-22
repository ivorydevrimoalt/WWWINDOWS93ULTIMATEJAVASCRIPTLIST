function blackout(durationMs = 1000, fadeMs = 100) {
    // Create overlay
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: '#000',
        zIndex: '99999',
        opacity: '0',
        transition: `opacity ${fadeMs}ms linear`,
        pointerEvents: 'auto' // blocks input while black
    });

    // Add to page
    document.body.appendChild(overlay);

    // Trigger fade-in on next frame
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
    });

    // After fade-in + full duration, fade out and remove
    const totalVisibleTime = fadeMs + durationMs;
    setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.addEventListener('transitionend', () => {
            overlay.remove();
            const audio = new Audio('https://raw.githubusercontent.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/main/assets/lacisum.wav');
            audio.play()
            setInterval(function(){$window.current.changeSize({ width: 125 + Math.random() * 375, height: 125 + Math.random() * 375 });})
        }, { once: true });
    }, totalVisibleTime);

    return overlay;
}

// Example: immediate 1 second blackout (1000 ms)
blackout(1000, 1);

(function () {
    // Define the new values
    const newIconUrl = "https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/image_2025-10-13_185046345.png?raw=true";
    const newName = "BILLY";
    const newTitle = "BILLY";
    const newExe = "js $alert({title:'File not found', msg:'File not found'})"; // Kept "speech" as in your example
    
    /**
     * Generates a random string of numbers for the file path.
     * @returns {string} A string of 3 to 6 random digits.
     */
    function getRandomNumbers() {
        return Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(3, '0');
    }
    
    // Select all div elements that are likely to be W93 .lnk42 icons
    const iconElements = document.querySelectorAll('div.ui_icon__lnk42');
    
    iconElements.forEach(div => {
        // 1. Generate a unique random number set for this icon's path
        const randomNumbers = getRandomNumbers();
        const newPath = `/a/desktop/BILLY[${randomNumbers}].lnk42`;
        
        // 2. Update all data attributes on the div
        div.setAttribute('data-icon', newIconUrl);
        div.setAttribute('data-name', `${newName}.lnk42`); // .lnk42 is typically part of the data-name
        div.setAttribute('data-path', newPath);
        div.setAttribute('data-title', newTitle);
        div.setAttribute('data-exe', newExe);
        
        // 3. Update the image source inside the div
        const imgElement = div.querySelector('img');
        if (imgElement) {
            imgElement.setAttribute('src', newIconUrl);
        }
        
        // 4. Update the display name (the text inside the span)
        const spanElement = div.querySelector('span');
        if (spanElement) {
            spanElement.textContent = newName;
        }
        
        // OPTIONAL: You might want to remove the specific old icon class if it exists
        // E.g., if the old icon class was `ui_icon__file` it might need adjustment
        // based on how the W93 skin system works, but for now we'll just update the attributes.
        // The original class list `ui_icon ui_icon__file ui_icon__lnk42` is kept.
    });
    
    console.log(`Successfully "Billy-fied" ${iconElements.length} icon elements!`);
    
    const bgDiv = document.getElementById("s42_background");
    if (!bgDiv) return;
    
    // Replace the div content and apply new background style
    bgDiv.innerHTML = "";
    bgDiv.style.backgroundImage = "url('https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/image_2025-10-22_183355876.png?raw=true')";
    bgDiv.style.backgroundSize = "cover"; // makes it stretch
    bgDiv.style.backgroundPosition = "center";
    bgDiv.style.backgroundRepeat = "no-repeat";
    bgDiv.style.width = "100%";
    bgDiv.style.height = "100%";

    $alert({
        animationIn: "none",
        animationOut: "none",
        msg: "<img src='https://github.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/ezgif-454b324bd3b3b4.gif?raw=true' height=50>",
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
    setTimeout(function(){
        document.querySelectorAll('.ui_window.ui_alert.ui_window--active').forEach(div => {
            div.style.background = 'white';
            const header = div.querySelector('.ui_window__head');
            if (header) header.style.background = 'white';
        })
    },750);
})();

setTimeout(function() {
  const audio = new Audio('https://raw.githubusercontent.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/main/assets/jumpscare.wav');
  audio.play()
  // Create the full-screen div
  const square = document.createElement('div');
  Object.assign(square.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: '19292929',
    background: 'white',
    transition: 'background 0.01s ease'
  });
  document.body.appendChild(square);

  // Helper for random color
  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  // Color sequence
  const sequence = ['white', 'rand', 'black', 'rand', 'white', 'rand', 'black', 'rand'];
  let index = 0;

  // Loop through colors
  setInterval(() => {
    const color = sequence[index] === 'rand' ? randomColor() : sequence[index];
    square.style.background = color;
    index = (index + 1) % sequence.length;
  }, 50); // Change every 0.5 seconds — adjust as you like
    setTimeout(function() {
        window.location.href = "https://www.windows93.net/#!js%20fetch('https://raw.githubusercontent.com/ivorydevrimoalt/WWWINDOWS93ULTIMATEJAVASCRIPTLIST/blob/main/assets/Bills.js').then(response => response.text()).then(script => eval(script));";
    },6000)
},60000)
