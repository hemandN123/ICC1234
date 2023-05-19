<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "ddd336968@example.com"; // your email address
  $subject = "Get In Touch"; // email subject
  $message = "First Name: " . $_POST["fname"] . "\n"
           . "Last Name: " . $_POST["lname"] . "\n"
           . "Email: " . $_POST["email"] . "\n"
           . "Message: " . $_POST["message"]; // email message
  $headers = "From: " . $_POST["email"]; // sender's email address

  if (mail($to, $subject, $message, $headers)) {
    echo "Thank you for your submission. We will get back to you shortly!";
  } else {
    echo "Error sending email.";
  }
}
?>
