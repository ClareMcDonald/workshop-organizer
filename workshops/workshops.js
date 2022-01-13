import { checkAuth, getWorkshops, deleteParticipant, logout } from '../fetch-utils.js';
import { renderParticipant } from '../render-utils.js';

checkAuth();

const workshopsEl = document.querySelector('.workshops-div');

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    await displayWorkshops();
});


async function displayWorkshops() {
    workshopsEl.textContent = '';

    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const workshopEl = document.createElement('div');
        const nameEl = document.createElement('p');
        const participantsEl = document.createElement('p');

        workshopEl.classList.add('workshop');

        nameEl.textContent = workshop.name;


        for (let participant of workshop.workshop_participants) {
            const participantEl = await renderParticipant(participant);

            participantEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);

                await displayWorkshops();
            });

            participantsEl.append(participantEl);
        }
        
        workshopEl.append(nameEl, participantsEl);
        workshopsEl.append(workshopEl);
    }

}