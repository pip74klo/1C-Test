const data = [
  {
    title: 'Интерфейсные механизмы',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfdXsaxq_4ukGydKKZwVfdx18COQ5BMam9xslXO-qgPOwAXag/viewform?usp=preview'
  },
  {
    title: 'Конструкторы',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSegiZRoZIBhPNzdaPoiKa4m2C1xJoo09SghmOuSGRufI7YPZQ/viewform'
  },
  {
    title: 'Механизмы интеграции и обмена данными',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfvnHtRcSpqGbqrjHixAHTZW8Vz5iCTMPuFyMbWDM1RKvRqLQ/viewform'
  },
  {
    title: 'Механизмы оперативного учета',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSenlBeT3VgWQqKj9BQ1Aau9gfS55T8s56wGPPl0Lcna0J02Fg/viewform?usp=preview'
  },
  {
    title: 'Механизмы построения отчетности',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeLctsckg5dS84-aGvYhUKccXPfdIXHYidPU3kR-Mf8TeIRxg/viewform'
  },
  {
    title: 'Механизмы сложных периодических расчетов',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScuCbNLNZ4SKSx4fltrJYerrnHJSSh4IuzmK-9BUEF04hG0jw/viewform'
  },
  {
    title: 'Обслуживание прикладного решения',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdGoSMMSKnqD12ijtPkOjqdviWDoftXEd7Sbb6D6kYz08mIhw/viewform'
  },
  {
    title: 'Общие механизмы, понятия и термины',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScI9YqjZB-X9N2ArtNlS2b_LgfND4BLIwZKTflbqx4HaIPY1A/viewform'
  },
  {
    title: 'Объектная модель прикладного решения',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdVcaE7BD3o9z_XSY3XqjSW5y4Vx6Cidi5sfA4Mm2QTLUB-cA/viewform'
  },
  {
    title: 'Объекты и механизмы бухгалтерского учета',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeYdOJguyH6UeqsSbYVQyxHqSkpmOMVdclgGih1fmQa_dbtXg/viewform?usp=preview'
  },
  {
    title: 'Редакторы и инструменты общие',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe94oZkbtmb0MbnzN5SMKTNG8SRywIWZxtfQrflINJTO7gg1Q/viewform?usp=preview'
  },
  {
    title: 'Редакторы и инструменты режима разработки',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfmwiUc5qHUxMdMV2PIecrv5MWurD4OPedZyFcdFTyA7TElLw/viewform?usp=preview'
  },
  {
    title: 'Табличная модель прикладного решения',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdfbnqHdM6FKRMnftFY2vqtf_LO3cKbe1qCANC01KUCo2SVfg/viewform?usp=preview'
  },
  {
    title: 'Технология разработки',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeJbvdRNS_W3S2apDR5-jhe1E2FcCkPefTfaf2wNGgLlhRbtw/viewform?usp=header'
  },
]

const list = document.querySelector('.list')
const info = data.map(({ link, title }, index) => {
  return `
  <li class="item">
    <a class="link" href=${link}>
    ${index + 1}. ${title}.
    </a>
  </li>
  `
}).join('')

list.innerHTML = info