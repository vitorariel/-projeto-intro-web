// O iten escolhido foi "filmes"
// atribuir: Título; sinopse; duração; ano de lançamento; genero; é remake; scpre; diretor; idioma; 
// Usando base de dados da IMDb
//-----------------------------------------------
// Lógica da nomeação: oid (nome original); lid (nome local); lenght(duração); gender(generos); year(ano de lançamento);
//isRemake (se é um remake); class (classificação indicativa). 


const oid1 = "The Shawshank Redemption"
const lid1 = "Um Sonho de Liberdade"
const gender1 = ["Drama"]
const lenght1 = 142
const class1 = 16
const year1 = 1994
const hasRemake1 = false

const oid2 = "The Godfather"
const lid2 = "O Poderoso Chefão"
const gender2 = ["Drama", "Policial"]
const lenght2 = 175
const class2 = 14
const year2 = 1972
const hasRemake2 = false

const oid3 = "Batman o Cavaleiro das Trevas"
const lid3 = "The Dark Knight"
const gender3 = ["Ação","Policial","Drama"]
const lenght3 = 152
const class3 = 12
const year3 = 2008
const hasRemake3 = false

//----------------------------------------------------------------------------------------------------
// Item 3: Calculo da média de um valor numérico:
const averageLength = (((lenght1 + lenght2 + lenght3)/3).toFixed(1))
console.log(`A média de duração dos filmes na nossa base de dados é de ${averageLength} minutos.`)

// Item 4: Operação lógica para checar se algum dos valores 'boolean' são verdadeiros

console.log(`Todos os filmes possuem remake? = `, (hasRemake1 && hasRemake2 && hasRemake3 === true) )
 //-------------------------------------------------------------------------------------------------------------

 // Item 6: Impressão de relatório geral de filmes em nossa base de dados 

 console.log(`
   Título Original: ${oid1.toLocaleUpperCase()}
    Título: ${lid1}
    Genero: ${gender1}
    Duração: ${lenght1}
    Classificação Indicativa: ${class1}
    Ano de Lançamento: ${year1}
    Tem remake? ${hasRemake1}
    ---------------
    Título Original: ${oid2.toLocaleUpperCase()}
    Título: ${lid2}
    Genero: ${gender2}
    Duração: ${lenght2}
    Classificação Indicativa: ${class2}
    Ano de Lançamento: ${year2}
    Tem remake? ${hasRemake2}
    ---------------
    Título Original: ${oid3.toLocaleUpperCase()}
    Título: ${lid3}
    Genero: ${gender3}
    Duração: ${lenght3}
    Classificação Indicativa: ${class3}
    Ano de Lançamento: ${year3}
    Tem remake? ${hasRemake3}
    ---------------
    `
 )