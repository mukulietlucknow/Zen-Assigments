var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true); 
// here true means if there is any error then it will not make any diffrence except the error in this function
request.send();

// this has been used so that it does not hamper the entire flow of the website
request.onload = function() {
    var data = JSON.parse(request.response) // as response is in string it means we are changin it to json obj
    for (ele of data) {
        console.log(ele['name'])
    }
}