export default function getValidString(string) {
    let validString = string.toLowerCase()
    validString = validString.replaceAll("á", "a")
    validString = validString.replaceAll("é", "e")
    validString = validString.replaceAll("í", "i")
    validString = validString.replaceAll("ó", "o")
    validString = validString.replaceAll("ú", "u")
    validString = validString.replaceAll(" ", "-")
    return validString
}