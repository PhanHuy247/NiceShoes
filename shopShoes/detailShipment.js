function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    let arrar = url.split("id=");
    return arrar[1]
}
var item0 = localStorage.getItem(getParameterByName())
item0 = JSON.parse(item0)
document.getElementById("name1").innerHTML = item0.name
document.getElementById("name2").innerHTML = item0.name
document.getElementById("review").innerHTML = item0.review
document.getElementById("des1").innerHTML = item0.des1
document.getElementById("des2").innerHTML = item0.des2
document.getElementById("price1").innerHTML = item0.des1
document.getElementById("price2").innerHTML = item0.des1

document.getElementById("slide01").src = item0.image
document.getElementById("slide1").href = item0.image

document.getElementById("slide02").src = item0.image2[0]
document.getElementById("slide2").href = item0.image2[0]

document.getElementById("slide03").src = item0.image2[1]
document.getElementById("slide3").href = item0.image2[1]

document.getElementById("slide04").src = item0.image2[2]
document.getElementById("slide4").href = item0.image2[2]

document.getElementById("slide05").src = item0.image2[3]
document.getElementById("slide5").href = item0.image2[3]

document.getElementById("image01").src = item0.image
document.getElementById("image1").href = item0.image

document.getElementById("image02").src = item0.image2[0]
document.getElementById("image2").href = item0.image2[0]

document.getElementById("image03").src = item0.image2[1]
document.getElementById("image3").href = item0.image2[1]

document.getElementById("image04").src = item0.image2[2]
document.getElementById("image4").href = item0.image2[2]

document.getElementById("image05").src = item0.image2[3]
document.getElementById("image5").href = item0.image2[2]


