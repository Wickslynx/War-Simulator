function rollDice() {
    return Math.floor(Math.random() * 20) + 1
  } 
  
  function rollMultiple(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += rollDice();
    }
  
    return sum;
  }
  
  function getRollMax(number) {
    return number * 20;
  }
  
  function getCurrentCountry() {
    
  }
  
  function getTargetedCountry() {
    
  }
  
  function ANEX() {
    
  }
  
  function REMOVE_LAND(country, total, max,) {
    
  }
  
  function war(attacker, defender) {
    
    if (getCountryCount() == 2) {
      const result = rollMultiple(3);
      const r = 3;
    } else {
      const result = rollDice();
      const r = 1;
    }
    
    if (result > (0) && result < (getRollMax(r) / 4 - 1)) {
      ANEX(defender);
      return "ANEXED_DEFENDER";
    } else if (result > (getRollMax(r) / 4) && result < (getRollMax(r) / 2 - 1)) {
      if (ismicro(attacker)) {
        ANEX(attacker);
        return "ANEXED_ATTACKER";
      } else {
        REMOVE_LAND(attacker, result, getRollMax());
        return "REMOVED_LAND_ATTACKER";
      }
    } else if (result > (getRollMax(r) / 2) && result < (getRollMax(r) / 1.42857142857)) {
      REMOVE_LAND(defender, result, getRollMax());
      return "REMOVED_LAND_DEFENDER";
    } else if (result > (getRollMax(r) / 1.33333333333) && result < getRollMax(r)) {
      ANEX(defender);
      return "ANEXED_DEFENDER";
    } 
    
  }
  
  function getCountryCount() {
    
  }
  
  function getRandomCountry() {
    
  }