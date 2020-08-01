const squareChampion = require("./squareChampion")

class champion{
    constructor(name){
        this.name = name
        this.counters = []

    }

    addCounter(name, description, difficulty){
        const counter = {}
        counter.name = name
        counter.description = description
        counter.difficulty = difficulty
        this.counters.push(counter)
    }

    loadCounters(container){
        this.counters.forEach(champion => {
            switch(champion.difficulty){
                case "very hard":
                    squareChampion(container, champion.name)

                case "hard":
                    squareChampion(container, champion.name)

                case "challenging":
                    squareChampion(container, champion.name)

                case "okay":
                    squareChampion(container, champion.name)

                case "moderately Easy":
                    squareChampion(container, champion.name)

                case "very Easy":
                    squareChampion(container, champion.name)

                case "free":
                    squareChampion(container, champion.name)
            
            }
        })
    }
}

module.exports = champion

