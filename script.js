// Hamburger button

const hamburger = document.getElementsByClassName("hamburger")[0];
const navigation = document.getElementById('for_js');
const body = document.getElementsByTagName('body')[0];
console.log(body)

hamburger.addEventListener('click',()=>{
    if(navigation.style.display != 'none'){
        navigation.style.display = "none";
        body.style.overflow = "visible";
    }
    else{
        navigation.style.display = "flex";
        body.style.overflow = "hidden"
    }
})

