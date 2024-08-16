const timesInput = document.getElementById("times")
const faceInput = document.getElementById("face")
const rollBtn = document.getElementById("roll")
const result = document.getElementById("result")

function randomResult(times, face){
    let count = 0
    for(let i = 0; i < times; i++){
        count += Math.floor(Math.random() * face) + 1
    }
    return count
}

rollBtn.addEventListener("click", (event)=>{
    result.innerHTML = `${timesInput.value} d ${faceInput.value} =`
    result.innerHTML += randomResult(timesInput.value, faceInput.value)
})