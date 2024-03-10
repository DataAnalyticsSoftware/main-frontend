
export interface IQuestions {
    question: string
    answers: string[]
}

export const questions: IQuestions[] = [
    {
        question: "¿Has tenido problemas con la gestión de datos de tus clientes?",
        answers: [
            'Sí, a menudo','A veces','No, rara vez'
        ]
    },
    {
        question: "Desafíos actuales en la gestión de datos y clientes:",
        answers: [
            'Organización, Filtrado, Modificación de datos.','Seguimiento de interacciones.','Desconozco el número de todos mis clientes.'
        ]
    },
    {
        question: "¿Buscas una solución para gestionar la información de clientes y tus bases de datos?",
        answers: [
            'Sí, estoy buscando activamente.','No, pero podría considerarlo.','No, no necesito ninguna solución.'
        ]
    },
    {
        question: "¿Conoces el potencial de la información de tus clientes y tus bases de datos?",
        answers: [
            'Sí, estoy al tanto.','No estoy seguro.','No, explícame más.'
        ]
    },
    {
        question: "¿Estarías dispuesto a pagar por una solución? ¿Cuánto?",
        answers: [
            'Si, hasta 30€.','Sí, entre 50€ y 100€ al mes.','Sí, pero no más de 200€ al mes.', 'No estaría dispuesto a pagar.'
        ]
    }
]