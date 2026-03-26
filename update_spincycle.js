const fs = require('fs');
const path = require('path');

const repoPath = 'C:/Users/nates/Documents/Blog Site/SpinCycle-Rentals';
const formScript = '<script type="text/javascript" src="https://form.jotform.com/jsform/260805424291050"></script>';
const chatbotScript = "<script src='https://cdn.jotfor.ms/agent/embedjs/019d16b8b7127d53b04a7ecd14b285c8ae82/embed.js'></script>";

const htmlFiles = ['about.html', 'apply.html', 'faq.html', 'index.html', 'pricing.html', 'support.html'];

htmlFiles.forEach(file => {
    const filePath = path.join(repoPath, file);
    if (!fs.existsSync(filePath)) return;

    let html = fs.readFileSync(filePath, 'utf8');

    // Replace Google Form in apply.html
    if (file === 'apply.html') {
        const regex = /<iframe\s+src="https:\/\/docs\.google\.com\/forms[\s\S]*?<\/iframe>/;
        if (regex.test(html)) {
            html = html.replace(regex, formScript);
            console.log('Replaced Google Form in apply.html');
        } else {
            console.log('Google Form iframe not found in apply.html');
        }
    }

    // Add chatbot before closing body tag
    if (html.includes('</body>')) {
        if (!html.includes('019d16b8b7127d53b04a7ecd14b285c8ae82')) {
            html = html.replace('</body>', `    <!-- Jotform Chatbot Embed -->\n    ${chatbotScript}\n</body>`);
            console.log(`Added Chatbot to ${file}`);
        } else {
            console.log(`Chatbot already in ${file}`);
        }
    }

    fs.writeFileSync(filePath, html, 'utf8');
});

console.log('Finished updating SpinCycle-Rentals');
