window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('.load').style.display = 'none';
    }, 1000);
});

const navt = document.querySelector('.navt');
const navm = document.querySelector('.navm');
const navi = document.querySelectorAll('.navi');
const downbtn = document.querySelector('.downbtn');
const disbtn = document.querySelector('.disbtn');
const contactb = document.querySelector('.contactb');

function updact() {
    const scrollpos = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectiontop = section.offsetTop;
        const sectionheight = section.clientHeight;
        const sectionid = section.getAttribute('id');
        
        if (scrollpos >= sectiontop && scrollpos < sectiontop + sectionheight) {
            navi.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionid}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

function scrollto(e) {
    e.preventDefault();
    const targetid = this.getAttribute('href');
    const targetsection = document.querySelector(targetid);
    
    window.scrollTo({
        top: targetsection.offsetTop - 80,
        behavior: 'smooth'
    });
    
    if (window.innerWidth <= 768) {
        navm.classList.remove('active');
    }
}

function discord() {
    window.open('https://discord.gg/PPmsazWqSn', '_blank');
}

function setup() {
    navt.addEventListener('click', () => {
        navm.classList.toggle('active');
    });
    
    navi.forEach(item => {
        item.addEventListener('click', scrollto);
    });
    
    downbtn.addEventListener('click', down);
    disbtn.addEventListener('click', discord);
    contactb.addEventListener('click', discord);
    
    window.addEventListener('scroll', updact);
}

function init() {
    setup();
    updact();
}

document.addEventListener('DOMContentLoaded', init);
