// const champion = require("./class/championClass")

const shenObject = {
    aatrox: "This is my personal ban, it’s just a terrible matchup. Try to stay out of his Q range for most of the time except when you *have to walk up for a lasthit. Try to utilize your shield as much as possible to stay healthy, and save your TP if possible so you can R away later, because you’re likely never gonna have the chance to push the wave out in this matchup.",
    Heimerdinger: "This one is rough, he’s constantly pushing you in and poking you under tower, and taunting him is too risky in most situations. The only saving grace is that your W blocks his turret auto’s, which can be helpful to survive. If you survive the lane without dying you will be impacting the game more than heimer soon enough with your R’s.",
    gangplank: "This is my personal ban, it’s just a terrible matchup. Try to stay out of his Q range for most of the time except when you *have to walk up for a lasthit. Try to utilize your shield as much as possible to stay healthy, and save your TP if possible so you can R away later, because you’re likely never gonna have the chance to push the wave out in this matchup."
}

testcontainer = $("#testing")

const shenChampion = new champion("shen")
shenChampion.addCounter("aatrox", shenObject.aatrox, "hard")
shenChampion.addCounter("heimerdinger", shenObject.Heimerdinger, "very easy")
shenChampion.addCounter("aatrox", shenObject.gangplank, "very hard")

shenChampion.loadCounters(testcontainer)