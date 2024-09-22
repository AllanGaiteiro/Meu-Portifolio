document.querySelectorAll('.navigate').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Impede o comportamento padrão do link
        const target = e.target.getAttribute('href').substring(1);  // Obtém o ID do destino
        const cube = document.querySelector('.cube');  // Seleciona o cubo
        const face = document.querySelectorAll('.face'); // Seleciona a cena
        let style = ' .animated-heading'
        // Adiciona a classe de animação ao fundo
        face.forEach(f => f.classList.add('animating'));

        // Define a rotação com base no ID da seção
        switch (target) {
            case 'about':
                cube.style.transform = 'rotateY(0deg)';
                style = '.about-description' + style;
                type(style, ["Hi! I'm Allan Gaiteiro"]);
                break;
            case 'skills':
                cube.style.transform = 'rotateY(-90deg)';
                style = '.skills-container' + style;
                type(style, ["My Skills"]);
                break;
            case 'projects':
                cube.style.transform = 'rotateY(-180deg)';
                style = '.projects-container' + style;
                type(style, ["My Projects"]);
                break;
            case 'contact':
                cube.style.transform = 'rotateY(-270deg)';
                style = '.contact-container' + style;
                type(style, ["Contact Me"]);
                break;
        }

        // Remove a classe de animação após a transição
        setTimeout(() => {
            face.forEach(f => f.classList.remove('animating'));
        }, 1000); // Tempo igual ao da transição
    });
});

