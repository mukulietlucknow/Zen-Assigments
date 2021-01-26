var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true); 
// here true means if there is any error then it will not make any diffrence except the error in this function
request.send();

// this has been used so that it does not hamper the entire flow of the website
request.onload = function() {
    var data = JSON.parse(request.response) // as response is in string it means we are changin it to json obj
    var countries_from_asia = data.filter(info => info.region == 'Asia')
    var less_than_2 = data.filter(info => info.population < 200000 )
    data.forEach(element => {
        console.log(element.flag, element.name, element.capital, element.currencies)
    })

    var total_population = data.reduce((acc, element) => acc + element.population, 0)

    var doller_country = data.filter(element => {
        for( ele of element['currencies']){ 
            if (ele['code'] == 'USD'){
                return true
            }
        }
        
    })
    console.log(total_population)
    console.log(less_than_2)
    console.log(doller_country)
    console.log(countries_from_asia)
    
}
