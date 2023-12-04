<?php
print_r($_POST);
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "127.0.0.1:3306";
$username = "u704342219_conner_mkoker";
$password = "Zl5at>y@8";
$dbname = "u704342219_ContactUs_Form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name = isset($_POST["name"]) ? $_POST["name"] : "";
$birthday = isset($_POST["birthday"]) ? $_POST["birthday"] : "";
$zipcode = isset($_POST["zipcode"]) ? $_POST["zipcode"] : "";
$phone = isset($_POST["phone"]) ? $_POST["phone"] : "";
$email = isset($_POST["email"]) ? $_POST["email"] : "";
$message = isset($_POST["message"]) ? $_POST["message"] : "";

// Use prepared statement to prevent SQL injection
$sql = "INSERT INTO form_submissions (name, birthday, zipcode, phone, email, message) 
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $name, $birthday, $zipcode, $phone, $email, $message);

if ($stmt->execute()) {
    echo "New record created successfully";
    echo "Redirecting...";
    header("Location: ../../thankYou.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>