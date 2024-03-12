// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guest_list: string[] = ["Imran","Sunny","Ali Umer","Faisal","Tariq"];
for (let i = 0; i <guest_list.length; i++){
console.log("Respected Sir," + guest_list[i] + ",\n'I would like to Invite for Dinner with me at my Home'\n Thank You");
}
let change_guest_list : string = "Faisal";
let new_guest : string = "Sohail";
guest_list[3] = new_guest;
for (let i = 0; i <guest_list.length; i++){
    console.log("Respected Sir," + guest_list[i] + ",\n'I would like to Invite for Dinner with me at my Home'\n Thank You");
    }
    console.log(`Mr. ${change_guest_list} can't came for Dinner at my Home.`);
    