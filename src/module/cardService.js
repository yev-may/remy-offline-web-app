
export function saveCard(card, level) {
    let cards = localStorage.getItem(level);
    cards = cards != null 
        ? JSON.parse(cards)  : [];
    cards.push(card);
    localStorage.setItem(level, JSON.stringify(cards));
}