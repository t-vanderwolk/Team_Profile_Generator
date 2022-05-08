const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JessePrincess";
    const employeeInstance = new Engineer("Jesse", 2, "princessofcode@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JessePrincess";
    const employeeInstance = new Engineer("Jesse", 2, "princessofcode@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jesse", 2, "princessofcode@gmail.com", "JessePrincess");
    expect(employeeInstance.getRole()).toBe(returnValue);
});