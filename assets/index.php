<!-- index.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot Moodle</title>
    <link rel="stylesheet" href="assets/style.css"> <!-- Corrige o caminho do CSS -->
</head>
<body>
    <?php include 'includes/header.php'; ?>

    <div class="chat-container" id="chat-container"> <!-- Adiciona o ID chat-container -->
        <div class="chat-box" id="chat-box">
            <div class="message bot">Olá! Como posso ajudar você com o Moodle hoje?</div>
        </div>
        <div class="input-area">
            <input type="text" id="user-input" placeholder="Digite sua mensagem...">
            <button onclick="sendMessage()">➤</button>
        </div>
    </div>

    <?php include 'includes/footer.php'; ?>

    <script src="javascript/script.js"></script> <!-- Corrige o caminho do script -->
</body>
</html>