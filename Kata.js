
function greet(name) {

    if (name === null || typeof(name) === "undefined") {
        return "Hello, my friend.";
    }
    else if (typeof(name) === "object") {

        name.forEach((item)=> {
            if (item.charAt(0) !== "\"" && item.charAt(item.length-1) !== "\"") {
                const newStrArray = item.split(", ");
                if (newStrArray.length > 1) {
                    delete name[name.indexOf(item)];
                    name.push(...newStrArray);
                }
            } else {
                newItem = item.replace(/"/g, "");
                name[name.indexOf(item)] = newItem;
            }
        });

        const normalName = name.filter((value) => { return value !== value.toUpperCase() });
        var normalStr = "";

        if (normalName.length === 1) {
            normalStr = `Hello, ${normalName[0]}.`;
        } else if (normalName.length === 2){
            normalStr = `Hello, ${normalName[0]} and ${normalName[1]}.`;
        } else if (normalName.length !== 0) {
            const lastName = normalName[normalName.length-1];
            delete normalName[normalName.length-1];
            const nameStr = normalName.join(", ");

            normalStr = `Hello, ${nameStr}and ${lastName}.`
        }

        const uppercaseName = name.filter((value) => { return value === value.toUpperCase() });
        var upperStr = "";

        if (uppercaseName.length === 1) {
            upperStr = `HELLO ${uppercaseName[0]}!`;
        } else if (uppercaseName.length === 2) {
            upperStr = `HELLO ${uppercaseName[0]} AND ${uppercaseName[1]}.`;
        } else if (uppercaseName.length !== 0) {
            const lastName = uppercaseName[uppercaseName.length-1];
            delete uppercaseName[uppercaseName.length-1];
            const nameStr = uppercaseName.join(", ");

            upperStr = `HELLO ${nameStr}AND ${lastName}!`;
        }

        if (normalStr !== "" && upperStr !== "") {
            return `${normalStr} AND ${upperStr}`;
        } else if (normalStr !== "") {
            return normalStr;
        } else if (upperStr !== "") {
            return upperStr
        }
    } else if (name.toUpperCase() === name) {
        return `HELLO ${name}!`
    }

    return `Hello, ${name}.`;
} 

module.exports = greet;