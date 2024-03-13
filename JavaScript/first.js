//concatenação, interpolação, literal templates

//Propriedades de um carro

// 1- declaração 2- identificação da variável  3- tipo da variavel
// padrão de escrita = camelCase 
// comentário
const corDoCarro = "Vermelho" 
const modeloDoCarro = "Sandero"
const marcaDoCarro = "Renault"
const chassiDoCarro = 75846493023747
const anoDoCarro = 2012

//Primeira forma de concatenação
console.log("Cor predominante: " + corDoCarro + " Modelo do carro: " + modeloDoCarro + " Marca: " + marcaDoCarro + " Chassi: " + chassiDoCarro + " Ano: " + anoDoCarro)

//segunda forma interpolação
console.log(`Cor predominante: ${corDoCarro}, Modelo: ${modeloDoCarro}, Marca: ${marcaDoCarro}, Chassi: ${chassiDoCarro}, Ano: ${anoDoCarro}`)

//sem literal templates
console.log("bem vindo ao bar do Guilherme:", 
    "1- litrão,",
    "2- pitão,",
    "3- refri,",
    "4- agua,"
)

//terceira forma literal templates
console.log(` Bem vindo ao bar do Guilherme. Escolha uma opção: 
    1- Agua
    2- Coca
    3- Pepsi
    4- litrão
`);
