const Adm = require('../../app/models/adm');
describe('Model Adm', () => {
  it('Deve retornar modelo de adm', () => {
    let adm = Adm;
    expect(adm !== undefined).toBe(true);
    expect(adm.id !== undefined).toBe(true);
    expect(adm.nome !== undefined).toBe(true);
    expect(adm.senha !== undefined).toBe(true);
    expect(adm.todos() !== undefined).toBe(true);
  });
});
