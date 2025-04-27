const ANCHOR_IDS = {
    main: 'main',
    polishing: 'polishing',
    ransom: 'ransom',
    about: 'about',
    reviews: 'reviews',
}

function getAnchor(id: string) {
    return `#${id}`
}

export {
    ANCHOR_IDS,
    getAnchor,
}