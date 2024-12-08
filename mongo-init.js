// Create a new database and switch to it
db = db.getSiblingDB('MyDB');

// Create a user for this specific database
db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [
        {
            role: 'readWrite',
            db: 'MyDB'
        }
    ]
});

// Optional: Create some initial collections
db.createCollection('test');