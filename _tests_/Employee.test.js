test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Jesse", testID);
    expect(employeeInstance.getID()).toBe(testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "princessofcode@gmail.com";
    const employeeInstance = new Employee("Jesse", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})
test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Jesse", 2, "princessofcode@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})