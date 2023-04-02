// mejora de object literals

function newUser(user, age,  country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("xander", 19, "GT", 1));