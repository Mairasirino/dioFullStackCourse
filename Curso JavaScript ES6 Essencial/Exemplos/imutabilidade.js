const user = {
  name: 'Maira',
  lastName: 'Sirino'
}

function getUserWithfullName(user) {
  return {
    user,
    fullName: '$(user.name)  $(user.lastName)'
  }
}

const userWithFullName = getUserWithfullName(user)

console.log(userWithFullName, user)
