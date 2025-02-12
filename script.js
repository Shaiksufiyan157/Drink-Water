const addcolor=document.querySelectorAll('.cup-small');
const liters=document.getElementById('liters')
const percentage=document.getElementById('percentage')
const remained=document.getElementById('remained')
addcolor.forEach((one,idx)=>{
    one.addEventListener('click',()=>highLightCups(idx))
})
updateBigCup()
function highLightCups(idx){
    if(addcolor[idx].classList.contains('active') && !addcolor[idx].nextElementSibling.classList.contains('active')){
        idx--
    }

    addcolor.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('active')
        }
        else{
            cup.classList.remove('active')
        }
    })
    updateBigCup()
}
function updateBigCup(){
    const filled=document.querySelectorAll('.cup-small.active').length
    // console.log(full)
    const allCups=addcolor.length
    console.log(allCups)
    if(filled===0){
        percentage.style.visibility='hidden'
        percentage.style.height=0
    }
    else{
        percentage.style.visibility='visible'
        percentage.style.height=`${filled/allCups*290}px`
        percentage.innerText=`${filled/allCups*100}%`
    }
    if(filled===allCups){
        remained.style.visibility='hidden'
        remained.style.height=0
    }
    else{
        remained.style.visibility='visible'
        liters.innerText=`${2-(250*filled/1000)}L`
    }
}
