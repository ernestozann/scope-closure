const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setname: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setname('oscar');
console.log(newPerson.getName());