async function createFile() {
  try {
    const response = await fetch('http://localhost:3000/file/create_file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fName: "test.txt",
        fData: "Hello this is file content"
      })
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
  }
}

createFile();