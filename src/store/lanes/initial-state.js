export default {
  lanes: [
    {
      id: 'id-lane-1',
      name: 'My lane',
      board: 'id-1',
      cards: [
        {
          id: 'card-id-1',
          title: 'Card 1 title',
          body: 'Card booody loong text is here',
          image: 'http://image.com',
          lane: 'id-lane-1'
        },

        {
          id: 'card-id-2',
          title: 'Card 2 title',
          body: 'Card booody loong text is here',
          image: 'http://image.com',
          lane: 'id-lane-1'
        }
      ]
    },
    {
      id: 'id-lane-2',
      name: 'My lane 2',
      board: 'id-1',
      cards: [
        {
          id: 'card-id-2',
          title: 'Card 2 title',
          body: 'Card booody loong text is here',
          image: 'http://image2.com',
          lane: 'id-lane-1'
        }
      ]
    }
  ]
}
