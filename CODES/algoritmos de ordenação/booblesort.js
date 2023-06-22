


let x=[8,9,2,1]


    for (i = 1; i <= 3; i++) {
   eleito = x[i]
   j = i-1
       while((j>=0)&&(x[j]>eleito)){
            x[j+1]=x[j]
            j--
            console.log(j)
             }
    x[j+1]=eleito
    console.log(eleito)
  }