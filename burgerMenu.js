document.addEventListener('DOMContentLoaded', function() {
    const menuT = document.getElementById('menuT');
    const mobileMenu = document.getElementById('mobileMenu');
    

    menuT.addEventListener('click', function() {

        const isOpen = mobileMenu.classList.contains('active');
        
        if (!isOpen) {
            mobileMenu.classList.add('active');
            menuT.classList.add('active');
            document.body.style.overflow = 'hidden'; //блокировка прокуртки
        } else {
            mobileMenu.classList.remove('active');
            menuT.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
  
    document.querySelectorAll('#mobileMenu .a1_menu_active').forEach(function(link) {
        
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuT.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});