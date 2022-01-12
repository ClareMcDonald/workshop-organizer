import { getWorkshops } from '../fetch-utils.js';

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