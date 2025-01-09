function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    
    if (minuto < 10) {
        minuto = '0' + minuto;
    }
    
    msg.innerText = `Agora são ${hora}:${minuto} horas`;
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `São ${hora}:${minuto} horas, está de manhã.`;
        img.src = 'manha1.png'; 
        document.body.style.backgroundColor = 'yellow';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `São ${hora}:${minuto} horas, já está de tarde.`;
        img.src = 'tarde1.png'; 
        document.body.style.backgroundColor = 'blue';
    } else if (hora >= 18 && hora < 23) {
        msg.innerHTML = `São ${hora}:${minuto} horas, já está de noite.`;
        img.src = 'noite1.png'; 
        document.body.style.backgroundColor = 'black';
    }
}





