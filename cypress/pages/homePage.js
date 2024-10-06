class homePage {
    
    _ = {
        username: () => cy.get(".username")
    };

}

module.exports = new homePage();