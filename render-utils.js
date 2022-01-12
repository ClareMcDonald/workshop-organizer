export async function renderParticipant(participant) {
    const participantEl = document.createElement('h3');
    participantEl.classList.add('participant');
    participant.textContent = `${participant.name}: ${participant.contact_email}`;

    return participantEl;
}