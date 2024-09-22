const typingDelay = 100; // Tempo entre cada letra (em milissegundos)
const nextTextDelay = 500; // Tempo entre a conclusão de um texto e o início do próximo

function typeText(span, text, index, callback) {
    if (index < text.length) {
        span.textContent += text.charAt(index); // Adiciona uma letra
        setTimeout(() => {
            typeText(span, text, index + 1, callback); // Recursão para a próxima letra
        }, typingDelay);
    } else if (callback) {
        setTimeout(callback, nextTextDelay); // Espera um tempo antes de iniciar o próximo texto
    }
}

function type(className, textList, index = 0) {
    const headings = document.querySelectorAll(className);
    if (index < headings.length) {
        const span = headings[index];
        const text = textList[index];

        if (span && text) {
            span.textContent = ""; // Limpa o texto antes de iniciar
            typeText(span, text, 0, () => type(className, textList, index + 1)); // Chama o próximo após terminar
        }
    }
}

// Inicia a animação com o primeiro span
type('.about-description .animated-heading', ["Hi! I'm Allan Gaiteiro"]);
