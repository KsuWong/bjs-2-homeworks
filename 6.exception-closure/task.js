// Задача 1. Форматтер чисел
function parseCount(parse) {
    if (Number.isNaN(Number.parseFloat(parse))) {
        throw error = new Error("Невалидное значение");
    }
    return Number.parseFloat(parse);
}

function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch (error) {
        return error;
    }
}

// Задача 2. Треугольник
class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error ("Треугольник с такими сторонами не существует")
        }       
    }
   
    get perimeter() {
        return this.a + this.b + this.c;
    }
    
    get area() {
        const p = (this.a + this.b + this.c) / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() { 
                return ("Ошибка! Треугольник не существует"); 
            },
            get perimeter() { 
                return ("Ошибка! Треугольник не существует"); 
            }
        }
    }
}