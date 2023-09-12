const getImageUrl = img => {
    return new URL(`../assets/images/${img}`, import.meta.url).href;
}

export default getImageUrl