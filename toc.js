// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Introducción</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="index.html">Asignatura</a></li><li class="chapter-item expanded affix "><li class="part-title">HTTP</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="protocolos/intro.html">Introducción</a></li><li class="chapter-item expanded "><a href="protocolos/prerrequisitos.html">Prerrequisitos</a></li><li class="chapter-item expanded "><a href="protocolos/conexiones.html">Conexiones</a></li><li class="chapter-item expanded "><a href="protocolos/peticiones.html">Peticiones</a></li><li class="chapter-item expanded "><a href="protocolos/respuestas.html">Respuestas</a></li><li class="chapter-item expanded "><a href="protocolos/servidor.html">Servidor</a></li><li class="chapter-item expanded "><a href="protocolos/cookies.html">Cookies</a></li><li class="chapter-item expanded affix "><li class="part-title">HTML+CSS+JS</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="html/intro.html">Introducción</a></li><li class="chapter-item expanded "><a href="html/prerrequisitos.html">Prerrequisitos</a></li><li class="chapter-item expanded "><a href="html/login.html">Login</a></li><li class="chapter-item expanded "><a href="html/registro.html">Registro</a></li><li class="chapter-item expanded "><a href="html/principal.html">Principal</a></li><li class="chapter-item expanded "><a href="html/perfil.html">Perfil</a></li><li class="chapter-item expanded "><a href="html/otros.html">Otros</a></li><li class="chapter-item expanded affix "><li class="part-title">React</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="react/intro.html">Introducción</a></li><li class="chapter-item expanded "><a href="react/prerrequisitos.html">Prerrequisitos</a></li><li class="chapter-item expanded "><a href="react/tecnologias.html">Tecnologías</a></li><li class="chapter-item expanded "><a href="react/componentes.html">Componentes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="react/componentes-reutilizacion.html">Reutilización</a></li><li class="chapter-item expanded "><a href="react/componentes-anidamiento.html">Anidamiento</a></li><li class="chapter-item expanded "><a href="react/componentes-ficheros.html">Ficheros</a></li><li class="chapter-item expanded "><a href="react/componentes-listas.html">Listas</a></li></ol></li><li class="chapter-item expanded "><a href="react/estado.html">Estado</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="react/estado-funcionamiento.html">Funcionamiento</a></li><li class="chapter-item expanded "><a href="react/estado-interno.html">Interno</a></li><li class="chapter-item expanded "><a href="react/estado-externo.html">Externo</a></li><li class="chapter-item expanded "><a href="react/estado-objetos.html">Objetos</a></li><li class="chapter-item expanded "><a href="react/estado-arrays.html">Arrays</a></li></ol></li><li class="chapter-item expanded "><a href="react/refs.html">Refs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="react/refs-dom.html">DOM</a></li><li class="chapter-item expanded "><a href="react/refs-callback.html">Callback</a></li></ol></li><li class="chapter-item expanded "><a href="react/efectos.html">Efectos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="react/efectos-funcionamiento.html">Funcionamiento</a></li><li class="chapter-item expanded "><a href="react/efectos-dependencias.html">Dependencias</a></li><li class="chapter-item expanded "><a href="react/efectos-limpieza.html">Limpieza</a></li></ol></li><li class="chapter-item expanded "><a href="react/hooks.html">Hooks</a></li><li class="chapter-item expanded affix "><li class="part-title">React frameworks</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="react-frameworks/intro.html">Introducción</a></li><li class="chapter-item expanded "><a href="react-frameworks/prerrequisitos.html">Prerrequisitos</a></li><li class="chapter-item expanded "><a href="react-frameworks/construccion.html">Construcción</a></li><li class="chapter-item expanded "><a href="react-frameworks/navegacion.html">Navegación</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="react-frameworks/navegacion-datos.html">Datos</a></li><li class="chapter-item expanded "><a href="react-frameworks/navegacion-acciones.html">Acciones</a></li></ol></li><li class="chapter-item expanded "><a href="react-frameworks/estilos.html">Estilos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="react-frameworks/estilos-material-ui.html">Material UI</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Django</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="django/intro.html">Introducción</a></li><li class="chapter-item expanded "><a href="django/prerrequisitos.html">Prerrequisitos</a></li><li class="chapter-item expanded "><a href="django/entorno-desarrollo.html">Entorno desarrollo</a></li><li class="chapter-item expanded "><a href="django/modelos.html">Modelos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/modelos-operaciones.html">Operaciones</a></li><li class="chapter-item expanded "><a href="django/modelos-admin.html">Administración</a></li></ol></li><li class="chapter-item expanded "><a href="django/serializadores.html">Serializadores</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/serializadores-modelos.html">De modelos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/serializadores-modelos-validaciones.html">Validaciones</a></li><li class="chapter-item expanded "><a href="django/serializadores-modelos-operaciones.html">Operaciones BD</a></li></ol></li><li class="chapter-item expanded "><a href="django/serializadores-genericos.html">Genéricos</a></li></ol></li><li class="chapter-item expanded "><a href="django/vistas.html">Vistas</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/vistas-create.html">CreateAPIView</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/vistas-create-post.html">Post</a></li></ol></li><li class="chapter-item expanded "><a href="django/vistas-retrieve.html">RetrieveUpdateDestroyAPIView</a></li><li class="chapter-item expanded "><a href="django/vistas-destroy.html">DestroyAPIView</a></li></ol></li><li class="chapter-item expanded "><a href="django/tests.html">Tests</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/tests-unitarios.html">Unitarios</a></li><li class="chapter-item expanded "><a href="django/tests-integracion.html">Integración</a></li><li class="chapter-item expanded "><a href="django/tests-e2e.html">Extremo a extremo</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="django/tests-e2e-api.html">API</a></li><li class="chapter-item expanded "><a href="django/tests-e2e-ui.html">UI</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="django/documentacion.html">Documentación</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
