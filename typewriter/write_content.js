const writeChars = (content, element, delay) => {
    return new Promise((resolve) => {
        let intervalReturn;
        let split = content.split('');
        let contentlength = split.length;
        let iterator = 0;
        intervalReturn = setInterval(() => {
    
            element.textContent += split[iterator]
            iterator++;
    
            if (iterator==contentlength) {
                clearInterval(intervalReturn)
                resolve();
            }
    
        }, delay)
    });

}

const deleteChars = (amount, element, delay) => {
    return new Promise((resolve) => {
        let intervalReturn;
        let text = element.innerText;
        let contentlength = amount
        let iterator = 0;
        intervalReturn = setInterval(() => {

            text = text.slice(0, -1)
            element.innerText = text

            iterator++
            if (iterator==contentlength) {
                clearInterval(intervalReturn)
                resolve();
            }

        }, delay)
    });
}

const clearAllChars = (element, delay) => {
    return new Promise((resolve) => {
        let intervalReturn;
        let text = element.innerText;
        let contentlength = text.length;
        let iterator = 0;
        intervalReturn = setInterval(() => {

            text = text.slice(0, -1)
            element.innerText = text

            iterator++
            if (iterator==contentlength) {
                clearInterval(intervalReturn)
                resolve();
            }

        }, delay)
    });

    
}

const waitForScript = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay)
    });
}


const mainType = () => {
    element = document.querySelector('.letters2');
    typingDelay = 100
    deleteDelay = 25
    waitDelay = 500
    setTimeout(() => {
        const promiseChecker = async () => {
            while (true) {
                await clearAllChars(element, deleteDelay);
                await writeChars('2D', element, typingDelay)
                await deleteChars(2, element, deleteDelay)
                await writeChars('3D Model Designer', element, typingDelay)
                await waitForScript(waitDelay)
                await clearAllChars(element, deleteDelay);
                await writeChars('Motion Designer', element, typingDelay)
                await waitForScript(waitDelay)
                await clearAllChars(element, deleteDelay);
                await writeChars('Proff', element, typingDelay)
                await deleteChars(1, element, deleteDelay*2)
                await waitForScript(deleteDelay*2)
                await writeChars('essional Dumbass', element, typingDelay)
                await waitForScript(waitDelay)
                await clearAllChars(element, deleteDelay);
                await writeChars('And somr', element, typingDelay)
                await deleteChars(1, element, deleteDelay*2)
                await waitForScript(deleteDelay*2)
                await writeChars("ehow, I'm 13", element, typingDelay)
                await deleteChars(1, element, deleteDelay*2)
                await waitForScript(deleteDelay*2)
                await writeChars("4.", element, typingDelay)
                await waitForScript(waitDelay)
                await clearAllChars(element, deleteDelay);
                await writeChars("Front-end Developer", element, typingDelay)
                await waitForScript(waitDelay)
            }
        }  
        promiseChecker()
    }, 3000);
    
}

mainType()