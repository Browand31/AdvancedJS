var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = Object.toJSON(user1) == Object.toJSON(user2);
alert(eq); // gives true