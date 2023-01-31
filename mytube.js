let videoDarslar = [
    {
        name: "my Life",
        video:"https://www.youtube.com/embed/ER8a11uRF3M", 
        title:"1-qism",
    },
    { 
        name: "dream Team",
        video:"https://www.youtube.com/embed/-M_MOIFxK-8", 
        title:"2-qism",
    },
    { 
        name: "youtube",
        video:"https://www.youtube.com/embed/t0Q2otsqC4I", 
        title:"3-qism",
    },
    { 
        name: "nupogodi",
        video:"https://www.youtube.com/embed/5oH9Nr3bKfw", 
        title:"4-qism", 
    },
    {
        name: "animation",
        video:"https://www.youtube.com/embed/ER8a11uRF3M", 
        title:"5-qism", 
    },
    { 
        name: "dream works",
        video:"https://www.youtube.com/embed/-M_MOIFxK-8", 
        title:"6-qism",
    },
    { 
        name: "pixar",
        video:"https://www.youtube.com/embed/t0Q2otsqC4I", 
        title:"7-qism",
    },
    { 
        name: "lutsifer",
        video:"https://www.youtube.com/embed/IEM9Q2fdHA0", 
        title:"8-qism",
    },
    {
        name: "poyga",
        video:"https://www.youtube.com/embed/ER8a11uRF3M", 
        title:"9-qism",
    },
    { 
        name: "chaqmoq",
        video:"https://www.youtube.com/embed/t0Q2otsqC4I", 
        title:"10-qism", 
    },
    { 
        name: "muzlik Davri",
        video:"https://www.youtube.com/embed/t0Q2otsqC4I", 
        title:"11-qism",
    },
]

let ichkiDiv = document.querySelector(".quti")

render(videoDarslar)

function render() {
    
    ichkiDiv.innerHTML = "";
    videoDarslar.map(videoDars=>{

    let ichkiNom = videoDars.name.charAt().toUpperCase() 
    let ichkiDavom = videoDars.name.slice(1).toLowerCase()
    const toliqNom = `${ichkiNom}${ichkiDavom}`

    let nomi = document.createElement("h3")
    nomi.innerText = videoDars.title
    nomi.style.color="black"
    nomi.style.textAlign = "center"

    let name = document.createElement("h2")
    name.innerText = toliqNom
    name.style.color="black"
    name.style.textAlign="center"

    let video = document.createElement("iframe")
    video.src = videoDars.video

    let col = document.createElement("div")
    col.classList.add("col-3")

    let quti = document.createElement("div")
    quti.classList.add("card","m-3","p-3")

    quti.appendChild(video)
    quti.appendChild(name)
    quti.appendChild(nomi)
    

    col.appendChild(quti)


    ichkiDiv.appendChild(col)

})
}


function qidirish(mySearch){
    let videoDarslarim = videoDarslar.filter(video=>{
        return video.name.toLowerCase().includes(mySearch.value.toLowerCase())
    })
    render(videoDarslarim)
    console.log(videoDarslarim);
}

