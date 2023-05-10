import{Profesional}from"./profesional"
import {Movie} from"./movie"
import {Imdb} from"./imdb"
import * as fs from "fs"

let actor=new Profesional("actor1",11,12,13,false,"es",14,"ac",)
let actor2=new Profesional("actor2",21,22,23,true,"fr",24,"ac")
let directorx=new Profesional("Director",31,32,33,true,"gr",34,"dir")
let screenwriter=new Profesional("screenwriter",41,42,43,true,"aus",44,"scr")
let pelicula=new Movie("risasjajas",1999,"es","drama")
let pelicula2=new Movie("llantosguagua",1999,"fr","comedia")
let peliculas:Movie[]=[pelicula,pelicula2]
let imdb:Imdb=new Imdb(peliculas)


let imdbJson=JSON.stringify(imdb)

fs.writeFileSync("imdbBBDD.json", imdbJson)
console.log(imdbJson)
fs.readFileSync("imbd.json","utf-8")
JSON.parse(imdbJson)