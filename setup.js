#!/usr/bin/env node

/**
 * Setup Script for Next.js Boilerplate
 * This script helps initialize a new project from the template
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      if (process.platform === 'win32') {
        execSync(`rmdir /s /q "${dirPath}"`, { stdio: 'ignore' });
      } else {
        execSync(`rm -rf "${dirPath}"`, { stdio: 'ignore' });
      }
      console.log(`✅ Removed ${dirPath}`);
      return true;
    } catch (error) {
      console.log(`⚠️  Could not remove ${dirPath}. Please remove it manually.`);
      return false;
    }
  }
  return false;
}

async function setup() {
  console.log('\n🚀 Welcome to Next.js Boilerplate Setup!\n');
  console.log('This script will help you initialize your new project.\n');

  // Get project name
  const projectName = await question('Enter your project name (e.g., my-awesome-app): ');
  
  if (!projectName || projectName.trim() === '') {
    console.log('❌ Project name is required!');
    rl.close();
    process.exit(1);
  }

  const sanitizedName = projectName.trim().toLowerCase().replace(/\s+/g, '-');

  // Get project description
  const projectDescription = await question('Enter project description (optional): ');

  // Get author name
  const authorName = await question('Enter author name (optional): ');

  console.log('\n📝 Updating project files...\n');

  // Update package.json
  try {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.name = sanitizedName;
    packageJson.version = '0.1.0';
    packageJson.description = projectDescription || `A Next.js project: ${sanitizedName}`;
    
    if (authorName) {
      packageJson.author = authorName;
    }

    // Remove setup script from package.json if it exists
    if (packageJson.scripts && packageJson.scripts.setup) {
      delete packageJson.scripts.setup;
    }

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    console.log('✅ Updated package.json');
  } catch (error) {
    console.log('❌ Error updating package.json:', error.message);
  }

  // Update README.md
  try {
    const readmePath = path.join(__dirname, 'README.md');
    let readme = fs.readFileSync(readmePath, 'utf8');
    
    // Replace title
    readme = readme.replace(/# 🚀 Next\.js Boilerplate/g, `# 🚀 ${projectName}`);
    
    // Replace description
    if (projectDescription) {
      readme = readme.replace(
        /A modern, production-ready Next\.js boilerplate.*/,
        projectDescription
      );
    }
    
    // Remove template-specific instructions
    const setupSection = readme.indexOf('## 🚀 Getting Started');
    if (setupSection !== -1) {
      readme = readme.substring(0, setupSection) + 
        '## 🚀 Getting Started\n\n' +
        '### Prerequisites\n\n' +
        'Make sure you have the following installed:\n' +
        '- Node.js 18+ \n' +
        '- PNPM (recommended) or npm/yarn\n\n' +
        '### Installation\n\n' +
        '1. Install dependencies:\n' +
        '```bash\n' +
        'pnpm install\n' +
        '```\n\n' +
        '2. Start the development server:\n' +
        '```bash\n' +
        'pnpm run dev\n' +
        '```\n\n' +
        '3. Open [http://localhost:3000](http://localhost:3000) in your browser.\n\n' +
        readme.substring(readme.indexOf('## 📜 Available Scripts'));
    }

    fs.writeFileSync(readmePath, readme);
    console.log('✅ Updated README.md');
  } catch (error) {
    console.log('⚠️  Error updating README.md:', error.message);
  }

  // Remove .git directory
  console.log('\n🗑️  Removing old git history...\n');
  removeDirectory(path.join(__dirname, '.git'));

  // Remove setup script
  console.log('\n🧹 Cleaning up setup files...\n');
  try {
    fs.unlinkSync(__filename);
    console.log('✅ Removed setup script');
  } catch (error) {
    console.log('⚠️  Could not remove setup script. You can manually delete setup.js');
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ Setup complete! Your project is ready to go!');
  console.log('='.repeat(60));
  console.log('\n📦 Next steps:');
  console.log('   1. Initialize git:');
  console.log('      git init');
  console.log('      git add .');
  console.log('      git commit -m "Initial commit"');
  console.log('   2. Install dependencies: pnpm install');
  console.log('   3. Start dev server: pnpm run dev');
  console.log('   4. Open: http://localhost:3000');
  console.log('\n🎉 Happy coding!\n');

  rl.close();
}

// Run setup
setup().catch(error => {
  console.error('❌ Setup failed:', error);
  rl.close();
  process.exit(1);
});

