<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php/PHPMailer-5.2.28/src/Exception.php';
require 'php/PHPMailer-5.2.28/src/PHPMailer.php';
require 'php/PHPMailer-5.2.28/src/SMTP.php';

$mail = new PHPMailer(true);
$mail_to_email = 'pandacyd.developer@gmail.com'; // your email
$mail_to_name = 'Panda Support';

try {

	$mail_from_name = isset( $_POST['name'] ) ? $_POST['name'] : '';
	$mail_from_email = isset( $_POST['email'] ) ? $_POST['email'] : '';
	$mail_message = isset( $_POST['message'] ) ? $_POST['message'] : '';


	// Server settings
	$mail->isSMTP(); // Send using SMTP
	$mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through
	$mail->SMTPAuth = true; // Enable SMTP authentication
	$mail->Username = 'panda15fps@gmail.com'; // SMTP username
	$mail->Password = 'pvquscytcycnbpvz'; // SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
	$mail->Port = 465; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

	$mail->setFrom($mail_to_email, $mail_to_name); // Your email
	$mail->addAddress($mail_from_email, $mail_from_name); // Add a recipient

	// for($ct=0; $ct<count($_FILES['file_attach']['tmp_name']); $ct++) {
	// 	$mail->AddAttachment($_FILES['file_attach']['tmp_name'][$ct], $_FILES['file_attach']['name'][$ct]);
	// }

	// Content
	$mail->isHTML(true); // Set email format to HTML

	$mail->Subject = $mail_title;
	$mail->Body = '
		<strong>Name:</strong> ' . $mail_from_name . '<br>
		<strong>Email:</strong> ' . $mail_from_email . '<br>
		<strong>Message:</strong> ' . $mail_message;

	$mail->Send();

	echo 'El mensaje ha sido enviado';

} catch (Exception $e) {

	echo "No se pudo enviar el mensaje. Error de correo.: {$mail->ErrorInfo}";

}