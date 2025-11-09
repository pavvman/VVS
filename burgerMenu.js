
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.isOpen = false;
                
        this.init();
    }
            
     init() {
        this.menuToggle.addEventListener('click', () => this.toggle());
                
                // Закрытие по клику на ссылку
        const menuLinks = this.mobileMenu.querySelectorAll('.a1_menu_active');
         menuLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });
    }
            
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
            
    open() {
        this.mobileMenu.classList.add('active');
        this.menuToggle.classList.add('active'); // ДОБАВЛЕНО
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
    }
            
    close() {
        this.mobileMenu.classList.remove('active');
        this.menuToggle.classList.remove('active'); // ДОБАВЛЕНО
        document.body.style.overflow = '';
        this.isOpen = false;
    }
}

        // Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});
