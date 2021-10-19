async function getQuestionnaireData() {
    let response
    await fetch(`${process.env.url}/wp-json/wp/v2/questionnaire`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getQuestionnaireData