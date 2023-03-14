function scuberGreetingForFeet(ride){
  let result 
  if(ride <= 400){
  result= 'This one is on me!'
return result 
  }  

  if(ride >2000 && ride <2500){
   result= 'I will gladly take your thirty bucks.'
  return result 
  }

  if(ride >2500){
    result= 'No can do.' 
return result
  }
return result
}   

function ternaryCheckCity(city){ 
  let result 
  if (city === 'NYC'){ 
    result = "Ok, sounds good.";   
    return result;  
 }  
  else {
    result = 'No go.';
    return result ;       
  }    
}       
function switchOnCharmFromTip(tip){   
  let result
  if(tip ==='generous'){  
    result = "Thank you so much.";
  return result
}  
else if (tip === 'not as generous'){ 
  return 'Thank you.'; 
} 
else {
  return 'Bye.';
} 
}