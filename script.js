let myContainer = document.querySelector(".my-container");

for (let i=1; i <=100; i++) {
    
    if (i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz");
        myContainer.innerHTML += '<div class="square"><p>FizzBuzz</p></div>'
    } else if (i % 5 == 0){
        console.log("Buzz");
        myContainer.innerHTML += '<div class="square"><p>Buzz</p></div>'
    } else if (i % 3 == 0){
        console.log("Fizz");
        myContainer.innerHTML += '<div class="square"><p>Fizz</p></div>'
    } else {
        console.log(i);
        myContainer.innerHTML += '<div class="square"><p>'+ i +'</p></div>'
    };

}