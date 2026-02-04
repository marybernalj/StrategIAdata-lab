   /* Inserta iconos SVG en los placeholders y mantiene orden/semántica */
(function(){
    // ICONOS ORIGINALES (para las Service Cards - hay 4)
    const serviceSvgs = [
        // Data Strategy & Management
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" fill="#fff"/><rect x="14" y="3" width="7" height="7" rx="1.5" fill="#fff"/><rect x="3" y="14" width="7" height="7" rx="1.5" fill="#fff"/><rect x="14" y="14" width="7" height="7" rx="1.5" fill="#fff"/></svg>',
        // Data Insights & Analytics
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 12h18" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M6 7v10" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M12 4v16" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M18 9v7" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
        // Data Automation & Intelligence
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 7h16" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M4 12h10" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M4 17h7" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="19" cy="7" r="2" fill="#fff"/></svg>',
        // Data Skills & Culture (Ícono que habías cambiado a Personas)
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="7" r="2.5" stroke="#fff" stroke-width="2" fill="none"/><path d="M16 11.5c-2.48 0-4.5 2.02-4.5 4.5v1.5h9v-1.5c0-2.48-2.02-4.5-4.5-4.5z" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="7" r="2.5" stroke="#fff" stroke-width="2" fill="none"/><path d="M8 11.5c-1.38 0-2.5 1.12-2.5 2.5v4h5.15" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ];

    // NUEVOS ICONOS (solo para las Phase Cards - hay 3)
    const phaseSvgs = [
        // 01. Data Discovery (Lupa)
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="11" cy="11" r="8" stroke="#fff" stroke-width="2" fill="none"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
        // 02. Adaptive Intelligence (Engranajes)
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" stroke="#fff" stroke-width="2" fill="none"/><line x1="9" y1="9" x2="15" y2="9" stroke="#fff" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="15" x2="15" y2="15" stroke="#fff" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="12" x2="15" y2="12" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
        // 03. Value Acceleration (Gráfico)
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="3 18 8 13 12 17 21 8" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="21" y1="12" x2="21" y2="8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="17" y1="8" x2="21" y2="8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ];

    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Asignar iconos a las TARJETAS DE SERVICIO
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, i) => {
            const iconWrap = card.querySelector('.icon-placeholder');
            if (!iconWrap) return;
            // Usa el array de servicios original
            iconWrap.innerHTML = serviceSvgs[i % serviceSvgs.length]; 
            iconWrap.setAttribute('role','img');
            iconWrap.removeAttribute('aria-hidden');
        });

        // 2. Asignar iconos a las TARJETAS DE FASE (Metodología)
        const phaseCards = document.querySelectorAll('.phase-card');
        phaseCards.forEach((card, i) => {
            const iconWrap = card.querySelector('.icon-placeholder-small');
            if (!iconWrap) return;
            // Usa el nuevo array de fases, específico para la metodología
            iconWrap.innerHTML = phaseSvgs[i % phaseSvgs.length]; 
            iconWrap.setAttribute('role','img');
            iconWrap.removeAttribute('aria-hidden');
        });
    });
})();


  // 1. Obtiene el elemento botón por su ID
  const botonSubstack = document.getElementById('btn');
  
  // 2. Define la URL de redirección
  const urlSubstack = 'https://marybernalj.com';
  
  // 3. Asigna la acción al evento 'click'
  //botonSubstack.addEventListener('click', function() {
    // Redirige al usuario a la URL de suscripción en una nueva pestaña
   // window.open(urlSubstack, '_blank'); 
 // });

// Código para validar el formulario de suscripción al newsletter

    //Agregamos la redirección automática al Blog
    document.getElementById('newsletter-form').addEventListener('submit', function() {
        setTimeout(() => {
            window.location.href = "https://marybernalj.com"; // O la URL de tus temas
        }, 1200); 
    });
