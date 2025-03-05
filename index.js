const fs = require('fs');
const { execSync } = require('child_process');

// GitHub Repository URL
const REPO_PATH = "/home/runner/Replit"; // Replace this with your repo path
const FILE_NAME = "random_code.js";  // File that will be updated
const INTERVAL = 60 * 100;  // Push interval (e.g., every 60 seconds)

// Function to generate random code
const generateRandomCode = () => {
    const randomCode = `console.log("Random number: ${Math.floor(Math.random() * 10000)}");`;
    fs.writeFileSync(`${FILE_NAME}`, randomCode);
};

// Function to commit and push changes
const commitAndPush = () => {
    try {
        execSync(`git add .`);
        execSync(`git commit -m "Auto-generated commit: ${new Date().toISOString()}"`);
        execSync(`git push origin main`);
        console.log("✅ Changes pushed successfully.");
    } catch (error) {
        console.error("❌ Error pushing to GitHub:", error.message);
    }
};

// Run continuously at specified interval
setInterval(() => {
    generateRandomCode();
    commitAndPush();
}, INTERVAL);



