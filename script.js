// Get Start button
function showMessage(){
    alert("Welcome To TechNova!")
}
document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector("#features").scrollIntoView({
        behavior:"smooth"

    });
});

// contact us
document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault();
    alert("your message has been sent successfully!");
    this.reset();

});
console.log("javascript is connected")