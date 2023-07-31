const displayMessage = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hi, this is a promise message!");
      }, 2000); 
    });
  };
  
 
  displayMessage().then((message) => {
    console.log(message);
  });