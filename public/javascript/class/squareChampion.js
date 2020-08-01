class SquareChampion{
    constructor(name, container){
        this.name = name
        $(container).html(`img name=${name} src=img/${name}Square.png>`)
    }
}

module.exports = SquareChampion