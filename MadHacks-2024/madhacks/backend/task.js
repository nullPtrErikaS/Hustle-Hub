class Task {
  
    constructor(name, description, isMine, isPublic, coinValue) {
      this.name = name;
      this.description = description;
      this.isMine = isMine;
      this.isComplete = false;
      this.isPublic = isPublic;
      this.coinValue = coinValue;
    }
  
    static getCoins() {
      return Task.coinValue;
    }
  
    setCoinValue() {
      if (!this.isMine) {
        Task.coinValue *= 2;
      }
    }
  
    completeTask() {
      this.isComplete = true;
      this.person.addCoins(Task.coinValue);
    }
  
    toString() {
      return this.name + "\n" + coinValue;
    }
  }
module.exports = Task;

  