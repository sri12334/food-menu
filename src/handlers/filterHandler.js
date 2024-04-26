const filterHandler = (button => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        const id = button.id;
        if (id === 'all') {
            item.classList.remove('hidden');
        } else if (item.classList.contains(id)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

export default filterHandler;