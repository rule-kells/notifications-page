const cards = document.querySelectorAll('.card')
const btnReadAll = document.querySelector('.btn--read')
const unreadCards = document.querySelectorAll('.card--unread')
const notificationsNum = document.querySelector('.notifications-num')

function notificationNumCounter() {
   const unreadCardsNumCounter = document.querySelectorAll('.card--unread').length
   notificationsNum.innerText = unreadCardsNumCounter
}


cards.forEach(card  => {
    card.addEventListener('click', _ => {
        card.classList.remove('card--unread')
        notificationNumCounter()
    })
})


btnReadAll.addEventListener('click', _ => {
    cards.forEach(card => card.classList.remove('card--unread'))
    notificationNumCounter()
})