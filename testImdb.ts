import{Profesional}from"./profesional"
import {Movie} from"./movie"
import {Imdb} from"./imdb"
import * as fs from "fs"
import { log } from "console"

let actor:Profesional=new Profesional("actor1",11,12,13,false,"es",14,"ac",)
let actor2:Profesional=new Profesional("actor2",21,22,23,true,"fr",24,"ac")
let directorx:Profesional=new Profesional("Director",31,32,33,true,"gr",34,"dir")
let screenwriter:Profesional=new Profesional("screenwriter",41,42,43,true,"aus",44,"scr")
let actores:Profesional[]=[actor,actor2]

let pelicula:Movie=new Movie("risasjajas",1999,"es","drama")

        pelicula.actors=actores
        pelicula.nationality="España"
        pelicula.director=directorx
        pelicula.writer=screenwriter
        pelicula.language="spanish" 
        pelicula.plataforma="netflix"
        pelicula.isMCU=false
        pelicula.producer="paca"
        pelicula.distributor="miramax"

let actor_:Profesional=new Profesional("actor1_",11,12,13,false,"es",14,"ac",)
let actor2_:Profesional=new Profesional("actor2_",21,22,23,true,"fr",24,"ac")
let directorx_:Profesional=new Profesional("Director_",31,32,33,true,"gr",34,"dir")
let screenwriter_:Profesional=new Profesional("screenwriter_",41,42,43,true,"aus",44,"scr")
let actores_:Profesional[]=[actor_,actor2_]

let pelicula_:Movie=new Movie("risasjajas_",1990,"es_","dram_")

        pelicula_.actors=actores_
        pelicula_.nationality="España"
        pelicula_.director=directorx_
        pelicula_.writer=screenwriter_
        pelicula_.language="spanish" 
        pelicula_.plataforma="netflix"
        pelicula_.isMCU=false
        pelicula_.producer="paca"
        pelicula_.distributor="miramax"

let peliculas=[pelicula, pelicula_]
let imdb_:Imdb=new Imdb(peliculas)
console.log(imdb_.peliculas);

        
let imdbJson=JSON.stringify(imdb_)

fs.writeFileSync("imdbBBDD.json", imdbJson)
fs.readFileSync("imdbBBDD.json")
JSON.parse(imdbJson)
imdb_.writeJSON("imdbBBDD.json")
console.log(imdb_.instanciaIMDB("imdbBBDD.json"))
