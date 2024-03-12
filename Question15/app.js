// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guest_list = ["Imran", "Sunny", "Ali Umer", "Faisal", "Tariq"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir," + guest_list[i] + ",\n'I would like to Invite for Dinner with me at my Home'\n Thank You");
}
var change_guest_list = "Faisal";
var new_guest = "Sohail";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir," + guest_list[i] + ",\n'I would like to Invite for Dinner with me at my Home'\n Thank You");
}
console.log("Mr. ".concat(change_guest_list, " can't came for Dinner at my Home."));
