function validateForm() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let msg = document.getElementById('msg');
    
    let nerro = document.getElementById('nerro');
    let emailerro = document.getElementById('emailerror');
    let msgerro = document.getElementById('msgerro');
    
    let validar = true;
    
    if (nome.value.trim() === '') {
        nome.classList.add('error');
        nerro.textContent = 'Este campo não foi preenchido';
        nerro.style.display = 'block';
        validar = false;
    } else {
        nome.classList.remove('error');
        nerro.style.display = 'none';
    }
    
    if (email.value.trim() === '') {
        email.classList.add('error');
        emailerro.textContent = 'Este campo não foi preenchido';
        emailerro.style.display = 'block';
        validar = false;
    } else {
        email.classList.remove('error');
        emailerro.style.display = 'none';
    }
    
    if (msg.value.trim() === '') {
        msg.classList.add('error');
        msgerro.textContent = 'Este campo não foi preenchido';
        msgerro.style.display = 'block';
        validar = false;
    } else {
        msg.classList.remove('error');
        msgerro.style.display = 'none';
    }
    
    if (validar) {
        alert('Mensagem enviada com sucesso!');
    }
}