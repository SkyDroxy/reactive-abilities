const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'module.json');

const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const currentVersion = data.version;

console.log(`Version actuelle : ${currentVersion}`);

const versionParts = currentVersion.split('.');
versionParts[2] = (parseInt(versionParts[2], 10) + 1).toString();
const newVersion = versionParts.join('.');

data.version = newVersion;
data.download = `https://github.com/SkyDroxy/reactive-abilities/releases/download/v${newVersion}/reactive-abilities.zip`;

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Version mise à jour à ${newVersion}`);
console.log(`Lien de téléchargement mis à jour : ${data.download}`);
// Création du zip du projet
const archiver = require('archiver');

const outputZip = path.join(__dirname, 'reactive-abilities.zip');
const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
	console.log(`Archive créée : ${outputZip} (${archive.pointer()} octets)`);
});

archive.on('error', err => { throw err; });

archive.pipe(output);

// Exclure .git, le script lui-même et le zip
archive.glob('**/*', {
	ignore: ['.git/**', 'update-version.js', 'reactive-abilities.zip']
});

archive.finalize();