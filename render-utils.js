export async function renderParticipant(participant) {
    const participantEl = document.createElement('p');
    participantEl.classList.add('participant');
    participantEl.textContent = `${participant.name}: ${participant.contact_email}`;

    return participantEl;
}