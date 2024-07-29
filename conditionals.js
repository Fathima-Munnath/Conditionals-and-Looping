let num =  parseInt(prompt("Enter a number"));

if(num>1000000){
    document.write("invalid number");
}
else{

    let sum= (num*(num+1))/2;
    document.write(sum);
    alert(`sum of number up to${number} is ${sum}`);
    
        
}