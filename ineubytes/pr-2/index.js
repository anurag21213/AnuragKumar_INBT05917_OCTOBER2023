const accessKey="F_FMwp4cDaKf9d5hbhfOSU5TsjbR9FP5cpbjn0w4ym0"

const formEl=document.querySelector('.searchEl')
const container=document.querySelector('.con')
const searchBtn=document.querySelector('.sbtn')

const searchImage=async()=>{
    container.innerHTML=" "
   const url=`https://api.unsplash.com/search/photos?query=${formEl.value}&client_id=${accessKey}`
   const res=await fetch(url)
   const data=await res.json()
   
   const result=data.results
   
   result.map((resu)=>{
    const crd=document.createElement('div')
    crd.classList.add("cards")
    const imge=document.createElement('img')
    imge.src=resu.urls.small
    imge.alt=resu.alt_description

    crd.appendChild(imge)
    container.appendChild(crd)
   })

}

searchBtn.addEventListener('click',searchImage)
