let inputText = document.querySelectorAll(".input");
const formulario = document.querySelector('#meuForm')

formulario.addEventListener('submit',(event) =>{
    event.preventDefault();
    inputText.forEach(item =>{
        if (item.value === "") {
            item.classList.add('invalid');
            item.nextElementSibling.classList.add('invalid')
        } else {
            alert("Sua mensagem foi enviada, lembrando aperte OK 4 vezes")
        }
    })
})

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add('valid');
            input.classList.remove('invalid');
            input.nextElementSibling.classList.remove('invalid')
        } else { 
            input.classList.remove('valid');              
            input.classList.add('invalid');
            input.nextElementSibling.classList.add('invalid')
        }
    });
});