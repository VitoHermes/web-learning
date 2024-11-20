const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

/* 点击next按钮，当前激活的圆点加1 */
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

/* 点击prev按钮，当前激活的圆点减1 */
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

/* 更新圆点状态和进度条 */
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    /* 根据激活的圆点数量，设置进度条的宽度 */
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    /* 根据当前激活的圆点，设置prev和next按钮的禁用状态 */
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}