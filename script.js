document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        ".hero-conteudo, .servico-card, .projeto, .passo, .confianca-item, .contato"
    );

    const observer = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("aparecer");

                    observer.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elementos.forEach((elemento) => {

        elemento.classList.add("antes-de-aparecer");

        observer.observe(elemento);

    });

});

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const empresa = document.getElementById("empresa").value;
        const servico = document.getElementById("servico").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = encodeURIComponent(
            `Olá! Meu nome é ${nome}.\n` +
            `Empresa: ${empresa || "Não informado"}\n` +
            `Serviço: ${servico}\n\n` +
            `Projeto:\n${mensagem}`
        );

        const numero = "5574999136969";

        const link =
            `https://wa.me/${numero}?text=${texto}`;

        window.open(link, "_blank");

    });

}