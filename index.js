const fs = require('fs');
const { execSync } = require('child_process');

// File to update
const FILE_NAME = "random_code.js";

// Function to generate random code
const generateRandomCode = () => {
    const randomCode = `console.log("Random number: ${Math.floor(Math.random() * 10000)}");`;
    fs.writeFileSync(FILE_NAME, randomCode);
};

// Function to commit and push changes
const commitAndPush = () => {
    try {
        execSync(`git config --global user.name "github-actions"`);
        execSync(`git config --global user.email "actions@github.com"`);
        execSync(`git add ${FILE_NAME}`);
        execSync(`git commit -m "Auto-generated commit: ${new Date().toISOString()}"`);
        execSync(`git push`);
        console.log("✅ Changes pushed successfully.");
    } catch (error) {
        console.error("❌ Error pushing to GitHub:", error.message);
    }
};

// Execute once
generateRandomCode();
commitAndPush();
