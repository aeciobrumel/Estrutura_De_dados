


const prompt = require('prompt-read')


x=[5,8,2,1,3]

console.log(x)
/*
    for( i=0 ;i<=4; i++){

        eleito = x[i]
        j = i - 1
                while ((j >= 0) && (x[j]>eleito)){

                    x[j+1] = x[j]
                    j = j-1
                    
                }
    x[j+1] = eleito


    }
    */
    x=[5,8,2,1,3]
   for(i = 1; i<= x.length-1;i++){
    eleito =x[i]
    j = i-1
    while ((j>= 0 )&&(x[j]>eleito)) {
        x[j+1] = x[j]
      
        j = j -1
    }
    x[j+1]=eleito
   }

    console.log(x)
