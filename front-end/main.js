// const fs = require('fs')
const xhr = new XMLHttpRequest();


const getUser = (i) => {
  xhr.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }
    const users = JSON.parse(data);
    console.log(users.find((user) => user.index === i));
  });
}

module.exports = getUser;


const postUser = (parameters) => {
  const [name, age, eyeColor] = parameters;
  xhr.readFile('./users.json', (error, data) => {
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
    xhr.writeFile('./users.json', updatedUsers, (error) => {
      if (error) {
        throw error;
      }
    });
  })
}


xhr.addEventListener('loadend', (id) => {
  console.log(event.target.response);
})

xhr.open('GET', `http://localhost:3000/users[${id}]`);
xhr.send();


module.exports = postUser;