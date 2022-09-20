import mock from '../mock'

const data = {
  pricing: {
    basicPlan: {
      title: 'Mercari Silver',
      img: require('@src/assets/images/illustration/Pot1.svg').default,
      subtitle: 'A simple start for everyone',
      monthlyPrice: 10,
      yearlyPlan: {
        perMonth: 0,
        totalAnnual: 0
      },
      planBenefits: [
        'Minimum  deposit of $500 to maximum investment deposit of $8500',
        'Up to $6000 insurance back up',
        'Withdraw profit instantly.'
        
      ],
      popular: false
    },
    standardPlan: {
      title: 'Mercari Gold',
      img: require('@src/assets/images/illustration/Pot2.svg').default,
      subtitle: 'For personal and business owners',
      monthlyPrice: 15,
      yearlyPlan: {
        perMonth: 40,
        totalAnnual: 480
      },
      planBenefits: [
        'Minimum deposit of $8500 to maximum investment deposit of $55,000',
        'Up to $45,000 insurance back up',
        'Withdraw profit instantly',
        'Personal Investment Advisor.'
      ],
      popular: true
    },
    enterprisePlan: {
      title: 'Mercari Diamond',
      img: require('@src/assets/images/illustration/Pot3.svg').default,
      subtitle: 'Solution for big earners',
      monthlyPrice: 20,
      yearlyPlan: {
        perMonth: 80,
        totalAnnual: 960
      },
      planBenefits: [
        'Minimum deposit of $55,000',
        'Up to $800,000 insurance back up',
        'Withdraw profit instantly',
        'Personal Investment Advisor.'
      ],
      popular: false
    },
    qandA: [
      {
        question: 'Does my subscription automatically renew?',
        ans:
          'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      },
      {
        question: 'Can I store the item on an intranet so everyone has access?',
        ans:
          'Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.'
      },
      {
        question: 'Am I allowed to modify the item that I purchased?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      }
    ]
  }
}

mock.onGet('/pricing/data').reply(() => [200, data.pricing])
