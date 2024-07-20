const dropdowns = document.querySelectorAll('.difference_dropdown')
const dropdowns_crypto = document.querySelectorAll('.earn_block_top')
const dropdowns_review = document.querySelectorAll('.review_content')

function drop(e) {
    const dd = e.currentTarget
    const parent = dd.parentNode
    
    parent.classList.toggle('bg-dd')
    parent.classList.toggle('bg-ac')
    dd.querySelector('p').classList.toggle('white-font')
    dd.querySelector('p').classList.toggle('black-font')
    dd.querySelector('.dif-bg').classList.toggle('dif-act')
    dd.querySelector('.dif-cis').classList.toggle('dif-act-c')
    dd.querySelector('.dif-row').classList.toggle('row-act')
    parent.querySelector('.difference_dropdown_add').classList.toggle('invs')
}

function dropCrypto(e) {
    const dd = e.currentTarget
    const parent = dd.parentNode
    dd.querySelector('.dif-row').classList.toggle('row-act-crypto')
    parent.querySelector('.earn_block_bottom').classList.toggle('invs')
}

function dropReview(e) {
    const dd = e.currentTarget
    dd.classList.toggle('review_close')
    dd.classList.toggle('bg-ac')
    dd.querySelector('.inter-r').classList.toggle('black-font')
    dd.querySelector('.inter-r').classList.toggle('white-font')
    // parent.querySelector('.earn_block_bottom').classList.toggle('invs')
}

dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', (e) => {
        drop(e)
    })
  });

  dropdowns_crypto.forEach(function (dropdown) {
    dropdown.addEventListener('click', (e) => {
        dropCrypto(e)
    })
  })

  dropdowns_review.forEach(function (dropdown) {
    dropdown.addEventListener('click', (e) => {
        dropReview(e)
    })
  })