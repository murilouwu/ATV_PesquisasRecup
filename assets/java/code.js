function typeWriter(elemento, text, time){
    const textoArray = text.split('');
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, time * i);
        if(textoArray.length-1 == i){
            setTimeout(() => typeWriter(elemento), time * i + 1000);
        }
    });
}

function clearText(elemento){
    elemento.innerHTML = '';
}

function clearInput(elemento){
    elemento.value = '';
}