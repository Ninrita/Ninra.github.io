
document.addEventListener('DOMContentLoaded', () =>
{
    const inglish = document.getElementById("Inglish");
    const spanish = document.getElementById("Spanish");

    const aboutmeText01 = document.getElementById("Aboutme01");
    const aboutmeText02 = document.getElementById("Aboutme02");
    const addonText = document.getElementById("Addons");

    const cardText01 = document.getElementById("CardText01");
    const cardText02 = document.getElementById("CardText02");

    inglish.addEventListener("click", () =>
    {
        aboutmeText01.textContent = `About me`
        
        aboutmeText02.textContent = `I am an independent developer taking my first steps in the Unity Asset Store. I specialize in creating add-ons for the MMORPG Kit, as I am also working on my own MMORPG based on this asset.
        Most of my assets are used directly in my project, which allows me to guarantee their proper functioning and ensure that they are attractive and truly useful.
        I am confident in the quality of my creations and hope you will give them a try. Thank you in advance for your support!`.trim();
        
        addonText.textContent = `Add-ons for the MMORPG Kit `.trim();
        
        cardText01.textContent = `Expand your MMORPG KIT combat system with dynamic, multi-hit movement skills. 
        Reuse the built-in “area damage entity” class to spawn damage zones on the fly,
         ensuring seamless compatibility and no conflicts. `.trim();

          cardText02.textContent = `I’m working on a fully featured MP charging system inspired by Naruto and Dragon Ball.
            Its adaptation will be a bit more complex, but I hope to do it without making changes to the core.
            some progress videos coming.`.trim();
    });

    spanish.addEventListener("click", () =>
    {
        aboutmeText01.textContent = `Sobre Mi`
        
        aboutmeText02.textContent = `Soy un desarrollador independiente que está dando sus primeros pasos en la Unity Asset Store. Me especializo en crear complementos para MMORPG Kit, ya que también estoy trabajando en un MMORPG propio basado en este asset.
        La mayoría de mis assets los uso directamente en mi proyectos "Gaiden Online", lo que me permite garantizar su correcto funcionamiento y asegurar que sean atractivos y realmente útiles.
        Confío en la calidad de mis creaciones y espero que les des una oportunidad. ¡Gracias de antemano por tu apoyo`.trim();
       
        addonText.textContent = `Add-ons para el MMORPG Kit`.trim();
       
        cardText01.textContent = `Amplía tu sistema de combate del MMORPG KIT con habilidades de movimiento dinámicas de múltiples impactos.
         Reutiliza la clase integrada “area damage entity” para generar zonas de daño sobre la marcha, 
         garantizando compatibilidad perfecta y sin conflictos.`.trim();

         cardText02.textContent = `Estoy trabajando un sistema capaz de poder cargar mp al estilo de naruto y dragon ball bastante completo esten atentos`.trim();
    });
});