let demo = document.getElementById("demo")
demo.children[4].onmouseenter = (e) => {
    e.preventDefault()
    let demo1 = document.getElementById("demo1")
    // console.log(demo1);
    let display = demo1.classList.toggle("block")
    if(display)
        demo1.style.display = "block"
    else {
        demo1.style.display = "none"
    }
}

demo.children[3].onmouseleave = (e) => {
    e.preventDefault()
    let dem1 = document.getElementById("demo1")
    // console.log(drop_down);
    let display = dem1.classList.toggle("none")
    if(display)
        dem1.style.display = "none"
    else {
        dem1.style.display = "block"
    }
}

let demo2 = document.getElementById("demo1")
demo2.onmouseenter = (e) => {
    e.preventDefault()
    let demo2 = document.getElementById("demo1")
    // console.log(demo1);
    let display = demo2.classList.toggle("block")
    if(display)
        demo2.style.display = "block"
    else {
        demo2.style.display = "none"
    }
}
demo1.onmouseleave = (e) => {
    e.preventDefault()
    let demo3 = document.getElementById("demo1")
    // console.log(drop_down);
    let display = demo3.classList.toggle("none")
    if(display)
        demo3.style.display = "none"
    else {
        demo3.style.display = "block"
    }
}

let services = document.getElementById("services")
services.onmouseenter = (e) => {
    e.preventDefault()
    let drop_down = document.getElementById("drop-down")
    // console.log(drop_down);
    let display = drop_down.classList.toggle("block")
    if(display)
        drop_down.style.display = "block"
    else {
        drop_down.style.display = "none"
    }
}

services.onmouseleave = (e) => {
    e.preventDefault()
    let drop_down = document.getElementById("drop-down")
    // console.log(drop_down);
    let display = drop_down.classList.toggle("none")
    if(display)
        drop_down.style.display = "none"
    else {
        drop_down.style.display = "block"
    }
}

let drop_down = document.getElementById("drop-down")
drop_down.onmouseenter = (e) => {
    e.preventDefault()
    let drop_down = document.getElementById("drop-down")
    // console.log(drop_down);
    let display = drop_down.classList.toggle("block")
    if(display)
        drop_down.style.display = "block"
    else {
        drop_down.style.display = "none"
    }
}

drop_down.onmouseleave = (e) => {
    e.preventDefault()
    let drop_down = document.getElementById("drop-down")
    // console.log(drop_down);
    let display = drop_down.classList.toggle("none")
    if(display)
        drop_down.style.display = "none"
    else {
        drop_down.style.display = "block"
    }
}

// let edit = document.getElementById("edit_btn")
// edit.addEventListener("click",() =>{
//     window.localStorage.href="http://1227.0.0.1:5500/edit_user.html"
// })