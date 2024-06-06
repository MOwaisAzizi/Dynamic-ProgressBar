const animatedSection = document.querySelector('.animation')
const animatedSection2 = document.querySelector('.animation2')
const animatedSection3 = document.querySelector('.animation3')
const animatedSection4 = document.querySelector('.animation4')
const animatedSection5 = document.querySelector('.animation5')
    
    const option = {
        root:null,
        rootMargin:'0px',
        threshold:0.5
    }

const callback = (entries,observer)=>{
    const [entry] = entries
    console.log(entry);
    if(entry.isIntersecting){
        animatedSection.classList.add('html')
        animatedSection2.classList.add('css')
        animatedSection3.classList.add('js')
        animatedSection4.classList.add('bootstrap')
        animatedSection5.classList.add('react')
}
}
    const observer = new IntersectionObserver(callback,option)
    observer.observe(animatedSection,animatedSection2,animatedSection3,animatedSection4,animatedSection5)
