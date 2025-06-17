document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('journal-category');
    const categoryIcon = document.getElementById('categoryIcon');

    const iconMap = {
        'idea': 'bulb',
        'note': 'pencil',
        'goal': 'flag',
        'habit': 'repeat',
        'memory': 'camera',
        'mood': 'happy',
        'event': 'calendar',
        'task': 'checkmark-circle',
        '': 'ellipsis-horizontal'
    };

    function updateCategoryIcon() {
        const selectedValue = categorySelect.value;
        categoryIcon.name = iconMap[selectedValue] || 'help-circle';
    }

    categorySelect.addEventListener('change', updateCategoryIcon);
    updateCategoryIcon();
});
