describe('Autenticação no sistema', () => {
    it('Autenticação no sistema via API e captura do token de acesso', () => {
      // Define as credenciais do usuário
      const username = 'INSIRA O LOGIN'
      const password = 'INSIRA A SENHA'
  
      // Faz uma solicitação POST para o endpoint de autenticação do Keycloak para obter um token de acesso
      cy.request({
        method: 'POST',
        url: 'INSIRA A URL DA REQUISIÇÃO',
        form: true,
        body: {
          grant_type: 'password',
          client_id: 'INSIRA O CLIENT ID',
          username: username,
          password: password
        }
      }).then((response) => {
        // Armazena o token de acesso em uma variável
        const token = response.body.access_token
  
        // Define as configurações de cabeçalho para incluir o token de acesso em todas as solicitações subsequentes
        const headers = {
          Authorization: `Bearer ${token}`
        }

        // UTILIZANDO O TOKEN GERADO
        // Define a URL do endpoint que você deseja testar
        const url = 'INSIRA A URL'
  
        // Faz uma solicitação GET para o endpoint que você deseja testar, incluindo o token de acesso no cabeçalho da solicitação
        cy.request({
          method: 'GET',
          url: url,
          headers: headers
        }).then((response) => {
          // Verifica se a resposta da solicitação é bem-sucedida e contém o resultado esperado
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('failure',false)
          expect(response.body).to.have.property('success', true)
          expect(response.body.data.userName).to.eq(username)
        })
      })
    })
  })