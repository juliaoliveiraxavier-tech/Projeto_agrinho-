// Seleção dos elementos da calculadora
const carInput = document.getElementById('car-km');
const plasticInput = document.getElementById('plastic-bags');

const carVal = document.getElementById('car-val');
const plasticVal = document.getElementById('plastic-val');
const treeCounter = document.getElementById('tree-counter');

// Função para recalcular o impacto de forma interativa
function calcularImpacto() {
    const diasSemCarro = parseInt(carInput.value);
    const sacolasEvitadas = parseInt(plasticInput.value);

    // Atualiza os textos dos sliders
    carVal.innerText = `${diasSemCarro} ${diasSemCarro === 1 ? 'dia' : 'dias'}`;
    plasticVal.innerText = `${sacolasEvitadas} ${sacolasEvitadas === 1 ? 'sacola' : 'sacolas'}`;

    // Lógica matemática fictícia baseada em peso de CO2 e absorção de árvores:
    // Cada dia sem carro economiza aprox. 4.5 árvores equivalente/ano
    // Cada sacola evitada por semana economiza aprox. 0.3 árvores equivalente/ano
    const arvoresSalvasPorCarro = diasSemCarro * 4.5;
    const arvoresSalvasPorSacola = sacolasEvitadas * 0.3;
    
    const totalArvores = (arvoresSalvasPorCarro + arvoresSalvasPorSacola).toFixed(1);

    // Efeito visual de contagem subindo suavemente
    animateCounter(treeCounter, totalArvores);
}

// Função para animar os números mudando (Estilo Premium)
function animateCounter(elemento, valorFinal) {
    elemento.innerText = valorFinal;
}

// Ouvintes de eventos para capturar as mudanças em tempo real
carInput.addEventListener('input', calcularImpacto);
plasticInput.addEventListener('input', calcularImpacto);

// Inicializa o cálculo com os valores zerados
calcularImpacto();