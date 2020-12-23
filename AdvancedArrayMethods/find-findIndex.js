/* findUserByUsername */
const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

function findUserByUsername(users, string) {
  return users.find(function (value) {
    return value.username === string;
  });
}

/* removeUser */

function removeUser(users, string) {
  let x = users.findIndex(function (value) {
    return value.username === string;
  });
  if (x === -1) return;
  console.log(users);
  return users.splice(x, 1)[0];
}
