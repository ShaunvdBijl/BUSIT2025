--Security
	-- Step 1: Create Login at the Server Level
CREATE LOGIN farming_user WITH PASSWORD = 'adminUs3rL0gin911';

-- Step 2: Use your database
USE seed_tracking_new;

-- Step 3: Create User in the Database
CREATE USER farming_user FOR LOGIN farming_user;

-- Step 4: Give necessary permissions (adjust if needed)
ALTER ROLE db_owner ADD MEMBER farming_user;

EXECUTE AS USER = 'farming_user';
SELECT * FROM fn_my_permissions('crop_advice_request', 'OBJECT');
REVERT;