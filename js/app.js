const burger = () => {
    const btn = document.querySelector('.burger svg:last-child')
    const off = document.querySelector('.offset')
    btn.addEventListener('click', () => {
        off.computedStyleMap.display = 'block'
    })

    close.addEventListener('click', () => {
        off.computedStyleMap.display = 'none'
    })
}

burger()