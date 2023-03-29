function CaseChange() {
    var person = "Iram";
    let upparCase = person.toUpperCase();
    let lowerCase = person.toLowerCase();
    return (
        <><h3>this is {upparCase}</h3><h3>this is {lowerCase}</h3><h3>{person}</h3></>
    )
}

export default CaseChange;