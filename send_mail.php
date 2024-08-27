<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "hedphdo@gmail.com";  // Podaj tutaj swój adres e-mail
    $subject = "Nowa wiadomość od $name";
    $body = "Imię: $name\nE-mail: $email\n\nWiadomość:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana!";
    } else {
        echo "Błąd podczas wysyłania wiadomości.";
    }
}
?>
