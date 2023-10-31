const statusCode = {
    'POST': 200,
    'GET': 200,
    'DELET': 204
};
export const callAPI = (method, url, body) => {
    cy.api({
        method,
        url,
        body
    }).then((res) => {
        expect(res.status).to.equal(statusCode[method]);
    })
}