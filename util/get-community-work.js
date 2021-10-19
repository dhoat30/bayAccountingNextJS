async function getCommunityWork() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/community-work?_embed`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getCommunityWork