-- Create database
CREATE DATABASE seed_tracking_new;
GO

USE seed_tracking_new;
GO

-- Table for companies
CREATE TABLE companies (
    company_id INT PRIMARY KEY IDENTITY(1,1),
    company_name NVARCHAR(100) NOT NULL,
    contact_email NVARCHAR(100),
    contact_phone NVARCHAR(20),
    address NVARCHAR(255)
);

-- Table for customers
CREATE TABLE customers (
    customer_id INT PRIMARY KEY IDENTITY(1,1),
    first_name NVARCHAR(50) NOT NULL,
    last_name NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) UNIQUE,
    phone NVARCHAR(20),
    company_id INT,
    address NVARCHAR(255),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Table for seed types
CREATE TABLE seed_types (
    seed_type_id INT PRIMARY KEY IDENTITY(1,1),
    type_name NVARCHAR(50) NOT NULL,
    purpose NVARCHAR(255)
);

-- Table for specific seeds
CREATE TABLE seeds (
    seed_id INT PRIMARY KEY IDENTITY(1,1),
    seed_name NVARCHAR(50) NOT NULL,
    seed_type_id INT,
    batch_number NVARCHAR(50) NOT NULL,
    production_date DATE,
    FOREIGN KEY (seed_type_id) REFERENCES seed_types(seed_type_id)
);

-- Table for transport details
CREATE TABLE transport (
    transport_id INT PRIMARY KEY IDENTITY(1,1),
    seed_id INT,
    customer_id INT,
    transport_method NVARCHAR(50),
    package_type NVARCHAR(100),
    storage_conditions NVARCHAR(255),
    transport_date DATE,
    FOREIGN KEY (seed_id) REFERENCES seeds(seed_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Table for planting details
CREATE TABLE planting (
    planting_id INT PRIMARY KEY IDENTITY(1,1),
    seed_id INT,
    customer_id INT,
    soil_ph DECIMAL(4,2),
    nutrient_levels NVARCHAR(255),
    planting_method NVARCHAR(50),
    planting_depth DECIMAL(5,2),
    spacing DECIMAL(5,2),
    planting_date DATE,
    FOREIGN KEY (seed_id) REFERENCES seeds(seed_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Table for technology integration
CREATE TABLE technology (
    technology_id INT PRIMARY KEY IDENTITY(1,1),
    seed_id INT,
    customer_id INT,
    technology_type NVARCHAR(50),
    usage_description NVARCHAR(255),
    application_date DATE,
    FOREIGN KEY (seed_id) REFERENCES seeds(seed_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE crop_advice_requests (
    request_id INT PRIMARY KEY IDENTITY(1,1),
    location NVARCHAR(255),
    feedback NVARCHAR(MAX),
    request_date DATETIME DEFAULT GETDATE()
);

-- Insert seed types
INSERT INTO seed_types (type_name, purpose) VALUES
('Cereal Seeds', 'Staple food crops for grain production'),
('Legume Seeds', 'Protein-rich and improve soil through nitrogen fixation'),
('Vegetable Seeds', 'Grown for fresh produce and nutritional variety'),
('Oilseed Crops', 'Used for cooking oil and livestock feed'),
('Forage Seeds', 'Planted for animal feed and pasture');

-- Insert seeds
INSERT INTO seeds (seed_name, seed_type_id, batch_number, production_date) VALUES
('Maize', 1, 'BATCH001', '2025-01-15'),
('Beans', 2, 'BATCH002', '2025-02-01'),
('Tomato', 3, 'BATCH003', '2025-03-10'),
('Sunflower', 4, 'BATCH004', '2025-04-05'),
('Alfalfa', 5, 'BATCH005', '2025-04-10'),
('Wheat', 1, 'BATCH006', '2025-01-20'),
('Lentils', 2, 'BATCH007', '2025-02-12'),
('Carrot', 3, 'BATCH008', '2025-03-20');

-- Insert companies
INSERT INTO companies (company_name, contact_email, contact_phone, address) VALUES
('AgriTech Solutions', 'contact@agritech.com', '+27 11 555 0101', '123 Farm Road, AgriCity'),
('GreenFields Co.', 'info@greenfields.com', '+27 21 555 0102', '456 Rural Lane, Farmtown'),
('SeedWorks SA', 'admin@seedworks.co.za', '+27 31 555 0103', '789 Agro Blvd, Durban'),
('EcoPlant Africa', 'support@ecoplant.africa', '+27 41 555 0104', '321 Green St, PE');

-- Insert customers
INSERT INTO customers (first_name, last_name, email, phone, company_id, address) VALUES
('John', 'Doe', 'john.doe@email.com', '+27 82 123 4567', 1, '789 Harvest St, AgriCity'),
('Jane', 'Smith', 'jane.smith@email.com', '+27 83 567 8910', 2, '101 Pasture Rd, Farmtown'),
('Thabo', 'Mokoena', 'thabo.m@email.com', '+27 84 321 0987', 3, '303 Maize Way, Pretoria'),
('Zanele', 'Nkosi', 'zanele.nkosi@email.com', '+27 85 765 4321', 4, '55 Vineyard Lane, Cape Town');

-- Insert transport data
INSERT INTO transport (seed_id, customer_id, transport_method, package_type, storage_conditions, transport_date) VALUES
(1, 1, 'Truck', 'Airtight bags', 'Cool and dry', '2025-01-20'),
(2, 2, 'Tractor', 'Moisture-proof bags', 'Dry warehouse', '2025-02-05'),
(3, 3, 'Drone', 'Sealed containers', 'Shaded and cool', '2025-03-12'),
(4, 4, 'Truck', 'Plastic sacks', 'Cool storage', '2025-04-07');

-- Insert planting data
INSERT INTO planting (seed_id, customer_id, soil_ph, nutrient_levels, planting_method, planting_depth, spacing, planting_date) VALUES
(1, 1, 6.5, 'High Nitrogen', 'Manual', 5.00, 30.00, '2025-01-25'),
(2, 2, 6.8, 'Moderate Phosphorus', 'Mechanical seed drill', 4.00, 25.00, '2025-02-10'),
(3, 3, 6.2, 'Balanced NPK', 'Manual', 3.50, 20.00, '2025-03-15'),
(4, 4, 7.0, 'High Potassium', 'Mechanical', 6.00, 40.00, '2025-04-12');

-- Insert technology integration data
INSERT INTO technology (seed_id, customer_id, technology_type, usage_description, application_date) VALUES
(1, 1, 'Drone', 'Aerial seed spreading', '2025-01-28'),
(2, 2, 'VR', 'Field simulation training', '2025-02-15'),
(3, 3, '3D Printing', 'Custom seeding tools', '2025-03-20'),
(4, 4, 'AI Sensors', 'Soil and climate monitoring', '2025-04-18');
