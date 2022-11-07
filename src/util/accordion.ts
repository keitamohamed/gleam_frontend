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

export const courseAccordion = () => {
    let main: NodeListOf<HTMLElement> = document.querySelectorAll(".course-title-container");

    main.forEach(element => {
        element.addEventListener('click', () => {
            const expand = element.querySelector<HTMLElement>('.expand')
            const hide = element.querySelector<HTMLElement>('.hide')
            let container = element.nextSibling as HTMLElement;
            if (expand?.classList.contains('activate') && hide !== null) {
                expand.classList.remove('activate')
                hide.classList.add('activate')
                container?.classList.add('activate_section')
            } else {
                hide?.classList.remove('activate')
                expand?.classList.add('activate')
                container?.classList.remove('activate_section')
            }
        })
    })
}