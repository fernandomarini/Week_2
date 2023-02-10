import { Person } from "./person";
import { Contacts } from "./contacts";

let agenda = new Contacts;

let sof = new Person(); 
let cam = new Person(); 
let agu = new Person(); 
let nor = new Person(); 


agenda.people = [sof,cam,agu,nor];

sof.name =  "Fernando";
sof.age = 43;

cam.name = "Camila";
cam.age = 22;

agu.name = "Agustin";
agu.age = 15;

nor.name = "Norberto";
nor.age = 55;

sof.setAdress("Mi primera direccion") // Modif la direccion
cam.setAdress("Mi segunda direccion") // Modif la direccion
agu.setAdress("Mi tercera direccion") // Modif la direccion

agenda.printCalendar();