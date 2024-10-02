const title = "Bolsa Ecológica";
const email = "explorador44@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3143829680";
const textos = {
    index: {
        title: `${title}`,
        slogan: "Ayuda al planeta con la bolsa ecológica",
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Bolsa Ecológica, nos dedicamos a ofrecer soluciones sostenibles con nuestras bolsas ecológicas de alta calidad. Nuestro compromiso es proporcionar productos que no solo cumplen con tus necesidades de almacenamiento y transporte, sino que también contribuyen a la protección del medio ambiente. Cada bolsa ecológica que ofrecemos está diseñada para ser duradera, funcional y amigable con el planeta. Al elegir nuestras bolsas, estás tomando una decisión consciente para reducir el uso de plásticos y apoyar prácticas más sostenibles. \n" +
            "En Bolsa Ecológica, creemos que cada pequeño cambio cuenta. Nuestro objetivo es facilitarte la adopción de hábitos más ecológicos sin sacrificar la calidad ni el estilo. Únete a nosotros en nuestra misión de hacer del mundo un lugar más verde y sostenible. \n" +
            "Explora nuestra gama de bolsas ecológicas y contribuye a un futuro más limpio y saludable para todos. Con Bolsa Ecológica, cada compra es un paso hacia un planeta más verde. "
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: "Ayuda al planeta con la bolsa ecológica",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565614051645&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
