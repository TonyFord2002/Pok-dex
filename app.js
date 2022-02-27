// let p = new Promise((resolve, reject) => {
//     let a = 1+1
//     if( a == 2){
//         resolve("Success")
//     }else{

//         reject("Failed")
//     }
// })
// p.then((message)=>{
//     console.log("We are in the then " + message)

// }).catch((message)=>{
//     console.log("we are in the catch " + message)
// })

// function getName(){
// let newName = new Promise((resolve, reject)=>{
//     let n = document.querySelector("#input")
//         if(n.length > 2){
//             resolve("Welcome")
//         }else{
//             reject("Error")
//         }
// })

// newName.then ((message) =>{
//     console.log(message + ` ${n}`)
// }).catch((message)=>{
//     console.log(message + " Please try again")
// })}
// let btn = document.getElementById("btn")
// btn.addEventListener("click", getName)



var pokeName = document.querySelector('#pokeName')
var pokeType = document.querySelector('#pokeType')
var pokeNum = document.querySelector('#pokeNum')
var pokeWeight = document.querySelector('#pokeWeight')
var pokeHeight= document.querySelector('#pokeHeight')
var pokeAbility1 = document.querySelector('#pokeAbility1')
var pokeAbility2 = document.querySelector('#pokeAbility2')
var frontPokeImg = document.querySelector('#frontPokeImg')
var backPokeImg = document.querySelector('#backPokeImg')
var pokemon = document.querySelector('#pokemon')

function getPokemon(){
//get data from url/api
fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemon.value)
// use .then to handle the resopnse/reject promise
.then((res)=>{
   return res.json()
})
.then((data)=>{

    if(data.types.length>1){pokeType.textContent ="Type: " + data.types[0].type.name + " and " + data.types[1].type.name}
    else
    {pokeType.textContent = "Type: " + data.types[0].type.name}

    if(data.abilities.length > 1){pokeAbility2.textContent=('Ability 2: ' + data.abilities[1].ability.name)}
    else{pokeAbility2.textContent= 'Ability 2: None'}

    pokeName.textContent=("Name: " + data.name)
    pokeNum.textContent="ID number: " + data.id
    pokeWeight.textContent="Weight: " + data.weight + " lbs"
    pokeHeight.textContent="Height: " + data.height*10 + " cm"
    frontPokeImg.setAttribute('src', `${data.sprites.front_default}`)
    backPokeImg.setAttribute('src', `${data.sprites.back_default}`)
    pokeAbility1.textContent='Ability 1: ' + data.abilities[0].ability.name
})
}

let btn = document.getElementById("btn")
btn.addEventListener("click", getPokemon)
btn.addEventListener("touchstart", getPokemon)