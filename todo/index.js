function add() {
    let inpt = document.querySelector('.inp')
    let inp = inpt.value
    let hsl = document.querySelector('.hsl')
    let txt = `<li style="list-style-type: none;"> <span onclick="tg(this)"> ${inp} </span><span onclick="del(this)">[x]</span></li>`
    if (inp === '') return
    if (inp.includes('<') && inp.includes('>')) return `(Don't use '<' & '>')`
    hsl.insertAdjacentHTML('beforebegin', txt)
    inpt.value = ''
    console.log(inp)
}
function tg(el){
    el.classList.toggle('coret')
}
function del(el){
    el.parentElement.remove()
}
function ent(e){
    if(e && e.which){
        charCode = e.which;
    }else if(window.event){
        e = window.event;
        charCode = e.keyCode;
    }
    if(charCode == 13) add()
}