const user = {
    name : "Ankit",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()
// console.log(this);

function chai() {
    console.log(this);
    
}
chai()

