try{
    const menu = document.querySelector('#menu')
    const menubox = document.querySelector('#menubox')
    const list = ['intro','produtos','contatos']

    menu.addEventListener('click',()=>{
        document.querySelector('#logo').classList.toggle('click')
        menu.classList.toggle('click')
        menubox.classList.toggle('click')
    })


    for(n = 0; n < list.length; n++){
        var li = document.createElement('li')
        document.querySelector('#nav').appendChild(li)
        var a = document.createElement('a')
        a.innerText = list[n]
        a.setAttribute('href',`#${list[n]}`)
        a.setAttribute('class','navigation')
        li.appendChild(a)
        /*if (n == 0)
            a.style.borderRadius = '50px 0 0 50px'
        else if(n == list.length - 1)
            a.style.borderRadius = '0 50px 50px 0'
        else
            a.style.borderRadius = '0'
        */
    }

    window.addEventListener('scroll', ()=>{
        scroll = window.scrollY
        height = window.screen.height
        if(scroll > height / 2){
            console.log('chegou')
            document.querySelector('#produtos').style.left = 0
            document.querySelector('#produtos').style.opacity = 1
        }
    })
} catch(erro){
    alert(`Erro: ${erro}`)
}