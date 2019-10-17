const users = [
  { username: 'Sandy', loggedIn: false },
  { username: 'Alice', loggedIn: true },
  { username: 'Bob', loggedIn: true },
  { username: 'Carol', loggedIn: false },
  { username: 'Denise', loggedIn: true },
  { username: 'Elizabeth', loggedIn: false },
  { username: 'Francis', loggedIn: false },
];

const loggedInUsers = users.filter((u) => u.loggedIn);
// console.log(loggedInUsers);

const newUsers = users.map((user) => {
  user.loggedIn = false;
  return user;
});
console.log(newUsers);
