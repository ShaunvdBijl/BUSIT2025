<?php
// Database connection settings
$serverName = "localhost\\SQLEXPRESS,61187"; // Correct for named instance
$connectionOptions = [
    "Database" => "seed_tracking_new",
    "Uid" => "farming_user",
    "PWD" => "adminUs3rL0gin911",
    "TrustServerCertificate" => true
];

// Connect to SQL Server
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die(print_r(sqlsrv_errors(), true));
}

// Get form data from POST
$location = $_POST['location'];
$feedback = $_POST['feedback'];

// Insert into crop_advice_request table
$sql = "INSERT INTO crop_advice_requests     (location, feedback) VALUES (?, ?)";
$params = array($location, $feedback);

$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
} else {
    header("Location: BUSITFoodBank.html?updated=true");
    exit();
}

// Clean up
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

?>
