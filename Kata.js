
function greet(name) {

    if (name === null || typeof(name) === "undefined") {
        return "Hello, my friend.";
    }
    if (name.length === 2) {
        return `Hello, ${name[0]} and ${name[1]}.`
    } else if (name.length > 1) {
        const normalName = name.filter((value) => { return value !== value.toUpperCase() });
        const uppercaseName = name.filter((value) => { return value === value.toUpperCase() });

        if (normalName.length > 0 && uppercaseName.length > 0) {
            var lastName = normalName[name.length-1];
            delete normalName[normalName.length-1];
            var nameStr = normalName.join(", ");

            const normalStr = `Hello, ${nameStr}and ${lastName}.`

            lastName = uppercaseName[name.length-1];

            if (uppercaseName.length > 1) {
                delete uppercaseName[uppercaseName.length-1];
            }
            nameStr = uppercaseName.join(", ");

            const upperStr = `Hello, ${nameStr}and ${lastName}.`

            return normalStr + upperStr;

        } else if (normalName.length > 0) {

        }  else if (uppercaseName.length > 0) {

        }

        return `Hello, ${nameStr}and ${lastName}.`;
    } else if (name.toUpperCase() === name) {
        return `HELLO ${name}!`
    }

    return `Hello, ${name}.`;
} 

module.exports = greet;