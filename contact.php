<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit('Please fill all fields with a valid email.');
}

$to = 'support@example.com';
$subject = 'CloudHost Contact Request';
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: no-reply@cloudhost.local\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you! Your message has been sent.';
} else {
    http_response_code(500);
    echo 'Could not send email at this time.';
}
