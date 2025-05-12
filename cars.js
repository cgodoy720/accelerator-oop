// Define the Car class using the class keyword.
// Add the required properties inside the constructor.
// Implement methods: startEngine(), stopEngine(), driveTo(), and paint().
// Create one or more instances of the Car class and test the methods.
// (Optional) Add bonus methods or features.

// 🚗 Step 1: Create the Car class
class Car {
    // Step 2: Add properties to constructor
    // Properties: make, model, color, type, miles (start at 0), isRunning (start at false)
    constructor(make, model, color, type) {
      this.make = make;
      this.model = model;
      this.color = color;
      this.type = type;
      this.miles = 0;
      this.isRunning = false;
    }
  
    // Step 3: Add startEngine method
    startEngine() {
      this.isRunning = true;
      return `${this.make} ${this.model}'s engine started.`;
    }
  
    // Step 4: Add stopEngine method
    stopEngine() {
      this.isRunning = false;
      return `${this.make} ${this.model}'s engine stopped.`;
    }
  
    // Step 5: Add driveTo method
    // Takes a destination and distance, adds distance to miles if engine is running
    driveTo(destination, distance) {
      if (!this.isRunning) {
        return `Start the engine before driving!`;
      }
      this.miles += distance;
      return `${this.make} ${this.model} drove to ${destination}. Total miles: ${this.miles}`;
    }
  
    // Step 6: Add paint method
    // Changes the car's color
    paint(newColor) {
      const oldColor = this.color;
      this.color = newColor;
      return `${this.make} ${this.model} was painted from ${oldColor} to ${newColor}`;
    }
  }
  
  // ✅ Step 7: Create an instance and test it
  const myCar = new Car('Toyota', 'Camry', 'Blue', 'Sedan');
  
  console.log(myCar.startEngine());
  console.log(myCar.driveTo('school', 10));
  console.log(myCar.paint('Red'));
  console.log(myCar.stopEngine());
  console.log(myCar.driveTo('store', 5)); // Should warn that engine isn't running
  
  // 🧠 Bonus Ideas (Optional):
  // - Track fuel and burn fuel per mile
  // - Add static count of all cars
  // - Create a Garage class that stores multiple cars
  