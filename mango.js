const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://rajpatil4999:<Admin@123>@cluster0.yilrg42.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Print a message to the console once connected
    console.log("Connected to the MongoDB cluster");

    // Perform operations using the client
    // For example, you can access databases, collections, and perform CRUD operations here

  } catch (e) {
    console.error("Error connecting to MongoDB cluster:", e);
  } finally {
    // Close the connection when your application is done with it
    await client.close();
  }
}

// Call the main function to establish the connection
main().catch(console.error);
