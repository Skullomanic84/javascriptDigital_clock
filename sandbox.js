// digital clock

const clock = document.querySelector('.clock');

// create a function to update every time we call time

const tick = () => {

    const now = new Date(); // getting current time

    const hours = now.getHours(); //getting hours from current time

    const minutes = now.getMinutes(); // fetching minutes from current time

    const seconds = now.getSeconds(); // fetching seconds from current time

    html = `
    <div class="time">
    <div class="circle"><span>${hours}</span></div> :
    <div class="circle"><span>${minutes}</span></div> :
    <div class="circle"><span>${seconds}</span></div>
    </div>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);
