import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function clientesPDF(clientes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = {
        columns: [
            {
                text: "Clientes",
                fontSize: 15,
                bold: true,
                margin: [15, 30, 0, 45], // left, top, right, bottom
            },
            {
                // Imagem "lfa-logo.png" convertida em base64 no site "https://www.base64-image.de/"
                image: "data:image/png;base64,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",
                width: 100,
                height: 20,
                alignment: "right",
                margin: [0, 20, 10, 0], // left, top, right, bottom
                // absolutePosition: { x: 105, y: 20 }, // left, top, right, bottom
            },
        ],
    };

    const dados = clientes.map((cliente) => {
        return [
            { text: cliente.id, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.nome, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.email, fontSize: 9, margin: [0, 2, 0, 2] },
            { text: cliente.fone, fontSize: 9, margin: [0, 2, 0, 2] },
        ];
    });

    const details = [
        {
            table: {
                headerRows: 1,
                widths: ["*", "*", "*", "*"],
                body: [
                    [
                        { text: "Código", style: "tableHeader", fontSize: 10 },
                        { text: "Nome", style: "tableHeader", fontSize: 10 },
                        { text: "E-mail", style: "tableHeader", fontSize: 10 },
                        {
                            text: "Telefone",
                            style: "tableHeader",
                            fontSize: 10,
                        },
                    ],
                    ...dados,
                ],
            },
            layout: "lightHorizontalLines", // headerLineOnly
        },
    ];

    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + " / " + pageCount,
                alignment: "right",
                fontSize: 9,
                margin: [0, 10, 20, 0], // left, top, right, bottom
            },
        ];
    }

    const docDefinitios = {
        pageSize: "A4",
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
        footer: Rodape,
    };

    pdfMake.createPdf(docDefinitios).download();
}

export default clientesPDF;
