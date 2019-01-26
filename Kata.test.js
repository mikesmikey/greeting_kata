const greet = require("./Kata")

test("running method greet(\"Bob\") should return Hello, Bob.", ()=> {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test("if input is null the return should be \"Hello, my friend.\"", ()=> {
    expect(greet(null)).toBe("Hello, my friend.");
});

test("if the name is all uppercase like JERRY should return \"HELLO JERRY!\"", ()=> {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test("given the array of two names [\"Jill\", \"Jane\"] should return \"Hello, Jill and Jane.\"", ()=> {
    const givenArray = ["Jill", "Jane"];
    expect(greet(givenArray)).toBe("Hello, Jill and Jane.");
});

test("given the array of n number of name (3 names) [\"Amy\", \"Brian\", \"Charlotte\"] should return \"Hello, Amy, Brian, and Charlotte.\"", ()=> {
    const givenArray = ["Amy", "Brian", "Charlotte"];
    expect(greet(givenArray)).toBe("Hello, Amy, Brian, and Charlotte.");
});

test("given the array mixed with uppercase name [\"Amy\", \"BRIAN\", \"Charlotte\"] should return \"Hello, Amy and Charlotte. AND HELLO BRIAN!\"",()=> {
    const givenArray = ["Amy", "BRIAN", "Charlotte"];
    expect(greet(givenArray)).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})

test("given the array mixed with name with comma ([\"Bob\", \"Charlie, Dianne\"]) should return \"Hello, Bob, Charlie, and Dianne.\"", ()=> {
    const givenArray = ["Bob", "Charlie, Dianne"];
    expect(greet(givenArray)).toBe("Hello, Bob, Charlie, and Dianne.");
})

test("given the array of name mix with comma and double quote ([\"Bob\", \"\"Charlie, Dianne\"\"]) should return \"Hello, Bob and Charlie, Dianne.\"", ()=> {
    const givenArray = ["Bob", "\"Charlie, Dianne\""];
    expect(greet(givenArray)).toBe("Hello, Bob and Charlie, Dianne.");
})