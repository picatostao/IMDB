import{Movie}from"./movie"
import{Profesional}from"./profesional"
let actor=new Profesional("actor1",11,12,13,false,"es",14,"ac",)
let actor2=new Profesional("actor2",21,22,23,true,"fr",24,"ac")
let directorx=new Profesional("Director",31,32,33,true,"gr",34,"dir")
let screenwriter=new Profesional("screenwriter",41,42,43,true,"aus",44,"scr")

let pelicula=new Movie("peliculon",2020,"es","humor")
pelicula.director=directorx
pelicula.writer=screenwriter
pelicula.actors=[actor,actor2]
pelicula.language="es"
pelicula.plataforma="Netflix"
pelicula.isMCU=false
pelicula.mainCharacterName="mortadelo"
pelicula.producer="Netflix"
pelicula.distributor="Top manta"

pelicula.toString()