
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle?.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));
const progress=document.getElementById('scrollProgress');
function updateProgress(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  if(progress) progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';
}
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -35px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const projectDetails={
  "ERP Management System":{
    overview:"Cross-platform ERP mobile applications supporting business workflows across inventory, sales, and HR.",
    contribution:"Contributed to Flutter application features, responsive interfaces, REST API integration, and state management for complex workflows as part of a cross-functional team at National Quality.",
    technologies:["Flutter","Dart","Bloc / Cubit","RESTful APIs","ERP workflows"],
    note:"Professional work. The product is internal; no public repository or actual application screenshots were included in the supplied files."
  },
  "Electronic Rosary":{
    overview:"A digital rosary application for managing azkar and tracking daily progress.",
    contribution:"Implemented counter updates, azkar list management, local progress persistence, and a simple responsive user interface.",
    technologies:["Flutter","Dart","GetX","GetStorage"],
    note:"Personal application. The supplied files include an illustrative project graphic, not an actual app screenshot."
  },
  "Diva — E-Commerce":{
    overview:"A fashion shopping application for browsing clothing collections and making purchases.",
    contribution:"Contributed during a mobile application development internship, focusing on performance optimization and improving the presentation of product data.",
    technologies:["Flutter","Dart","Mobile UI","Performance Optimization"],
    note:"Internship contribution. No public repository or actual application screenshots were included in the supplied files."
  },
  "E-Commerce App":{
    overview:"A cross-platform shopping application covering product listings, cart functionality, authentication, and payment-processing flows.",
    contribution:"Worked on Flutter implementation, REST API integration, and state management to organize the shopping experience.",
    technologies:["Flutter","Dart","Dio","Retrofit","Bloc / Cubit"],
    note:"Project description is based on the supplied CV. No public repository or actual application screenshots were included in the supplied files."
  },
  "Sakany — Real Estate":{
    overview:"A real-estate application interface helping users connect with realtors to rent or purchase apartments.",
    contribution:"Designed responsive Flutter UI and applied Clean Architecture principles to support a maintainable application structure.",
    technologies:["Flutter","Dart","Clean Architecture"],
    note:"Project description is based on the supplied CV. No public repository or actual application screenshots were included in the supplied files."
  },
  "Deco — Home Décor":{
    overview:"A graduation project concept for exploring home décor ideas and colors while facilitating communication with design companies.",
    contribution:"Developed as the graduation project at the Faculty of Computers and Artificial Intelligence, Sohag University. The project received an Excellent grade of 99%.",
    technologies:["Mobile Application","UI/UX","Home Décor"],
    note:"The 99% grade refers to the graduation project, not the overall university degree. The supplied files include an illustrative project graphic."
  }
};
const dialog=document.getElementById('projectDialog');
const closeDialog=()=>dialog?.close();
document.querySelectorAll('[data-project]').forEach(button=>{
  button.addEventListener('click',()=>{
    const data=projectDetails[button.dataset.project];
    if(!data||!dialog) return;
    dialog.querySelector('#dialogTitle').textContent=button.dataset.project;
    dialog.querySelector('.dialog-overview').textContent=data.overview;
    dialog.querySelector('.dialog-contribution').textContent=data.contribution;
    dialog.querySelector('.dialog-note').textContent=data.note;
    const tech=dialog.querySelector('.dialog-tech');
    tech.replaceChildren(...data.technologies.map(item=>{
      const tag=document.createElement('span');
      tag.textContent=item;
      return tag;
    }));
    dialog.showModal();
  });
});
dialog?.querySelector('.dialog-close')?.addEventListener('click',closeDialog);
dialog?.addEventListener('click',event=>{
  if(event.target===dialog) closeDialog();
});
