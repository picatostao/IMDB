export class Profesional{
    constructor(
        public name:string,
        public age:number, 
        public weight:number, 
        public height:number, 
        public isRetired:boolean,
        public nationaly:string, 
        public oscarsNumber:number, 
        public profession:string){

        }
        public toString(): string {
            return `Name: ${this.name}
                    Age: ${this.age}
                    Weight: ${this.weight}
                    Height: ${this.height}
                    Is retired: ${this.isRetired}
                    Nationality: ${this.nationaly}
                    Oscars number: ${this.oscarsNumber}
                    Profession: ${this.profession}`
        
          }
        }



        
    
    