async function getHeroImageData(category) {
    let response
    await fetch(`${process.env.url}/wp-json/webduel/v1/home-page`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ category: category })
    }).then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getHeroImageData