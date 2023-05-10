import{Profesional}from"./profesional"

export class Movie{
         public title:string
        public releaseYear:number
        public actors:Profesional[]
        public nationality:string
        public director:Profesional
        public writer:Profesional
        public language:string
        public plataforma:string
        public isMCU:boolean
        public mainCharacterName:string
        public producer:string
        public distributor:string
        public genere:string
////constructor//
    constructor(title:string, releaseYear:number, nationality:string, genere:string){
        this.title=title
        this.releaseYear=releaseYear
        this.actors
        this.nationality=nationality
        this.director
        this.writer
        this.language 
        this.plataforma
        this.isMCU
        this.mainCharacterName
        this.producer
        this.distributor
        this.genere=genere
    }

        /////metodo////
        public toString(){
        console.log(this.title, this.releaseYear, this.actors, this.nationality, this.director, this.writer, this.language, this.plataforma, this.isMCU, this.mainCharacterName, this.producer, this.distributor, this.genere)
        }         
    }
    


