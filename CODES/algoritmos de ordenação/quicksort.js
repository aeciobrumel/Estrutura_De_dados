
let x = [4, 5, 3, 6, 1, 2, 8, 7];
console.log(x);


function particao(x,p,r){
let pivo,j,i
i = p-1
j= r+1


pivo = x[Math.floor((r+p)/2)]
while(i<j){
  do{
    j--
  }while(x[j]>pivo)
  do{
    i++
  }while(x[i]<pivo)
  if(i<j){
    troca(x,i,j)
  }



}
return j


}


function quicksort(x,p,r){
let q
if(p<r){
  q=particao(x,p,r)
  quicksort(x,p,q)
  quicksort(x,q+1,r)

}
}
function troca(x,i,j){
  let aux
  aux = x[i]
  x[i] = x[j]
  x[j] = aux

}

quicksort(x,0,x.length-1)
console.log(x)