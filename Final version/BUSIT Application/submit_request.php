<?php
// Load database configuration from environment variables
require_once 'config.php';

$serverName = DB_SERVER;
$connectionOptions = [
    "Database" => DB_NAME,
    "Uid" => DB_USER,
    "PWD" => DB_PASSWORD,
    "TrustServerCertificate" => true
];

// Connect to SQL Server
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    error_log('Database connection failed: ' . print_r(sqlsrv_errors(), true));
    http_response_code(500);
    die('A server error occurred. Please try again later.');
}

// Validate and sanitize POST data
$location = isset($_POST['location']) ? trim($_POST['location']) : null;
$feedback = isset($_POST['feedback']) ? trim($_POST['feedback']) : '';

if (empty($location)) {
    sqlsrv_close($conn);
    http_response_code(400);
    die('Missing required fields.');
}

// Insert into crop_advice_request table
$sql = "INSERT INTO crop_advice_requests (location, feedback) VALUES (?, ?)";
$params = array($location, $feedback);

$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    error_log('Database query failed: ' . print_r(sqlsrv_errors(), true));
    sqlsrv_close($conn);
    http_response_code(500);
    die('A server error occurred. Please try again later.');
}

// Clean up before redirecting
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

header("Location: BUSITFoodBank.html?updated=true");
exit();

?>
