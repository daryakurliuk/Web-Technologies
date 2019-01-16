function Worker( age, gender){
    
    this.age = age;
    this.gender = gender;
   
    this.setAge = function(value)    {
        this.age = value;
    }
    this.getAge = function()    {
        return this.age;
    }
    this.setAge = function(value){
        this.age = value;
    }
    this.getGender = function (){
        return this.gender
    }
    this.setGender = function(){
        return this.gender;
    }
   
}

function Work_Railway(specialty, experience) {
    Worker.call(this);

    this.specialty = specialty;
    this.experience = experience;

    this.setSpecialty = function (value){
        this.specialty = value;
    }
    this.getSpecialty = function(){
        return this.specialty;
    }
    this.setExperience = function (value){
        this.experience = value;
    }
    this.getExperience = function (){
        return this.experience;
    }

}

function dismissal (name, reason_for_dismissal)
{
    Work_Railway.call(this);

    this.reason_for_dismissal = reason_for_dismissal;
    this.name = name;

    this.getName = function()   {
        return this.name;
    }
    this.setName = function (value){
        this.name = value;
    }
    this.setReason_for_Dismissal = function(value){
        this.reason_for_dismissal = value;
    }
    this.getReason_For_Dismissal = function(){
        return this.reason_for_dismissal;
    }

    this.dismiss  = function (name, reason_for_dismissal)
    {
        return this.name + " was dismissed because of " + this.reason_for_dismissal;
    }

    this.getInfo = function (){
        var info = " ";
        info +=  '==EVIDENCE== \n' +
        'Name: ' + this.getName() + '\n' +
        'Gender: ' + this.getGender() + '\n' +
        'Specialty: ' + this.getSpecialty() + '\n' +
        'Experience: ' + this.getExperience() + '\n' +
        'Reason for dismiss: ' + this.getReason_For_Dismissal();
        return info;      
    }
}
 
function new_Worker()
{
    alert('New');
}

var worker2 = new dismissal('Marina', 'unable to cope with their duties');
worker2.age = 23;
worker2.gender = 'fm';
worker2.specialty = 'economist';
worker2.experience = 4;

console.log(worker2.dismiss(this.name, this.reason_for_dismissal))
console.log(worker2.name);
console.log(worker2.experience);
console.log(worker2.getInfo());


