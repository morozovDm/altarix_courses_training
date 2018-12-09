class Person {
  constructor(age, institution){
    this.age = age; // возраст
    this.institution = institution;
    this.setType();
  }
  incAge(){ // увеличение возраста
    this.age++;
    this.setInstitution();
    this.setType();
  }
  setType() { // определение класса 
    if(this.age < 7) this.type = "child";
    if(this.age >= 7 && this.age < 17) this.type = "schoolchild";
    if(this.age >= 17 && this.age < 23) this.type = "student";
    if(this.age >= 23 && this.age < 65) this.type = "adult";
    if(this.sex === 'male' && this.age >= 65 || this.sex === 'female' && this.age >= 63) this.type = "pensioneer";
  }
  setInstitution() {
    if(this.type === "schoolchild" && this.age >= 7) this.institution = null;
    if(this.type === "student" && this.age >= 17) this.institution = null;
    if(this.type === "adult" && this.age >= 23) this.institution = null;
    if(this.type === "pensioneer") 
      if(this.sex === 'male' && this.age >= 65 || this.sex === 'female' && this.age >= 63)
        this.institution = null;
  }
}

class Male extends Person {
  get sex() { // пол
    return "male";
  }
}
class Female extends Person {
   get sex() { // пол
    return "female";
  }
}

var human = new Female(23,"PGUTI");
console.log(human)
human.incAge();
console.log(human)