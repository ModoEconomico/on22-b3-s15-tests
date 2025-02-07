const memoryModel = require("../src/models/memoryModel")

describe("GET model test", () => { //describe: conjunto de teste
    const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memória implantada para teste",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    it("Deve chamar schema e retornar o nome correto da memória.", () => {
        expect(memory.title).toBe("memória teste");
    })
    it("Deve chamar o schema e retornar a data correta da memória", () => {
        expect(JSON.stringify(memory.date).substring(1, (JSON.stringify(memory.date)).length -1)).toBe("2022-07-01T17:42:09.375Z")
    });
    it("Deve chamar o schema e retornar a descrição correta da memória", () => {
        expect(memory.description).toBe("uma memória implantada para teste")
    });
    it("Deve chamar o schema e retornar a categoria correta da memória", () => {
        expect(memory.category).toStrictEqual(["testes"]) 
    });
    it("Deve chamar e retornar a url da imagem correta da memória", () => {
        expect(memory.imgURL).toBe("https://www.imagem.com")
    });
    it("Deve chamar o schema e retornar o id de timeline correta da memória", () => {
        expect(JSON.stringify(memory.timelineID).substring(1, (JSON.stringify(memory.timelineID)).length -1)).toBe("62bf30a95bd3be0daadb34f3")
    });
});

describe("CREATE route test", () => {
    const memory = new memoryModel({
            "title": "memória teste",
            "date": "2022-07-01T17:42:09.375Z",
            "description": "uma memória implantada para teste",
            "category": "testes",
            "imgURL": "https://www.imagem.com",
            "timelineID": "62bf30a95bd3be0daadb34f3",
            "archived": true
    });
    it("Deve salvar no banco de dados a nova memória", () => {
        memory.save().then((dados) => {
          expect(dados.title).toBe("memória teste")  
        })
    });
});

describe("UPDATE route test", () => { //describe: conjunto de teste
    it("Deve editar o titulo e salvar no banco de dados a nova memória", () => {
        const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memória implantada para teste",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    })
    memory.title = "nova memória teste"
    memory.save().then((dados) => {
        expect(dados.title).toBe("nova memória teste")
    })
});
});

describe("DELETE route test", () => {
    it("Deve excluir uma memória", () => {
        const memory = new memoryModel({
            "title": "memória teste",
            "date": "2022-07-01T17:42:09.375Z",
            "description": "uma memória implantada para teste",
            "category": "testes",
            "imgURL": "https://www.imagem.com",
            "timelineID": "62bf30a95bd3be0daadb34f3",
            "archived": true
        })
        memory.save().then((dados) => {
            memory.delete().then((novosDados) => {
                expect(dados.title).toBe(null);
            })
        })
    })
    });

