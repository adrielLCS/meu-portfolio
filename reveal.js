
window.revelar = ScrollReveal({reset:true})

// TOPO DO SITE

revelar.reveal('.efeito-txt-topo',
{
    duration: 2000,
    distance: '90px'
})

// TITULOS DAS SECOES

revelar.reveal('.titulo',
{
    duration: 2000,
    distance: '90px',
    origin: 'left'
})

// SESSÕES

revelar.reveal('.efeito-especialidades1',
{
    duration: 2000,
    distance: '90px',
    delay: 100,
    origin: 'left'
})

revelar.reveal('.efeito-especialidades2',
{
    duration: 2000,
    distance: '90px',
    delay: 100
})

revelar.reveal('.efeito-especialidades3',
{
    duration: 2000,
    distance: '90px',
    delay: 100,
    origin: 'right'
})

// INTERFACE RODAPÉ

revelar.reveal('.efeito-interface',
{
    duration: 2000,
    distance: '90px',
    origin: 'bottom'
})
