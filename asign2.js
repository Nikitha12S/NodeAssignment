const fs = require('fs');

const createFile = async () => {
  try {
    await fs.promises.writeFile('example.txt', 'This is an example file.');
    console.log('File created successfully!');
  } catch (error) {
    console.error('Error creating file:', error);
  }
};

// Call the createFile function
createFile();




