


x =[5,3,1,15,12,9,7,2,4,5,8,3]



console.log(x)
function merge(x,inicio,fim){
    var meio;
    if(inicio<fim){
        meio=Math.trunc((inicio+fim)/2)
        merge(x,inicio,meio)
        merge(x,meio+1,fim)
        intercala(x,inicio,fim,meio) 
    }
}


function intercala(x,inicio,fim,meio){

    let poslivre,inicio_vetor1,inicio_vetor2,aux=[x.length]

poslivre=inicio
inicio_vetor1=inicio
inicio_vetor2=meio+1


    while(inicio_vetor1<=meio && inicio_vetor2<=fim){

        if(x[inicio_vetor1]<=x[inicio_vetor2]){
            aux[poslivre]=x[inicio_vetor1]
            inicio_vetor1++
        }else{
            aux[poslivre]=x[inicio_vetor2]
            inicio_vetor2++
        }
        poslivre++
    }


    for(i=inicio_vetor1;i<=meio;i++){
        aux[poslivre]=x[i]
        poslivre++
    }
    for(i=inicio_vetor2;i<=fim;i++){
        aux[poslivre]=x[i]
        poslivre++
    }
    for(i=inicio;i<=fim;i++){
        x[i]=aux[i]        
    }
}

merge(x,0,x.length-1)
console.log(x)
