const buttonNoche = document.querySelector('.noche')
const buttonDia = document.querySelector('.dia')
const bodyCambioColor = document.querySelector('body')

buttonNoche.addEventListener('click',function(){
    bodyCambioColor.classList.add('noche');
    bodyCambioColor.classList.remove('dia');
})

buttonDia.addEventListener('click',function(){
    bodyCambioColor.classList.add('dia');
    bodyCambioColor.classList.remove('noche');

})
