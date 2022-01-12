import { createParticipant, getWorkshops } from '../fetch-utils.js';

const form = document.querySelector(form);

window.addEventListener('load', async() => {
    const workshopDropdown = document.querySelector('select');
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const optionEl = document.createElement('option');
        
        optionEl.value = workshop.id;
        optionEl.textContent = workshop.name;
        workshopDropdown.append(optionEl);
    }
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const contact = data.get('contact');
    const workshop = data.get('workshop-dropdown');

    const newParticipant = {
        name: name,
        contact_email: contact,
        wokrshop_id: workshop,
    };

    await createParticipant(newParticipant);

    window.location.href = '../workshops';
});