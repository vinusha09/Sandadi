function conversion(){

        
    let a = document.getElementById("num1").value;
    
    
    let temp = temperatureConversion(a);
    alert("Temparature in Celsius is "+temp);
  }
  
  function temperatureConversion(x) {
    return parseInt(parseFloat((parseInt(x)-32)*(5/9)).toFixed(2));
  }