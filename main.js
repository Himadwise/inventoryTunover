
document.getElementById("moon").addEventListener("click",function(){
    document.getElementById("moon").style.color="white"
    document.body.style="background:white; color:black"
    document.getElementById("title").style.color="black"
    document.getElementById("form").style="background:black; color:white"

    document.getElementById("anchar").style.color="black"
    document.getElementById("ancha").style.color="black"
    document.getElementById("anch").style.color="black"
    document.querySelector(".contact").style.color=" black"
    document.querySelector(".line").style=" border-bottom: 3px dotted black;"
})



document.getElementById("submit").addEventListener("click",function(){
    begining = parseInt(document.getElementById("Binventory").value) 
    ending = parseInt(document.getElementById("Einventory").value) 
    costOfgoods = parseInt(document.getElementById("CostGoods").value) 
    console.log(begining+ending+costOfgoods)

    averageInventory=(begining+ending)/2
    console.log(averageInventory)
    inventoryTurnover=costOfgoods/averageInventory
    console.log(inventoryTurnover)
    DaysInventory=365/inventoryTurnover

    document.getElementById("Inventoryratio").value=inventoryTurnover.toFixed(2)
    document.getElementById("DaysIn").value=DaysInventory.toFixed(2)
    console.log(DaysInventory)
})

document.getElementById("cancel").addEventListener("click",function(){
    begining = parseInt(document.getElementById("Binventory").value="") 
    ending = parseInt(document.getElementById("Einventory").value="") 
    costOfgoods = parseInt(document.getElementById("CostGoods").value="") 
    document.getElementById("Inventoryratio").value=""
    document.getElementById("DaysIn").value=""
})
