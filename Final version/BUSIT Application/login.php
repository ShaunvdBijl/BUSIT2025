<?php
$username = trim($_POST['username'] ?? '');
$password = trim($_POST['password'] ?? '');

// NOTE: This is a placeholder login endpoint.
// Replace with real authentication logic before using in production.
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Status</title>
    <link rel="stylesheet" href="BUSIT.css">
</head>
<body>
    <header>
        <h1>Community Farming Platform</h1>
    </header>
    <main>
        <h2>Login Received</h2>
        <p>Username: <strong><?php echo htmlspecialchars($username, ENT_QUOTES, 'UTF-8'); ?></strong></p>
        <p>This site does not have a real login backend yet. Please use the <a href="signUp.html">Sign Up</a> page or the home page.</p>
        <p><a href="BUSITHome Page.html">Return to Home</a></p>
    </main>
    <footer>
        <p>&copy; 2026 Community Farming Platform.</p>
    </footer>
</body>
</html>
