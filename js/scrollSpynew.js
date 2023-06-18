let sec=document.querySelectorAll('.section');
    let links=document.querySelectorAll('nav a');
    const isScrolled=false;
    window.onscroll=()=>{
        sec.forEach(section=>{
            let top=window.scrollY+100;
            let offset=section.offsetTop;
            let height=section.offsetHeight;
            let id=section.getAttribute('id');
          
            if(top>=offset&&top<offset+height){
                links.forEach(link=>{
                  
                    link.classList.remove('active')
                    document.querySelector('nav a.'+id).classList.add('active')
                    
                   
                })
            }
            
       
             
    })
    // while(true){
    //     if(isScrolled===false){
    //         sec.forEach(section=>{
    //             section.classList.remove('active1');
    //         })
    //     }
    // }
}
 