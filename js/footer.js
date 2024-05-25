$(document).ready(function() {
  var footerHtml = `
  <section class="footer-contacto">
      <div class="description-footer">
          <span class="contenedor-imagen">
              <img src="images/LogoAMIAC.png" class="logo-footer" alt="logoAMIAC"/>
          </span>
          <h2 class="titulo-contacto">Contacto</h2>
          <p style="padding-left: 150px;">
              La comunidad de la AMIAC está creciendo día con día.
              Nos interesa mucho recibir tus comentarios y opiniones.
              Por favor escríbenos a <b>contacto@amiac.org</b>
          </p>
          <p style="padding-left: 150px;">
              Consulta el Aviso de Privacidad
              <br />
              <a href="" target="_blank" rel="noopener noreferrer">Descargar</a>
          </p>
      </div>
      <ul class="footer-redes">
          <h2>Redes sociales</h2>
          <li><a href="https://www.facebook.com/AMIACoficial/"><img src="images/facebook-icon.png" alt="Facebook" /> Academia Mexicana de Informática</a></li>
          <li><a href="https://www.instagram.com/amiac_oficial/"><img src="images/instagram-icon.png" alt="Instagram" /> amiac_oficial</a></li>
          <li><a href="https://twitter.com/AMIAC_mx"><img src="images/twitter-icon.png" alt="Twitter" /> Academia Mexicana de Informática</a></li>
          <li><a href="https://www.linkedin.com/company/amiac-oficial/"><img src="images/linkedin-icon.png" alt="LinkedIn" /> AMIAC</a></li>
      </ul>
  </section>
  `;

  $("#main-footer").html(footerHtml);
});
