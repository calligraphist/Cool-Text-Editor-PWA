const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // console.log('button clicked')
    // console.log("event" + event)
    // event.preventDefault();
    //store the events triggered
    window.deferredPrompt = event;
    //remove the hidden class from our button
    butInstall.classList.toggle('hidden', false)
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent =window.deferredPrompt;
    //console.log(promptEvent)
    if(!promptEvent){
        return;
    }
//it will prompt
    promptEvent.prompt();
// Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true)
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //clear prompt
    console.log('install button clicked')
    window.deferredPrompt = null;
});
