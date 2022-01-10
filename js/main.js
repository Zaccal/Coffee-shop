function scrollToDiv(element,navheight){
    const offset = element.offset()
    const offsetTop = offset.top
    const totalScroll = offsetTop-navheight
    
    $('body,html').animate({
    scrollTop: totalScroll
    }, 500)
    }
    
    $('nav ul li a').click(function(){
    const el = $(this).attr('href')
    const elWrapped = $(el)
    const offsetTop = 90
    scrollToDiv(elWrapped, offsetTop) 
    
    return false
})

const searchBtn = document.querySelectorAll('.search_btn')
const searchForm = document.querySelector('.search-form')

searchBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        searchForm.classList.toggle('active')
    })
})

const body = document.querySelector('body')
const burgerBtn = document.querySelector('.burger')
const burgerContent = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active')
    burgerContent.classList.toggle('active')
    body.classList.toggle('lock')
})

const link = document.querySelectorAll('.burger__link')

link.forEach(function(item) {
	item.addEventListener('click', function(e) {
		burgerBtn.classList.remove('active')
	    burgerContent.classList.remove('active')
	    body.classList.remove('lock')
	})
})