const host = 'http://localhost:3000';

describe('AdmController', () => {
  describe('GET /adm.json deve retornar uma lista de adms', () => {
    it('Deve retorna o status 200', () => {
      fetch(host + '/adm.json').then((res) => {
        if (res === undefined) {
          console.log(res.status);
          console.log('não consegui localizar o servidor');
          expect(res.status).toBe(503);
        } else {
          expect(res.status).toBe(200);
        }
      });
    });

    it('Deve retorna o id dos itens da da API', () => {
      fetch(host + '/adm.json')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (json !== undefined) {
            expect(json[0].id).toBe(1111);
            expect(json[1].id).toBe(2);
          }
        });
    });
  });
});
