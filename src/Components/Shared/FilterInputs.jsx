
const FilterInputs = {
    // functions to filter inputs
    replaceSpecialCharacters: input => input.replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?_-]/g,''), // replace all special characters
    onlyNumbers: input => input.replace(/[\D]/g,''), // replace all non-digits
    onlyIntegers: input => Number.isNaN(parseInt(input)) ? 0 : parseInt(input) // return integer, or 0 if NaN
}
export default FilterInputs;