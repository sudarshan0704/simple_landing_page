
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu li');
    const about=document.getElementById('about')
    const service=document.getElementById('service')
    // Change background color on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 550 & window.scrollY < 1250) {
            menu.style.backgroundColor = 'black'; // Change to your desired color
            menu.style.color='white'
            about.style.backgroundColor='#555'
             service.style.backgroundColor=''
            
        } else if(window.scrollY > 1250)
        {
             about.style.backgroundColor=''
            service.style.backgroundColor='#555'
        }
        else {
            menu.style.backgroundColor = 'white';
             about.style.backgroundColor=''
             menu.style.color='black'
              service.style.backgroundColor=''
                //  menu.style.color='red'
        }
    });

    // Change background color on hover
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#555'; // Change to hover color
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    })
