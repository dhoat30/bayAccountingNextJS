async function getTechnologyPartners() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/technology-partners?_embed`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getTechnologyPartners