for(let i=1;i<=10;i++){
  let n=i;
  let c=0;
  for(let j=1;j<=n;j++){
    if(n%j==0){
      c++
    }
  }
  if(c==2){
    console.log(i);
  }
}