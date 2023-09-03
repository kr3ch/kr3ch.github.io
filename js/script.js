let burger_menu = document.querySelector('.burger-menu'),
    burger_icon = document.querySelector('.burger-icon');
    faq = document.querySelectorAll('.FAQ_all');

burger_icon.addEventListener('click', function() {
    this.classList.toggle('active');
    burger_menu.classList.toggle('active');
});
faq.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})



/*let heading = document.querySelector('h1');
console.log(heading);
heading.style.color = 'red'
heading.innerHTML = 'new <span>Heading</span>'*/
