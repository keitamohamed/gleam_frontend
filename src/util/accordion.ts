export const accordion = () => {
    let container: NodeListOf<HTMLElement> = document.querySelectorAll(".tab-section");
    let tabs: NodeListOf<HTMLElement> = document.querySelectorAll(".accordion-tab");
    let information: NodeListOf<HTMLElement> = document.querySelectorAll('.information')

    const accordionExpandMore = document.querySelector<HTMLElement>('.accordion-expand-more')
    const accordionExpandLess = document.querySelector<HTMLElement>('.accordion-expand-less')

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            container.forEach(section => {
                section.dataset.actabId === tab.dataset.actabId ?
                    section.classList.add("activate_section") :
                    section.classList.remove("activate_section")
            })
        })
    })

    accordionExpandMore?.addEventListener('click', () => {
        if (accordionExpandLess) {
            accordionExpandMore.style.display = 'none';
            accordionExpandLess.style.display = 'block'
            information.forEach(element => {
                element.classList.add('activate')
            })
        }
    })

    accordionExpandLess?.addEventListener('click', () => {
        if (accordionExpandMore) {
            accordionExpandLess.style.display = 'none';
            accordionExpandMore.style.display = 'block'
            information.forEach(element => {
                element.classList.remove('activate')
            })
        }
    })

}