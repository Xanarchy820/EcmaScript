function newUser(name, age, country) {
    var name = name || "Samuel";
    var age = age || 19;
    var country = country || "Guatemala";

    console.log(name, age, country);
}

newUser();
newUser("David", 15, "Colombia");

function newAdmin(name = "Samuel", age = 19, country = "GT") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "PE");