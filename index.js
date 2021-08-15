let el = document.getElementsByClassName("go-top")[0];

window.addEventListener('scroll', () => {
    if (pageYOffset > 500) {
        el.classList.add('active');
    } else {
        el.classList.remove('active');
    }
})

// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault() // Предотвратить стандартное поведение ссылок
            // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.getAttribute('href');
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector('' + goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}