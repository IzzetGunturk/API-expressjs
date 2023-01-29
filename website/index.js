document.querySelector("button").addEventListener("click",()=>{
    console.debug("Retrieving list from API");
    fetch("http://localhost:8080/cars/").then((response)=>{
        return response.json();
    }).then((data)=>{
       console.log(data);
    });
});