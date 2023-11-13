document.getElementById('resetButton').addEventListener('click', resetForm);

function resetForm() {
    const formElements = document.getElementById('form').elements;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== 'button') {
            formElements[i].value = '';
        }
    }
};

