const fs = require('fs')


const getUser = (i) => {
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    const users = JSON.parse(data);
    console.log(users.find((user) => user.index === i));
  });
}

module.exports = getUser;

const fs = require('fs');


const postUser = (parameters) => {
  const [name, age, eyeColor] = parameters;
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    
    const users = JSON.parse(data);
    const newUser = {
      name,
      age,
      eyeColor,
      index: users.length,
    }
    users.push(newUser);
    const updatedUsers = JSON.stringify(users, null, 2);
    fs.writeFile('./users.json', updatedUsers, (error) => {
      if (error) {
        throw error;
      }
    });
  })
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('loadend', (event) => {
  console.log(event.target.response);
})

xhr.open('GET', 'http://localhost:3000/users');
xhr.send();


module.exports = postUser;