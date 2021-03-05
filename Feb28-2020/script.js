var cat_fact_url = "https://cat-fact.herokuapp.com"

var cat_request = fetch(cat_fact_url+"/facts/random?animal_type=cat&amount=2")

cat_request.then((msg) => {
    return msg.json()
}).then((res) => {
    for ( var info of res){
        console.log(info)
        var ele = document.querySelector("#cat");
        ele.querySelector("#cat a div h5").innerText = info.user;
        ele.querySelector("#cat a > small").innerText = info.type;
        ele.querySelector("#cat a p").innerText = info.text;
        break;
    }
}).catch((err) => {
    console.log(err)
})