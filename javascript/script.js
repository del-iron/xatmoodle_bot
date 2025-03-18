function sendMessage() {
    // Obtém o valor do input do usuário
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        // Adiciona a mensagem do usuário ao chat
        const chatBox = document.getElementById('chat-box');
        const userMessage = `<div class="message user">${message}</div>`;
        chatBox.innerHTML += userMessage;
        userInput.value = '';

        // Envia a mensagem para o servidor
        fetch('api/chat.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        })
        .then(response => response.json())
        .then(data => {
            // Adiciona a resposta do bot ao chat
            const botMessage = `<div class="message bot">${data.reply}</div>`;
            chatBox.innerHTML += botMessage;
            chatBox.scrollTop = chatBox.scrollHeight;
            // Chama a função para navegação de página
            handlePageNavigation(data.reply);
        })
        .catch(error => console.error('Erro ao enviar a mensagem:', error)); // Adiciona tratamento de erro
    }
}

// Função para navegação de página
function handlePageNavigation(reply) {
    if (reply.includes('navigate to')) {
        const page = reply.split('navigate to ')[1].trim();
        loadChatPage(page);
    }
}

// Função para carregar a página do chat
function loadChatPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const chatContainer = document.getElementById('chat-container');
            if (chatContainer) {
                chatContainer.innerHTML = html;
                loadCSS();
            } else {
                console.error('Elemento chat-container não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao carregar a página do chat:', error));
}

// Função para carregar o CSS
function loadCSS() {
    const head = document.head;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/style.css'; // Corrige o caminho do arquivo CSS
    head.appendChild(link);
}