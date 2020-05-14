// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor(){
      this.tempOccurances = new Array(111).fill(0);
      this.maxOccurance = 0;
      this.size = 0;
      this.max = 0;
      this.min = 110;
      this.sum = 0;
      this.mode = null;
  }
    
  insert(temperature) {
    this.max = Math.max(this.max, temperature);
    this.min = Math.min(this.min, temperature);
    this.sum += temperature;
    this.size++;
    
    // Increase this temp's value in the this.tempOccurances array
    this.tempOccurances[temperature]++;
    
    if( this.tempOccurances[temperature] > this.maxOccurance ){
      this.maxOccurance = this.tempOccurances[temperature];
      this.mode = temperature;
    }

  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.sum / this.size;
  }

  getMode() {
    return this.mode;
  }
}