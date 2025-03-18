<?php
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);
$message = strtolower($input['message'] ?? '');

$response = "Desculpe, não entendi a sua pergunta.";

if (strpos($message, 'nota') !== false) {
    $response = "Para ver suas notas, acesse o Moodle e vá até 'Minhas Notas'.";
} elseif (strpos($message, 'senha') !== false) {
    $response = "Para recuperar sua senha, clique em 'Esqueci minha senha' na tela de login.";
} elseif (strpos($message, 'suporte') !== false) {
    $response = "Para suporte técnico, entre em contato com a central de atendimento.";
}

echo json_encode(['reply' => $response]);

?>