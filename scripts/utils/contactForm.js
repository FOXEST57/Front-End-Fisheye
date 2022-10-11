
function displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
    document.querySelector('#firstname').focus()
}

function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
}

document.querySelector('#submit_button').addEventListener('click', (e) =>
{
    e.preventDefault();
    const firstNameEl = document.querySelector('#firstname');
    const lastNameEl = document.querySelector('#lastname');
    const emailEl = document.querySelector('#email');
    const messageEl = document.querySelector('#message');

    if (isNameValid(firstNameEl) && isNameValid(lastNameEl) && isEmailValid(emailEl) && isMessageValid(messageEl))
    {
        console.log({
            firstName: firstNameEl.value,
            lastName: lastNameEl.value,
            email: emailEl.value,
            message: messageEl.value,
        })
        closeModal()
    }    
    
})
const modal = document.getElementById('contact_modal').style.display = 'none';


function isNameValid(el)
{
    hideError(el)
    const name = el.value;
    let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (name.length < 2 || name === '' || !regex.test(name))
    {
        console.log(el, 'prob')
        showError(el)
        return false;
    }
    return true;
}

function isMessageValid(el)
{
    const message = el.value;
    hideError(el)
    if (message.trim(' ').length < 5)
    {
        showError(el);
        return false;
    }
    return true;
}

function isEmailValid(el)
{
    const mail = el.value
    hideError(el)

    let regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(mail) || mail == '')
    {
        showError(el)
        return false;
    }
    return true;    
}

function showError(el)
{
    const div = document.createElement('p')
    div.classList.add('error')
    div.innerText = 'Merci de corriger l erreur.'
    el.closest('.form-group').appendChild(div)
}

function hideError(el)
{
    const p = el.closest('.form-group').querySelector('p.error');
    
    if (p)
    {
        p.remove()
    }
}