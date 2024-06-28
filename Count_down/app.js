const endDate = " 8 may 2024 09:15 AM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")
// const clock = () =>{
//     const end = new Date(endDate)
//     const now = new Date
//     console.log(end , now)
// }
// clock()

function clock(){
    const end = new Date(endDate)
    const now = new Date
    const diff = (end-now)/1000;

    if (diff<0) return;

    inputs[0].value = Math.floor(diff/3600/24);// for days
    inputs[1].value = Math.floor(diff/3600) % 24; //for hours
    inputs[2].value = Math.floor(diff/60) % 60 ; //for minuts
    inputs[3].value = Math.floor(diff) % 60; // for seconds
    
}
clock()

setInterval(
    ()=>{
        clock()
    },
    1000
)