const dropdowns = document.querySelectorAll('.difference_dropdown')

dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', (e) => {
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
    })
  });