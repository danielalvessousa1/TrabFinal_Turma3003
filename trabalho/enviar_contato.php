<?php

$mysqli = new mysqli("localhost", "root", "", "contato"); // Criar conexão

$nome = mysqli_real_escape_string($mysqli, $_POST["nome"]); // Criar conexão Nome
$telefone = mysqli_real_escape_string($mysqli, $_POST["telefone"]); // Criar telefone
$email = mysqli_real_escape_string($mysqli, $_POST["email"]); // Criar conexão Email


// redundancias para o enio corretor ou errado dos dados
if ($nome != '' && $telefone != '' && $email !='') { 
    $sql = "
        INSERT INTO contatos (nome, telefone, email)
        VALUES ('$nome', '$telefone', '$email');
    ";
    $query = $mysqli->query($sql);

    if ($query) {
        echo "Seu contato foi salvo!";
    } else {
        echo "Erro ao salvar o seu contato!";
    }
}
else {
    echo "Por favor, digite seu nome, telefone e email!";
}