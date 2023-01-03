var body = document.querySelector('body')
var container1 = document.createElement('div')
container1.classList.add('container')
body.append(container1)


  var url = 'https://restcountries.com/v3.1/all'

  var raz = fetch(url)
  .then((response)=>{
    // console.log(response)
    return response.json()
  }) 
  .then((response)=>{
    for(i=0;i<response.length;i++){

    console.log(response[i].capital[0])
    console.log(response[i].region)
    console.log(response[i].cca3)
    console.log(response[i].name.common)
    console.log(response[i].flags.png)
    

       var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${response[i].latlng[0]}&lon=${response[i].latlng[1]}&appid=f7388c3c1452b1ce19ee51cd4ee731c9`

       console.log(weatherUrl)

    var divRow = document.createElement('div')
    divRow.classList.add('row')
    divRow.classList.add('col-lg-4')
    divRow.classList.add('col-sm-12')
    container1.append(divRow)
    

    var divCol = document.createElement('div')
    divCol.classList.add('col')
    divRow.append(divCol)

    var div = document.createElement('div')
    div.classList.add('card')
    div.setAttribute('style','width:18rem;')
    divCol.append(div)

    var capital = document.createElement('h5')
    capital.classList.add('card-title')
    capital.innerHTML = response[i].capital[0]
    div.append(capital)

    var img = document.createElement('img')
    img.setAttribute('src', response[i].flags.png)
    img.setAttribute('alt', response[i].name.common)
    div.append(img)

    var innerDiv = document.createElement('div')
    innerDiv.classList.add('card-body')
    div.append(innerDiv)


    var region = document.createElement('p')
    region.classList.add('card-text')
    region.innerText = response[i].region
    innerDiv.append(region)

    var region1 = document.createElement('p')
    region1.classList.add('card-text')
    region1.innerText = response[i].name.common
    innerDiv.append(region1)

    var countryCode = document.createElement('p')
    countryCode.classList.add('card-text')
    countryCode.innerText = response[i].cca3
    innerDiv.append(countryCode)

    var anchor = document.createElement('a')
    anchor.setAttribute('href',weatherUrl)
    anchor.classList.add('btn')
    anchor.classList.add('btn-primary')
    anchor.innerText = "Click for weather"
    innerDiv.append(anchor)


    }

    
  
  })

