//console.log('%c HI', 'color: firebrick')
const dogContainer = document.getElementById("dog-image-container")
const breedContainer = document.getElementById("dog-breeds")
const breedDropDown = document.getElementById("breed-dropdown")


fetch("https://dog.ceo/api/breeds/image/random/4")

.then(resp => resp.json())
.then((breeds) => 
{
    breeds.message.forEach(img => 
    {
        renderDog(img)
    }
    )
})

fetch("https://dog.ceo/api/breeds/list/all")
.then(resp => resp.json())
.then((breeds) => 
{
   Object.keys(breeds.message).forEach(key => 

    {
        dogList(key)
    }
    ) 
})

function dogList(item) 
{
    const liTag = document.createElement('li')
    liTag.innerHTML = item
    breedContainer.append(liTag)
    liTag.addEventListener("click", () => console.log("clicked"))
    breedDropDown.addEventListener("click", dropDownListener);
    
}

 function renderDog(image) 
 {
    const imgTag = document.createElement('img')
    imgTag.src = image
    dogContainer.append(imgTag)

 }

 function dropDownListener() 
 {
     clearList()
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then((breeds) => 
    {
       Object.keys(breeds.message).forEach(key => 
    
        {
           if (key.startsWith(this.value))
           {
            console.log(key)
            dogList(key)
           }
        }) 

    })
    
 }
 function clearList ()
 {
breedContainer.innerHTML = ""

 }