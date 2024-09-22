document.querySelectorAll('.skills-list').forEach(list => {
    let isDragging = false;
    let startX, scrollStart, scrollOffset;
    let scrollSpeed = 1.5; // Controle de velocidade
    let animationFrame;

    // Função para desabilitar eventos nas imagens
    const disableImageInteraction = (disable) => {
      list.querySelectorAll('img').forEach(img => {
        img.style.pointerEvents = disable ? 'none' : 'auto';
      });
    };

    // Função de rolagem suave
    const smoothScroll = () => {
      if (isDragging) {
        list.scrollLeft = scrollStart - scrollOffset;
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };

    // Início do arrasto
    list.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - list.offsetLeft;
      scrollStart = list.scrollLeft;
      disableImageInteraction(true); // Desabilita cliques nas imagens
      animationFrame = requestAnimationFrame(smoothScroll);
      list.style.cursor = 'grabbing';
    });

    // Término do arrasto
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        disableImageInteraction(false); // Reativa cliques nas imagens
        cancelAnimationFrame(animationFrame); // Cancela animação
        list.style.cursor = 'grab';
      }
    });

    // Movimento do mouse
    list.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.pageX - list.offsetLeft;
      scrollOffset = (x - startX) * scrollSpeed; // Calcula o deslocamento
    });

    // Eventos de toque para mobile
    list.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX - list.offsetLeft;
      scrollStart = list.scrollLeft;
      disableImageInteraction(true); // Desabilita cliques nas imagens
    });

    list.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX - list.offsetLeft;
      scrollOffset = (x - startX) * scrollSpeed;
      list.scrollLeft = scrollStart - scrollOffset;
    });

    // Reativa eventos nas imagens ao sair da lista
    list.addEventListener('mouseleave', () => {
      isDragging = false;
      disableImageInteraction(false);
    });
  });