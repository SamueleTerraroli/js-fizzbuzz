let showNumber;
for (let i=1; i<=100; i++) {
    
    if (!(i % 15)){
        
        showNumber= 'FizzBuzz';    
        
    } else if (!(i % 5)){
    
        showNumber= 'Buzz';    
  
    } else if (!(i % 3)){
    
        showNumber= 'Buzz';    

    } else{
        showNumber = i;

        
    }
    
    console.log(showNumber)
}
