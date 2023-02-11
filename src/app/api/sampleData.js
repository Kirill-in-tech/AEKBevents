export const sampleData = [
  {
      id: '1',
      title: 'Trip to Empire State building',
      date: '2023-02-21',
      category: 'culture',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'NY, USA',
      venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
      hostedBy: 'Kir',
      // hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      hostPhotoURL: '/kir.jpeg',
      attendees: [
        {
            id: 'a',
            name: 'Kir',
            photoURL: '/kir.jpeg'
        },
        {
            id: 'b',
            name: 'Aliska',
            photoURL: '/aliska.jpeg'
        }
    ]
  },
  {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2023-02-18',
      category: 'drinks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Aliska',
      // hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      hostPhotoURL: '/aliska.jpeg',
      attendees: [
          {
              id: 'a',
              name: 'Kir',
              photoURL: '/kir.jpeg'
          },
          {
              id: 'b',
              name: 'Aliska',
              photoURL: '/aliska.jpeg'
          }
      ]
  }
];
