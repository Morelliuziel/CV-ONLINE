const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }else{

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";

    }

});

const textos = [

    "Estudiante de Sistemas",
    "Desarrollador Backend",
    "Programador Java",
    "Desarrollador Web"

];

let indiceTexto = 0;
let indiceLetra = 0;
let borrando = false;

const typing = document.getElementById("typing");

function escribir(){

    const texto = textos[indiceTexto];

    if(!borrando){

        typing.textContent = texto.substring(0,indiceLetra++);

        if(indiceLetra > texto.length){

            borrando = true;

            setTimeout(escribir,1500);

            return;

        }

    }else{

        typing.textContent = texto.substring(0,indiceLetra--);

        if(indiceLetra < 0){

            borrando = false;

            indiceTexto++;

            if(indiceTexto >= textos.length){

                indiceTexto = 0;

            }

        }

    }

    setTimeout(escribir,borrando ? 40 : 90);

}

escribir();

const botonModo = document.querySelector(".modo");

let oscuro = true;

botonModo.addEventListener("click",()=>{

    if(oscuro){

        document.documentElement.style.setProperty("--color-fondo","#F1F5F9");
        document.documentElement.style.setProperty("--color-fondo2","#FFFFFF");
        document.documentElement.style.setProperty("--color-card","#FFFFFF");
        document.documentElement.style.setProperty("--color-texto","#0F172A");
        document.documentElement.style.setProperty("--color-gris","#475569");

        botonModo.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        document.documentElement.style.setProperty("--color-fondo","#0F172A");
        document.documentElement.style.setProperty("--color-fondo2","#1E293B");
        document.documentElement.style.setProperty("--color-card","#162032");
        document.documentElement.style.setProperty("--color-texto","#F8FAFC");
        document.documentElement.style.setProperty("--color-gris","#94A3B8");

        botonModo.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

    oscuro=!oscuro;

});

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*20;

        const rotateX=((y/rect.height)-0.5)*-20;

        card.style.transform=`perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(700px) rotateX(0) rotateY(0)";

    });

});

const subir=document.createElement("button");

subir.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

subir.className="subir";

document.body.appendChild(subir);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        subir.classList.add("mostrar");

    }else{

        subir.classList.remove("mostrar");

    }

});

subir.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.15});

document.querySelectorAll(".card,.proyecto,.estadisticas div").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=".7s";

    observer.observe(el);

});