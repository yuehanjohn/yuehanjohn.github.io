<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['Email-7'];
    $message = $_POST['field'];

    $to = "yuehan.dai.john+website@gmail.com"; // Replace with your email address
    $subject = "Sending from the website visitor";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Thank you! Your submission has been received!";
    } else {
        echo "Oops! Something went wrong while submitting the form.";
    }
}
?>