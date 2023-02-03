const btn = document.querySelector('button')
const pictire = document.querySelector('.picture')

const p = document.createElement("p")
const wrap = document.querySelector('.wrap').appendChild(p)
p.style.display="none"


let h2 = document.querySelector("h2")
btn.addEventListener('click', () => {
    if (!pictire.classList.contains('active')) {
        pictire.classList.add('active')
        pictire.style.display = 'block'
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const ipAddress = data.ip;
          p.style.display="block"
           p.innerHTML=ipAddress
        })
        .catch(error => console.error(error));
        


    } else {
        pictire.style.display = 'none'
        pictire.classList.remove('active')
        location.reload()



    
    }
})



