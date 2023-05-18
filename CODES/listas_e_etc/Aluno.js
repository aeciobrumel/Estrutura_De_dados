class Aluno{
    constructor(numero,nome){
        this.numero=numero
        this.nome=nome
        this.notas=new Notas()
    }
} 
class Notas{
    constructor(){
        this.a1=0
        this.a2=0
        this.af=null
        
    }
    media() {
        if(this.af==null){
       return this.a1+this.a2
        }else{
            return this.a1<this.a2?this.af+this.a2:this.a1+this.af;
        }

    }
    resultado(){
        return this.media()>=6?"Aprovado":"Reprovado";
    }

    //teste
    check(nota){
        if(nota>5)return 5
        if(nota<0)return 0
        return nota
    }


//passa as notas pelo teste
    setA1(nota){
        this.a1 = this.check(nota)
    }
    setA2(nota){
        this.a2 = this.check(nota)
    }
    setAf(nota){
        this.af = this.check(nota)
    }


}
/*
//list
var alunos=[
new Aluno(1,"aecio"),
new Aluno(2,"nicoly"),
new Aluno(3,"elamario"),
new Aluno(4,"Jonas")
]


*/


//obj alunos

var aluno  =new Aluno(1,"elmario")
aluno.notas.setA1(4)
aluno.notas.setA2(-2)
aluno.notas.setAf(7)

//print object
console.clear()
console.log(aluno);
console.log("media: "+aluno.notas.media());
console.log("Resultado: ",aluno.notas.resultado());aluno.notas.setA1=4