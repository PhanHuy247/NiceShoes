var item0 = localStorage.getItem(0)
item0 = JSON.parse(item0)
document.getElementById("nameItem0").innerHTML = item0.name
document.getElementById("price1Item0").innerHTML = item0.price1
document.getElementById("price2Item0").innerHTML = item0.price2
document.getElementById("imageItem0").src = item0.image