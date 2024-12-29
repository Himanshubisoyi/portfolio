<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $location = trim($_POST['location']);
    $message = trim($_POST['message']);
    if (empty($name) || !preg_match("/^[a-zA-Z\s]+$/", $name)) {
        echo 'Name is required and should contain only letters and spaces.';
        exit;
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address.';
        exit;
    }
    if (empty($phone) || !preg_match("/^[0-9]{10}$/", $phone)) {
        echo 'Phone number must be exactly 10 digits.';
        exit;
    }
    if (empty($location)) {
        echo 'Location is required.';
        exit;
    }
    if (empty($message)) {
        echo 'Message is required.';
        exit;
    }
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'quatibulmujtaba@gmail.com';
        $mail->Password = 'czit fhhc qhad ihpj';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
        $mail->setFrom($email, $name);
        $mail->addAddress('himanshubisoyi7@gmail.com', 'Himanshu');
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';
        $mail->Body = "
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Location:</strong> $location</p>
            <p><strong>Message:</strong> $message</p>
        ";
        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
