async function getUsefulFormsLinks() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=useful-forms-links`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getUsefulFormsLinks