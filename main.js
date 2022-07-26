class Fruit{
    constructor(fruitName,FruitColor){
        this.name = fruitName;
        this.color = FruitColor;
        this.taste = "Sweet";
    }
    showInfo(){
        console.log(`${this.name} ${this.color} ${this.taste}`);
    }
}



class Person{
    constructor(PersonWeight,PersonHeight){
        this.height = PersonHeight;
        this.weight = PersonWeight;
        this.look = "Lamba Chauda Handsome";
    }
    show(){
        console.log(`${this.height} ${this.weight} ${this.look}`)
    }
}

class Car{
    constructor(speed,stop,color,average,year){
        this.speed = speed;
        this.color = color;
        this.stop = stop;
        this.year = year;
        this.average = average;
     
    }

    carInfo(){
        console.log(`${this.speed} ${this.color} ${this.stop} ${this.average} ${this.date}`);         
        let date = new Date();
        return  date.getFullYear() - this.year;
        
    }
}

const fruit = new Fruit("mango","yellow");
const person = new Person(49,5.5);
const car = new Car(200 , "Red_signal", "White",35,2001);
console.log(`${car.carInfo()}`)




// fruit.showInfo();
// person.show();
car.carInfo();