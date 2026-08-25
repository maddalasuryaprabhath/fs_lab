//file writing(asynchronous)
const fs = require('fs');
const content = 'This is new content for the file.';
fs.writeFile('newfile(async).txt', content, err => {
  if (err) throw err;
  console.log('File has been saved!');
});

//file writing(synchronous)
try {
  fs.writeFileSync('newfile(synchronous).txt', 'This is new content');
  console.log('File saved synchronously.');
} catch (err) {
  console.error(err);
}