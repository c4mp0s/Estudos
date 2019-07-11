const { deepEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = { nome: "Flash", poder: "Speed", id: 1 };

describe("Suite de manipulação de Herois", () => {
  it("deve pesquisar uma heroi usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);
    deepEqual(resultado, expected);
  });
  it("deve cadastrar um heroi, usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
    deepEqual(atual, expected);
  });
});