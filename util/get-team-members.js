async function getTeamMembers() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/team-members?_embed`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getTeamMembers