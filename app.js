let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    let fct = await getFact();
    let p = document.getElementById("para");
    p.textContent = fct;
    
})
let url = "https://catfact.ninja/fact";
async function getFact() {
    try{
        let res = await axios.get(url);
        
        return res.data.fact;
    }catch(err){
        console.log("There was an error", err);
    }
}
let btn2 = document.querySelectorAll('button')[1];
let url2 = "https://dog.ceo/api/breeds/image/random";
let dimg = document.getElementById('di');
btn2.addEventListener('click', async() => {
    let dogimage =  await getImage();
    dimg.setAttribute('src', dogimage);
})
// btn2.addEventListener('click', ()=>{
//     getImage()
//     .then((response)=>{
//         dimg.setAttribute('src', response);
//     })
// })
function getImage() {
    // try{
    //     let img = await axios.get(url2);
    //     return img.data.message;
    // }catch(err){
    //     console.log("There is a problem", err)
    // }
    return axios.get(url2)
    .then((response) => {
        return response.data.message;
    })
    .catch((err) => {
        console.log("There is a problem", err);
    })
}
let bn = document.querySelectorAll('button')[2];
let url3 = "https://api.gameofthronesquotes.xyz/v1/random";
let list = document.getElementById('GOT')
bn.addEventListener('click' , async () => {
    let throneFact = await gotFact();
    let li = document.createElement('li');
    li.innerHTML = throneFact;
    list.appendChild(li);

})
async function gotFact() {
    try{
        let tFact = await axios.get(url3);
        return tFact.data.sentence;
    }catch(err){
        console.log("oops" , err)
    }
}