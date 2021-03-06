var cat_fact_url = "https://cat-fact.herokuapp.com"

var cat_request = fetch(cat_fact_url+"/facts/random?animal_type=cat&amount=2")

cat_request.then((msg) => {
    return msg.json()
}).then((res) => {
    for ( var info of res){
        var ele = document.querySelector("#cat");
        ele.querySelector("#cat a div h5").innerText = info.user;
        ele.querySelector("#cat a > small").innerText = info.type;
        ele.querySelector("#cat a p").innerText = info.text;
        break;
    }
}).catch((err) => {
    console.log(err)
})

// 2. this one is similar to the upper one so this is just for the practice of

async function execute(){
    try {
        var status = await fetch(cat_fact_url+"/facts/random?animal_type=cat&amount=2");
        var res = await status.json()
        console.log(res)
        for ( var info of res){
            var ele = document.querySelector("#cat");
            ele.querySelector("#cat a div h5").innerText = info.user;
            ele.querySelector("#cat a > small").innerText = info.type;
            ele.querySelector("#cat a p").innerText = info.text;
            break;
        }
    }catch(err){
        console.log(err);
    }
    
}

execute();


// 3. operations

function cat_pic() {
    var url = "https://api.thecatapi.com/v1/images/search"
    var request = fetch(url)
    request.then((response) =>{
        return response.json()
    }).then((msg) => {
        for(let ele of msg){
            var final_url = ele.url
            document.querySelector("#second_operation img").setAttribute('src', final_url)
            break;
        }
    })
}

cat_pic();


//4. operations

function carousel() {
    var url = "https://api.thecatapi.com/v1/images/search"
    var request = fetch(url)
    request.then((response) =>{
        return response.json()
    }).then((msg) => {
        for(let ele of msg){
            var final_url = ele.url
            var string = '<img src="'+final_url+'" style="height: 300px; width: 300px;" class="d-block w-100" alt="">'
            console.log(string);
            var div = document.createElement("div");
            div.innerHTML = string;
            div.setAttribute('class', 'carousel-item');
            document.querySelector("#carouselExampleIndicators .carousel-inner").appendChild(div);
            break;
        }
    })
}

carousel();

// 5. last operation of the task
var cat_fact_url = "https://cat-fact.herokuapp.com"

var cat_request = fetch(cat_fact_url+"/facts/random?animal_type=cat&amount=2")
cat_request.then((msg) => {
    return msg.json()
}).then((res) => {
    for ( var info of res){
        console.log(info)
        var ele = document.querySelector("#exampleModal");
        ele.querySelector("#exampleModal .modal-body").innerText = info.text;
        break;
    }
}).catch((err) => {
    console.log(err)
})