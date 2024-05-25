$(document).ready(function() {
    const timelineData = [
        {
            periodo: "1976-1978",
            presidente: "Victorio Sánchez López",
            modalContent: {
                rango: "1976-1978",
                presidente: "Victorio Sánchez López",
                evento: "Fundación de la academia",
                contenido: [
                    "Los trabajos para la formación de la Academia Mexicana de Informática comenzaron hacia principios de 1976, con la intención de contar en México con una agrupación de especialistas de alto nivel en esta disciplina - en proceso de formación en aquella época- y de buscar que el nuevo paradigma informático fuera aprovechado en beneficio de México y de su población.",
                    "Hacia mayo de 1976 estaba en proceso la organización y se daban los primeros pasos para la formalización de la Academia a través de reuniones previas, pero fue hasta el 7 de septiembre de 1976 que se le dio vida formal con un acta notarial."
                ],
                imageUrl: "images/Linea de tiempo/Recortes/1976-05-27-Formacion AMIAC.jpg"
            },
        },
        { 
            periodo: "1978-1980", 
            presidente: "Enzo Molino Ravetto" ,
            modalContent: {
                rango: "1978-1980",
                presidente: "Enzo Molino Ravetto",
                evento: "Enzo Molino Ravetto",
                contenido: [
                    "Hacia 1979 se presentó la oportunidad de inscribir a la Academia a la IMIA (International Medical Informatics Association), donde la amiac representó a México durante una decena de años.",
                    "Esto permitió organizar diferentes eventos, tales como un Simposio de Informática Médica con el ISSSTE y un Congreso Mundial en ese campo"

                ],
                imageUrl: "images/sinopcio.jpg"
            },
        },
        { 
            periodo: "1980-1982", 
            presidente: "Eduardo Durán Portilla",
            modalContent: {
                rango: "1980-1982",
                presidente: "Eduardo Durán Portilla",
                evento: "Primer congreso internacional 'La informática Médica y los países en desarrollo'",
                contenido: [
                    "En febrero de 1982, con el apoyo de la IMIA, la OPS, la Secretaría de Salubridad y Asistencia, el DIF y otras organizaciones, organizó el Primer congreso internacional 'La informática Médica y los países en desarrollo' en la Ciudad de México, al cual asistieron más de 700 personas, con conferenciantes de México, la OMS, Francia, Alemania, Italia, Japón, Estados Unidos, Tailandia, Unión Soviética, Cuba, Brasil, Argentina y otros países."
                ],
                imageUrl: "images/Linea de tiempo/Fotos Victorio Sanchez/ASISTENCIA.jpg"
            }
        },
        { 
            periodo: "1982-1984", 
            presidente: "Eduardo Philips Olmedo" 
        },
        { 
            periodo: "1984-1986", 
            presidente: "Enrique Díaz Cerón" 
        },
        { 
            periodo: "1986-1988", 
            presidente: "Ramón Bacelis Esteva" 
        },
        { 
            periodo: "1988-1990", 
            presidente: "Antonio Ayestarán Ruíz" 
        },
        { 
            periodo: "1990-1992", 
            presidente: "Lucía Andrade de Domville" ,
            modalContent: {
                rango: "1990-1992",
                presidente: "Lucía Andrade de Domville",
                evento: "Premio al Mérito Informático",
                contenido: [
                    "En 1991, al cumplir 15 años de ser fundada, la AMIAC, bajo la conducción de la Dra. Andrade, instauró el Premio al Mérito Informático; con el cual reconoce a un individuo cuya exitosa trayectoria en el campo informático, así como sus virtudes y cualidades hayan sido significativamente beneficiosas para nuestro país, para nuestras instituciones y para nuestra juventud. ",
                    "El Premio también considera la labor académica, de desarrollo de personal de las empresas, pero sobre todo de beneficio a la informática."
                ],
                imageUrl: ""
            }
        },
        { 
            periodo: "1992-1994", 
            presidente: "Mario Villalobos Guerrero" 
        },
        { 
            periodo: "1994-1996", 
            presidente: "Guillermo Mallén Fullerton" ,
            modalContent: {
                rango: "1994-1996",
                presidente: "Guillermo Mallén Fullerton" ,
                evento: "Adolfo Guzmán Arenas recibe el Premio al Mérito Informático",
                contenido: [
                    "Noticia sobre la entrega del Premio al Mérito Informático al Dr. Adolfo Guzmán Arenas (29 agosto 1994)"
                ],
                imageUrl: "images/Linea de tiempo/Recortes/1996-07-22-Recorte-ComputerWorld-Premio Informatica.jpg"
            }
        },
        { 
            periodo: "1996-1999", 
            presidente: "Erasmo Marín Córdova",
            modalContent: {
                rango: "1996-1999",
                presidente: "Erasmo Marín Córdova",
                evento: "Ing. Enzo Molino Ravetto recibe el Premio al Mérito Informático",
                contenido: [
                    "Noticia sobre la entrega del Premio al Mérito Informático al Ing. Enzo Molino Ravetto (22-26 julio 1996)"
                ],
                imageUrl: "images/Linea de tiempo/Recortes/1996-07-22-Recorte-ComputerWorld-Premio Informatica.jpg"
            }

        },
        { 
            periodo: "1999-2002", 
            presidente: "Mario Fosado Peñaloza" ,
            modalContent: {
                rango: "1999-2002",
                presidente: "Mario Fosado Peñaloza",
                evento: "",
                contenido: [
                    ""
                ],
                imageUrl: "images/Linea de tiempo/Fotos Mario Fosado/Foto2-1-1.jpg"
            }
        },
        { 
            periodo: "2002-2010", 
            presidente: "Carlos Zozaya Gorostiza" ,
            modalContent: {
                rango: "1999-2002",
                presidente: "Mario Fosado Peñaloza",
                evento: "",
                contenido: [
                    ""
                ],
                imageUrl: "images/Linea de tiempo/Fotos Mario Fosado/Foto2-1-1.jpg"
            }
        },
        { 
            periodo: "2010-2013", 
            presidente: "Francisco Cervantes Pérez" ,
            modalContent: {
                rango: "1999-2002",
                presidente: "Mario Fosado Peñaloza",
                evento: "",
                contenido: [
                    ""
                ],
                imageUrl: "images/Linea de tiempo/Fotos Mario Fosado/Foto2-1-1.jpg"
            }
        },
        { 
            periodo: "2013-2016", 
            presidente: "Erik Huesca Morales" ,
            modalContent: {
                rango: "2013-2016",
                presidente: "Erik Huesca Morales",
                evento: "",
                contenido: [
                    ""
                ],
                imageUrl: "images/Linea de tiempo/Fotos Erik Huesca/IMG_0277-1.jpg"
            }
        },
        { 
            periodo: "2016-2019", 
            presidente: "Demetrio Fabián García Nocetti" ,
            modalContent: {
                rango: "2016-2019",
                presidente: "Demetrio Fabián García Nocetti",
                evento: "Celebración de los 40 años del AMIAC ",
                contenido: [
                    "El 13 de ocubre de 2016 se ceelebró el 400 aniversario de la fundación de la Academia Mexicana de la Informática (AMIAC)"
                ],
                imageUrl: "images/Linea de tiempo/Recortes/1976-05-27-Formacion AMIAC.jpg"
            }
        },
        { 
            periodo: "2019-2023", 
            presidente: "Francisco David Mejía Rodríguez" ,
            modalContent: {
                rango: "2019-2023",
                presidente: "Francisco David Mejía Rodríguez",
                evento: "NAICM",
                contenido: [
                    ""
                ],
                imageUrl: "images/Linea de tiempo/2018-NAICM/2018-10-11-Amiac NAICM.jpg"
            }
        },
        { 
            periodo: "2023-2026", 
            presidente: "Rafael Fernández Corro" ,
            modalContent: {
                rango: "2023-2026",
                presidente: "Rafael Fernández Corro",
                evento: "",
                contenido: [
                    ""
                ],
                imageUrl: ""
            }
        }
    ];

    const timelineSection = $('.timeline');
    timelineData.forEach((item, index) => {
        const positionClass = index % 2 === 0 ? 'right' : 'left';
        const container = $(`
            <div class="container ${positionClass}" data-index="${index}">
                <div class="content">
                    <h2 class="periodo-presidente">${item.periodo}</h2>
                    <p class="presidente">${item.presidente}</p>
                </div>
            </div>
        `);
        timelineSection.append(container);
    });

    $('.container').on('click', function() {
        const index = $(this).data('index');
        const modalData = timelineData[index].modalContent;
        if (!modalData) return; // Salir si no hay contenido modal
        const carouselInner = $('.carousel-inner');
        carouselInner.empty();
        const carouselItem = $(`
            <div class="carousel-item active">
                <div class="presidente-card">
                    <div class="rango-cards">
                        <h4>${modalData.rango}</h4>
                        <h2>${modalData.presidente}</h2>
                        <h1>${modalData.evento}</h1>
                    </div>
                    ${modalData.contenido.map(paragraph => `<p>${paragraph}</p>`).join('')}
                </div>
                <div class="img-card">
                    <img src="${modalData.imageUrl}" alt="Imagen de ${modalData.presidente}">
                </div>
            </div>
        `);
        carouselInner.append(carouselItem);
        $('#modal').show();
    });

    $('.close-button').on('click', function() {
        $('#modal').hide();
    });
});


// Este script maneja la visibilidad de los elementos .content
document.addEventListener("DOMContentLoaded", function() {
    function checkVisibility() {
        var elements = document.querySelectorAll(".content");
        var windowHeight = window.innerHeight;

        elements.forEach(function(element) {
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 100) {
                element.classList.add("_show");
            } else {
                element.classList.remove("_show");
            }
        });
    }

    // Ejecutar la función una vez al cargar la página
    checkVisibility();

    // Ejecutar la función cada vez que se haga scroll
    window.addEventListener("scroll", checkVisibility);
});
