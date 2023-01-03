let D=0;
for(let month=1; month<=12; month++){

  if(month==2){
    D= 28;
  }
  else if(month== 4 || month==6 || month==9 || month==11){
    D=30;
  }
  else{
    D=31;
  }
  
  for(let Day=1; Day<=D; Day++){
    console.log(Day+"-"+month);
  }
}