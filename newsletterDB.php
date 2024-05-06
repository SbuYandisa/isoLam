<?php
    $email = $_POST['email'];
    $subscriptionDate = date('Y-m-d H:i:s'); //current date and time
    $comfirmationStatus = false;
    $subscriptionStatus = true;

    //Database connection
    $conn = new mysqli('localhost', 'root', '', 'newsletter');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into emails(EmailAddress, SubscriptionDate, ConfirmationStatus, SubscriptionStatus)
        values(:email, :subscriptionDate, :comfirmationStatus, :subscriptionStatus)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':subscriptionDate', $subscriptionDate);
        $stmt->bindParam(':comfirmationStatus', $comfirmationStatus, PDO::PARAM_BOOL);
        $stmt->bindParam(':subscriptionStatus', $subscriptionStatus, PDO::PARAM_BOOL);
        $stmt->execute();
        echo "Email has been successfully added";
        $stmt->close();
        $conn->close();
    }
?>