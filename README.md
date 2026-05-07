# BUSIT - Community Farming Platform

## Project Description

BUSIT is a comprehensive web-based platform designed to support community farming initiatives. It provides farmers and agricultural enthusiasts with tools for crop advice requests, virtual reality farming simulations, food bank assistance, and educational farming guides. The platform integrates modern web technologies with database management to facilitate seed tracking, planting advice, and technology integration in agriculture.

Built with HTML, CSS, JavaScript for the frontend, PHP for backend processing, and SQL Server for data management, BUSIT aims to bridge the gap between traditional farming practices and digital innovation.

## Features Overview

- **User Authentication**: Sign up and login functionality for personalized access
- **Crop Advice Requests**: Submit location-based requests for agricultural advice
- **VR Farming Simulation**: Immersive virtual reality experience using A-Frame for learning farming techniques
- **Food Bank Assistance**: Resources and support for food bank operations
- **Farming Guides**: Educational content and crop advice resources
- **Seed Tracking System**: Database-driven tracking of seeds, customers, and planting details
- **Technology Integration**: Support for modern farming technologies like drones, AI sensors, and 3D printing

## Installation Instructions

### Prerequisites

- **Web Server**: Apache, Nginx, or IIS
- **PHP**: Version 7.4 or higher with SQL Server extensions enabled
- **SQL Server**: Microsoft SQL Server 2019 or later (Express edition is sufficient)
- **Web Browser**: Modern browser with JavaScript enabled (Chrome, Firefox, Edge recommended)
- Docker Desktop installed
- Docker Compose available

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/busit.git
   cd busit
   ```

2. **Set Up the Database**
   - Install and configure SQL Server
   - Run the database setup script:
     ```sql
     -- Execute BusIT_-_SQLQuery2[1].sql to create the database schema
     ```
   - Create the database user and permissions as outlined in `SQL Security Query.sql`

3. **Configure Database Connection**
   - Update `submit_request.php` with your SQL Server connection details
   - For security, consider moving credentials to environment variables

4. **Deploy to Web Server**
   - Copy the `BUSIT Application/` folder to your web server's document root
   - Ensure PHP has write access to necessary directories
   - Configure your web server to serve PHP files
     
5.**Docker Deployment**
   -BUSIT also supports a Docker-based deployment with PHP/Apache and SQL Server.

6. **Install Dependencies**
   - No additional dependencies required for basic functionality
   - A-Frame library is loaded via CDN for VR features

7. **Access the Application**
   - Open your browser and navigate to `http://localhost/BUSIT Application/`
   - The application will redirect to the home page

## Basic Usage Examples

### Accessing the Platform
1. Open the home page (`BUSITHome Page.html`)
2. Sign up for a new account or log in with existing credentials

### Requesting Crop Advice
1. Navigate to "Request Crop Service"
2. Fill in your location and any additional feedback
3. Submit the form - data will be stored in the database

### Using VR Farming Simulation
1. Go to "VR Farming Simulation"
2. Click "Start VR Simulation" to begin the immersive experience
3. Use VR headset or mouse/keyboard for interaction

### Viewing Farming Guides
1. Access "Farming Guides" from the navigation menu
2. Browse available crop advice and farming techniques

## Configuration Options

### Database Configuration
Edit `submit_request.php` to modify:
- Server name and instance
- Database name
- Authentication credentials

Example configuration:
```php
$serverName = "localhost\\SQLEXPRESS,1433";
$connectionOptions = [
    "Database" => "seed_tracking_new",
    "Uid" => "your_username",
    "PWD" => "your_secure_password",
    "TrustServerCertificate" => true
];
```
### 1. Copy `.env.example` to `.env`:

   powershell
   copy .env.example .env
### Environment Variables (Recommended)
For better security, create a `.env` file (ignored by Git) and load credentials from there.

### Web Server Configuration
- Ensure PHP extensions: `sqlsrv`, `pdo_sqlsrv` are enabled
- Configure appropriate file permissions
- Set up SSL/TLS for production deployments

## Troubleshooting

### Common Issues

**Database Connection Failed**
- Verify SQL Server is running and accessible
- Check server name, port, and credentials in `submit_request.php`
- Ensure SQL Server Browser service is running for named instances
- Confirm firewall settings allow connections

**PHP Errors**
- Check PHP error logs for detailed error messages
- Ensure required PHP extensions are installed and enabled
- Verify file permissions allow PHP to execute

**VR Simulation Not Loading**
- Ensure internet connection for A-Frame CDN loading
- Check browser compatibility (modern browsers required)
- Disable browser extensions that may block WebGL

**Form Submissions Not Working**
- Verify database tables exist and are properly structured
- Check PHP configuration for POST data handling
- Ensure `submit_request.php` has correct file permissions

**Page Not Found Errors**
- Confirm all files are in the correct directory structure
- Check web server configuration for URL rewriting
- Verify base URLs in navigation links

### Debugging Tips
- Enable PHP error reporting in development
- Use browser developer tools to inspect network requests
- Check SQL Server logs for database-related issues
- Test database connectivity separately using SQL Server Management Studio

## Contributing Guidelines

We welcome contributions to improve BUSIT! Please follow these guidelines:

### How to Contribute
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

### Code Standards
- Follow consistent indentation (4 spaces for PHP, 2 spaces for HTML/CSS/JS)
- Use meaningful variable and function names
- Add comments for complex logic
- Test all changes before submitting

### Reporting Issues
- Use GitHub Issues to report bugs or request features
- Provide detailed descriptions including steps to reproduce
- Include browser/console error messages when applicable
- Specify your environment (OS, browser, PHP version, etc.)

## License Information

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2023 BUSIT Community Farming Platform

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
