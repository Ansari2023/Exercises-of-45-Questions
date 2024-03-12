// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ["Imran", "Ahmed", "Ansari", "Asad", "Asif", "Amir", "Atif", "Umer", "Ali",];
var message = "=kal ka kia program hy?";
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i] + message);
}
