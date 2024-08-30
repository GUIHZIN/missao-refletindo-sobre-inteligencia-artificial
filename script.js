const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de entrar na academia e vê um novo equipamento de treino. Qual é o seu pensamento inicial?",
        alternativas: [
            {
                texto: "Parece complicado! Não sei se vou conseguir usar.",
                afirmacao: "Sentiu-se inseguro no início, mas decidiu perguntar aos instrutores para aprender a usar o equipamento corretamente."
            },
            {
                texto: "Ótimo! Vou experimentar e ver como pode me ajudar nos treinos.",
                afirmacao: "Foi curioso e logo começou a usar o novo equipamento, encontrando maneiras de integrá-lo ao seu regime de treino."
            }
        ]
    },
    {
        enunciado: "Seu treinador sugere uma nova rotina de exercícios para melhorar a resistência. Como você reage?",
        alternativas: [
            {
                texto: "Aceita a sugestão e começa a seguir a nova rotina imediatamente.",
                afirmacao: "Foi receptivo às mudanças e começou a notar melhorias na sua resistência física."
            },
            {
                texto: "Prefere continuar com sua rotina atual e avalia os resultados ao longo do tempo.",
                afirmacao: "Optou por manter sua rotina atual, ajustando-a gradualmente com base nas necessidades pessoais."
            }
        ]
    },
    {
        enunciado: "Durante um treino em grupo, o instrutor discute a importância da recuperação muscular. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Incorpora técnicas de recuperação, como alongamento e massagens, em sua rotina.",
                afirmacao: "Valoriza a recuperação e utiliza várias técnicas para garantir uma recuperação eficaz entre os treinos."
            },
            {
                texto: "Foca apenas nos treinos intensivos e deixa a recuperação como uma prioridade secundária.",
                afirmacao: "Prefere se concentrar em treinos intensivos, mas eventualmente percebe a importância de melhorar a recuperação."
            }
        ]
    },
    {
        enunciado: "Você está pensando em participar de uma competição de fitness e precisa criar um plano de treino específico. O que faz?",
        alternativas: [
            {
                texto: "Consulta um especialista para criar um plano de treino detalhado e personalizado.",
                afirmacao: "Procura a orientação de um profissional para garantir que seu plano de treino esteja alinhado com seus objetivos de competição."
            },
            {
                texto: "Desenvolve seu próprio plano de treino baseado em suas experiências anteriores e conhecimento.",
                afirmacao: "Confia em sua própria experiência para criar um plano de treino, adaptando-o conforme necessário."
            }
        ]
    },
    {
        enunciado: "Seu grupo de treino está considerando adotar uma nova dieta para melhorar o desempenho. Como você lida com isso?",
        alternativas: [
            {
                texto: "Segue a nova dieta recomendada, ajustando suas refeições conforme as orientações.",
                afirmacao: "Adota a nova dieta e ajusta suas refeições para melhorar o desempenho e alcançar seus objetivos."
            },
            {
                texto: "Prefere manter sua dieta atual, fazendo ajustes apenas quando necessário para atender às suas necessidades pessoais.",
                afirmacao: "Mantém sua dieta atual e faz ajustes conforme necessário, mantendo-se fiel às suas preferências alimentares."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada fitness em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();