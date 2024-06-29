let btn=document.querySelector("button");
let p=document.getElementById("Facts");


let url= "https://catfact.ninja/fact ";


btn.addEventListener("click", async()=>{
    let result= await getFacts();
    console.log(result);
    p.innerText=result;
})
async function getFacts(){
    try{
        let res= await axios.get(url);
       return res.data.fact;

    }
    catch(e){
        console.log("Error is ",e);
        return "Fact not found";
    }
}