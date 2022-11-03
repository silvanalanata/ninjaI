
function Ninja (nombre){

    this.nombre = nombre
    this.vida = 100
    this.velocidad  = 3
    this.fuerza = 3

   
    this.sayname = function(){
        console.log("el nombre de mi ninja es "+ this.nombre)

    }
    this.showStates = function(){
        console.log("Nombre: "+ this.nombre + "vida: " + this.vida + "velocidad: " + this.velocidad + "fuerza: "+ this.fuerza)

    }
    this.drinkSake = function(){
        let vidaTotal= this.vida +10
        console.log("vida: " +  vidaTotal)

    }

}
let ninja1 = new Ninja("Hyabusa")
ninja1.sayname();
ninja1.showStates();
ninja1.drinkSake();