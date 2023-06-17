let sec=document.querySelectorAll('.section');
    let links=document.querySelectorAll('nav a');
    window.onscroll=()=>{
        sec.forEach(section=>{
            let top=window.scrollY+120;
            let offset=section.offsetTop;
            let height=section.offsetHeight;
            let id=section.getAttribute('id');
             
            if(top>=offset&&top<offset+height){
                links.forEach(link=>{
                    
                    link.classList.remove('active')
                    document.querySelector('nav a[href*='+id+']').classList.add('active')
                   
                   
                })
            }
    })
}
 