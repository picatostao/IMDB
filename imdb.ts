
import{Movie}from"./movie"
import*as fs from "fs"

export class Imdb{
    constructor(public peliculas:Movie[]){
        this.peliculas=peliculas  
    }
    public printImdb(){
        console.log(this.peliculas)
    }
    public writeJSON(name:string){
        let imdb_= JSON.stringify(this.peliculas)
        fs.writeFileSync(name,imdb_)
    }
    public instanciaIMDB(name:string):Imdb{
        let imdb_1=fs.readFileSync(name,"utf-8")
        let imdb_2:Imdb=JSON.parse(imdb_1)
        return imdb_2
    }
}

    
    
    
    

