const loader1 = document.querySelector('.loader1');
const loader2 = document.querySelector('.loader2');
const loader3 = document.querySelector('.loader3');
const loaderbtn1 = document.querySelector('#loader1')
const loaderbtn2 = document.querySelector('#loader2')
const loaderbtn3 = document.querySelector('#loader3')
const main = document.querySelector('.main');

loaderbtn1.addEventListener('click', () => {
    localStorage.setItem('style', 'loader1');
    location.reload();
})
loaderbtn2.addEventListener('click', () => {
    localStorage.setItem('style', 'loader2');
    location.reload();
})
loaderbtn3.addEventListener('click', () => {
    localStorage.setItem('style', 'loader3');
    location.reload();
})

const getStyle = async () => {
    let style = localStorage.getItem('style');
    if (!style) {
        localStorage.setItem('style', 'loader1');
    }
    return style
}

function init() {
    getStyle().then((style) => {
        // console.log(style)
        if (style === 'loader1') {
            loader2.style.display = 'none';
            loader3.style.display = 'none';
        }
        if (style === 'loader2') {
            loader1.style.display = 'none';
            loader3.style.display = 'none';
        }
        if (style === 'loader3') {
            loader1.style.display = 'none';
            loader2.style.display = 'none';
        }
        setTimeout(() => {
            loader1.style.opacity = 0;
            loader1.style.display = 'none';
            loader2.style.opacity = 0;
            loader2.style.display = 'none';
            loader3.style.opacity = 0;
            loader3.style.display = 'none';

            main.style.display = 'block';
            // 計時50毫秒後，才轉成opacity = 1
            setTimeout(() => { main.style.opacity = 1 }, 50)

        }, 2500)
    })
}

init();