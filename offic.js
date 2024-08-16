function customParse(data) {
  const lines = data.split('\n');
  const result = {};

  lines.forEach(line => {
    const [key, ...values] = line.split(': ');
    if (key && values.length) {
      let value = values.join(': ').trim();
      
      // Try to convert numeric strings to numbers
      if (!isNaN(value)) {
        value = Number(value);
      }

      result[key.trim()] = value;
    }
  });

  return result;
}

// Example usage
const inputStr = `
name: John Doe
age: 30
email: john.doe@example.com
`;

console.log(customParse(inputStr));
// Output:
// { name: 'John Doe', age: 30, email: 'john.doe@example.com' }
