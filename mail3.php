<?php
use PHPMailer\PHPMailer\PHPMailer;
use Symfony\Component\Dotenv\Dotenv;

require './vendor/autoload.php';

    $dotenv = new Dotenv();
    $dotenv->load(__DIR__.'/../.env'); // please update this path for your case

    //nouveau mail objet
    $mail = new PHPMailer;
 
    //server info
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.fr';
    $mail->Port = 587;
    $mail->SMTPAuth = true;

    //mailbot info
    $mail->Username = $_ENV['USERNAME'];
    $mail->Password = $_ENV['PASSWORD'];

    //contenu expéditeur / destinataire
    $mail->setFrom('mailbot@anna-rita-ciufici.com', 'Anna Website Mail');
    // $mail->addAddress('anna.ciufici@live.fr', 'Anna Website Mail');
    $mail->addAddress('marc.aubriot@outlook.fr', 'Anna Website Mail');


    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'Vous avez reçu un email via la boite mail automatique du site web.';
        $mail->isHTML(false);
        $mail->Body = <<<EOT
        E-mail: {$_POST['email']}
        Nom: {$_POST['name']}
        Message: {$_POST['message']}
        EOT;

        
        if (!$mail->send()) {
            $msg = 'Désolé, quelque chose a mal tourné. Veuillez réessayer plus tard.';
        } else {
            $msg = 'Message envoyé ! Merci de nous avoir contactés.';
        }

    } else {
        $msg = 'Partagez-les avec nous !';
    }
?>
