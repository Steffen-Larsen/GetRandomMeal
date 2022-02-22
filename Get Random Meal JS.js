const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() { return this._courses.appetizers; },
    get mains() { return this._courses.mains; },
    get desserts() { return this._courses.desserts;},
    
    set appetizers(appetizers) {this._courses.appetizers = appetizers },
    set mains(mains) {this._courses.appetizers = mains },
    set desserts(desserts) {this._courses.appetizers = desserts },
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) { 
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
     },
     getRandomMeal () {
       const appetizers = this.getRandomDishFromCourse('appetizers');
       const mains = this.getRandomDishFromCourse('mains');
       const desserts = this.getRandomDishFromCourse('desserts');
       const totalPrice = appetizers.price + mains.price + desserts.price;
       return `Your appetizer is:  ${appetizers.name} 
       your main course is:  ${mains.name}
       and your dessert is:  ${desserts.name} 
       - The total cost of your meal is:  ${totalPrice} NOK
       - Thank you for your business and have a nice day :)`
     },
  };
  
  menu.addDishToCourse ('appetizers', 'Salad', 40.25);
  menu.addDishToCourse ('appetizers', 'Chicken wings', 55.00);
  menu.addDishToCourse ('appetizers', 'Onion rings', 35.50);
  
  menu.addDishToCourse ('mains', 'Caramelized pork ribs', 185.00);
  menu.addDishToCourse ('mains', 'Soup of the day', 160.00);
  menu.addDishToCourse ('mains', 'Spaghetti Bolognese', 145.00);
  
  menu.addDishToCourse ('desserts', 'Banana split', 50.00);
  menu.addDishToCourse ('desserts', 'Creme Brulè', 55.00);
  menu.addDishToCourse ('desserts', 'Apple tart', 40.00);
  
  const meal = menu.getRandomMeal();
  console.log(meal);
  
  