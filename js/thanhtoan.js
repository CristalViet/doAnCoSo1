
    
    const sublanguage = document.querySelector('.sub-language')
    const btnlanguage = document.querySelector('.item-language')
    const cart = document.querySelector('.js-select-cart')
    const arrayCart = document.querySelectorAll('.container-cart')
    const emptyCart = document.querySelector('.js-close-cart')          
    
    const item_language=document.querySelector('.item-language')
    const language = document.querySelector('.js-select-language')
    const btnlogout = document.querySelector('.logout')
    const divlogout = document.querySelector('.item-login-out')
    
    const leave = document.getElementById("header"),
    elementOfLang=sublanguage.querySelectorAll('.lg'),
    sBtn=language.querySelector('.sBtn'),
    readmoreBtn=document.querySelector('.readmore');
    hidden_content=document.querySelector('.content-hidden')

    var sliderItems = document.querySelectorAll('.content-background');
    var currentSlide = 0;
    var imagePaths = [
        '/img/slider1.jpg',
        '/img/slider2.jpg',
        '/img/slider3.jpg'
    ];

    function changeSlide() {
        sliderItems.forEach(function(item) {
            item.style.backgroundImage = "url('" + imagePaths[currentSlide] + "')";
        });

        currentSlide++;
        if (currentSlide >= imagePaths.length) {
            currentSlide = 0;
        }
    }

    setInterval(changeSlide, 3000);
        

    function showLanguageSelect() {
        sublanguage.classList.add('open')
        // item_language.classList.add('arrow-down')
    }

    function updateshowLanguageSelect() {
        btnlanguage.addEventListener('click', showLanguageSelect)
    }
    // readmoreBtn.addEventListener('click',()=>{
        
    //     readmoreBtn.classList.add('d-none');
    //     hidden_content.classList.add('d-block');

        
    // })
    elementOfLang.forEach( lgue=>{
        lgue.addEventListener('click',()=>{
            let textLang=lgue.innerText;
        if(textLang==='TIẾNG VIỆT'){
            sBtn.innerText='vi'
            
        }
        else sBtn.innerText='en'
        })
        updateshowLanguageSelect();
    })

    function test () {
        alert("Show")
    }


    function unshowLanguageSelect() {
        const target = event.target
        if (target != sublanguage && target != language && target != btnlanguage) {
            sublanguage.classList.remove('open')
            // item_language.classList.remove('arrow-down')
        }
    }

    function headerChangeBackground () {
        const scrolltop = window.pageYOffset
        if (scrolltop > 0) {
            leave.classList.add('ontop')
        }else {
            leave.classList.remove('ontop')
        }
    }


    function closeCart () {
        arrayCart.forEach(element => {
            element.classList.remove('open')
        }) 
    }

    function openCart () {
        arrayCart.forEach(element => {
            element.classList.add('open')
        })
    }

    function openLogin() {
        window.location.href = "/login.html"
    }

    function openLogout() {
        btnlogout.classList.add('open')
    }

    function logout() {
        window.location.href="/index.html"
    }

    // function unshowLogout() {
    //     const target = event.target
    //     if (target != divlogout) {
    //         btnlogout.classList.remove('open')
    //     }
    // }

    function unshow() {
        unshowLogout() 
        unshowLanguageSelect()
        
    }

    divlogout.addEventListener('click', openLogout, false)
    emptyCart.addEventListener('click', closeCart)
    cart.addEventListener('click', openCart)
    btnlanguage.addEventListener('click', updateshowLanguageSelect)
    btnlanguage.addEventListener('click', showLanguageSelect)
    document.addEventListener('click', unshowLanguageSelect)
    // document.addEventListener('click', unshowLogout)
    window.addEventListener('scroll', headerChangeBackground)

    // language.addEventListener('click', showLanguageSelect)
    // document.addEventListener('click', unshowLanguageSelect)
    // window.addEventListener('scroll', headerChangeBackground)

