async function getNews() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/news?_embed`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getNews