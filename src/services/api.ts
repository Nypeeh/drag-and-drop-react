export function loadLists() {
  return [
    {
      id: 0,
      title: 'Tarefas',
      creatable: false,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: '/photo.jpg'
        },
        {
          id: 2,
          content:
            'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: '/photo.jpg'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: '/photo.jpg'
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: '/photo.jpg'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: '/photo.jpg'
        }
      ]
    },
    {
      id: 1,
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: '/photo.jpg'
        }
      ]
    },
    {
      id: 2,
      title: 'Planejando',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: '/photo.jpg'
        }
      ]
    },
    {
      id: 3,
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 8,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: '/photo.jpg'
        },
        {
          id: 9,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: '/photo.jpg'
        },
        {
          id: 10,
          content: 'Ajustes na biblioteca unform',
          labels: []
        }
      ]
    },
    {
      id: 4,
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 11,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: []
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7']
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1']
        }
      ]
    }
  ]
}
