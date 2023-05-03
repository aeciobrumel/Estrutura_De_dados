

let vet=[2,1,4,5,3,5,7,9]

function heapsort(vet,n){
    let i,aux

    for(i=(n-1)/2;i>=0;i--){
        criaheap(vet,i,n-1);
    }
    for(i=n-1;i>=1;i--){
        aux=vet[i]
        vet[0]=vet[i]
        vet[i]=aux
        criaheap(vet,0,i-1);
    }


}
function criaheap(vet,i,f){
    let aux =vet[i]
    let j=i*2+1

    while(j<=f){
        if(j>f){
            if(vet[j]<vet[j+1]){
                j++
            }
        }
        if(aux<vet[j]){
            vet[i]=vet[j]
            i=j
            j=2*i+1
        }else{
            j=f+1
        }
    }
    vet[i]=aux

}
heapsort(vet,vet.length-1)
console.log(vet)