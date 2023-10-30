var deleteAllButton = document.getElementById('deleteAll');
deleteAllButton.addEventListener('click', function () {

    localStorage.clear();

    console.log('Bütün data  silindi.');
});