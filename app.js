//task 1
const taskOneBtn = document.querySelector('.taskOneBtn');
const taskOneText = document.querySelector('.taskOneText');
taskOneText.style.backgroundColor = 'transparent';
taskOneBtn.addEventListener('click', () => {
    taskOneText.style.backgroundColor = (taskOneText.style.backgroundColor === 'transparent') ? 'red' : 'transparent';
})

//task 2
class newTabUrl {
    constructor() {
        this.btn1 = document.querySelector('.taskTwobtn1');
        this.btn2 = document.querySelector('.taskTwobtn2');
    }

    setUrl() {
        this.href = prompt('enter url');
    }

    getNewTab() {
        if (this.href !== undefined) {
            window.location.href = this.href;
        } else {
            this.setUrl();
            this.getNewTab();
        }
    }

    addEvents() {
        this.btn1.addEventListener('click', () => {
            this.setUrl.bind(this)();
        });
        this.btn2.addEventListener('click', () => {
            this.getNewTab.bind(this)();
        })
    }
}

const user = new newTabUrl;
user.addEvents();


//task3
const inner = document.querySelector('.inner');
const task3input = document.querySelector('.task3input');
const taskThreeButton = document.querySelector('.taskThreeButton');
taskThreeButton.addEventListener('click', () => {
    let counter = 1;
    let currentTableSize = task3input.value.split('x');
    const table = document.createElement('table');
    for (let i = 0; i < currentTableSize[0]; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < currentTableSize[1]; j++) {
            let td = document.createElement('td');
            td.innerText = counter;
            tr.append(td);
            counter++;
        }
        table.append(tr);
    }
    inner.append(table);
});
//task 3

//task4
const btnTask4 = document.querySelector('.bnt4');
let outPut = document.querySelector('.output');

function getRandomImage() {
    const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg', 'img8.jpeg', 'img9.jpeg'];
    let random = Math.floor(Math.random() * images.length);
    let randomImg = document.createElement('img');
    randomImg.setAttribute('src', `../images/${images[random]}`);
    randomImg.setAttribute('width', `${(window.screen.width / 100) * 80}px`);
    randomImg.setAttribute('height', `${(window.screen.width / 100) * 80}px`);
    outPut.innerHTML = '';
    outPut.append(randomImg);
}

btnTask4.addEventListener('click', getRandomImage);
