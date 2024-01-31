const findTheOldest = function(people) {
    
    let k=people.map((item)=>{
        let age;
        if(item.yearOfDeath){
            age=item.yearOfDeath-item.yearOfBirth;
        }
        else{
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            age= currentYear-item.yearOfBirth;
        }
        let s={};
        s['name']= item.name;
        s['age']=age;
        return s; 
    });

    
    let finding_lowest= k.reduce((i,item)=>{return (i<item.age)?i=item.age:i;},0);
    let finding_old= k.find(item=>item.age===finding_lowest);
    console.log(finding_old);
    let min={};
    people.forEach(element => {
        if(element.name===finding_old.name){
            min=element;
        }
    });
    return min;

};

// Do not edit below this line
module.exports = findTheOldest;
