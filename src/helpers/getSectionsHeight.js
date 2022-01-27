export default function getSectionsHeight(className = "Section") {
    const docSections = document.querySelectorAll("." + className)
    let totalHeight = 0
    const sections = {}
    docSections.forEach(section => {
        let height = section.clientHeight
        let name = section.dataset.name
        sections[name] = totalHeight
        totalHeight += height
    });
    return sections
}