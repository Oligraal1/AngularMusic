import { Album, List } from './album';

export const ALBUMS: Album[] = [
    {
        'id': '1',
        'ref': 'Rock',
        'name': 'Metallica',
        'title': 'Master of Puppets',
        'description': 'Voluptate mollit consectetur pariatur labore. Quis amet quis minim nulla voluptate amet nisi. Ut sint veniam magna aute velit minim laborum eiusmod mollit dolor laborum. Minim Lorem Lorem pariatur adipisicing laborum tempor consequat est officia proident. Qui consequat duis ipsum minim Lorem cillum in excepteur.\r\n',
        'duration': 600,
        'url': './assets/img/master.jpg',
        'youtube': 'https://www.youtube.com/watch?v=xnKhsTXoKCI',
        'like': 'Much',
        'tags': [
            'nisi',
            'do',
            'id',
            'laborum',
            'non',
            'sint',
            'cillum'
        ],
        'status': 'off'
    },
    {
        'id': '2',
        'ref': 'Punk',
        'name': 'Les sheriffs',
        'title': 'Les deux doigts dans la prise',
        'description': 'Magna laborum quis qui deserunt id. Aute sint consequat aliquip minim duis tempor reprehenderit laborum pariatur ut anim culpa. Laboris sit ea cillum ex nostrud deserunt. Nulla deserunt exercitation non eu ipsum. Cillum ut irure et ea esse ea anim nostrud proident. Non incididunt ut velit pariatur. Occaecat qui fugiat cupidatat est pariatur irure sunt excepteur anim.\r\n',
        'duration': 480,
        'url': './assets/img/sheriff.jpg',
        'youtube': 'https://www.youtube.com/watch?v=7byGsx4uojE',
        'like': 'Much',
        'status': 'off'
    },
    {
        'id': '3',
        'ref': 'Rock',
        'name': 'The Clash',
        'title': 'London Calling',
        'description': 'Exercitation sunt qui sint eiusmod velit est dolor duis commodo nulla cillum cupidatat dolor voluptate. Amet aute duis deserunt ad quis eiusmod est. In veniam veniam mollit velit qui amet quis. Et do sint ipsum nisi velit culpa laborum.\r\n',
        'duration': 760,
        'url': './assets/img/clash.jpg',
        'youtube': 'https://www.youtube.com/watch?v=EfK-WX2pa8c',
        'tags': [
            'elit',
            'eiusmod',
            'qui',
            'voluptate',
            'ea',
            'incididunt',
            'amet'
        ],
        'status': 'off'
    },
    {
        'id': '4',
        'ref': 'Reggae',
        'name': 'Damian Marley',
        'title': 'Medication',
        'description': 'Cillum proident commodo do non esse cillum incididunt officia qui occaecat. Excepteur id voluptate esse tempor aliqua voluptate in labore anim incididunt ea nostrud nisi. Proident adipisicing adipisicing enim adipisicing nisi elit irure.\r\n',
        'duration': 840,
        'url': './assets/img/medication.jpg',
        'youtube': 'https://www.youtube.com/watch?v=9PukqhfMxfc',
        'like': 'Rather',
        'tags': [
            'laborum',
            'elit',
            'tempor',
            'eu',
            'laborum',
            'mollit',
            'aliqua'
        ],
        'status': 'off'
    },
    {
        'id': '5',
        'ref': 'Punk',
        'name': 'Les vaches laitières',
        'title': 'On est pas des moutons',
        'description': 'Labore tempor laborum voluptate exercitation velit tempor magna ut pariatur sint ex. Est id magna mollit ipsum mollit minim officia. Enim aliquip eiusmod sunt incididunt aliquip occaecat eu. Eiusmod fugiat aliquip officia tempor esse ut et nulla. Commodo consectetur aliquip mollit laborum velit dolor quis nisi do. Consectetur voluptate quis nostrud deserunt incididunt ea in ad adipisicing ea laboris ullamco. Occaecat consectetur mollit deserunt excepteur enim consectetur dolor nostrud aute.\r\n',
        'duration': 240,
        'url': './assets/img/vaches.jpg',
        'youtube': 'https://www.youtube.com/watch?v=94voEjtAKbg',
        'like': 'Rather',
        'status': 'off'
    },
    {
        'id': '6',
        'ref': 'Hip Hop',
        'name': 'Mos Def',
        'title': 'The Ecstatic',
        'description': 'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
        'duration': 580,
        'url': './assets/img/mos.jpg',
        'youtube': 'https://www.youtube.com/watch?v=vwjwKPXy4sg',
        'like': 'Much',
        'tags': [
            'consectetur',
            'do',
            'commodo',
            'consequat',
            'pariatur',
            'irure',
            'fugiat'
        ],
        'status': 'off'
    },
    {
        'id': '7',
        'ref': 'Reggae',
        'name': 'Tiken Jah Fakoly',
        'title': 'Françafrique',
        'description': 'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
        'duration': 240,
        'url': './assets/img/tiken.jpg',
        'youtube': 'https://www.youtube.com/watch?v=NsDJMDUYed0',
        'like': 'Much',
        'tags': [
            'consectetur',
            'do',
            'commodo',
            'consequat',
            'pariatur',
            'irure',
            'fugiat'
        ],
        'status': 'off'
    },
    {
        'id': '8',
        'ref': 'Hip Hop',
        'name': 'GZA',
        'title': 'Liquid Swords',
        'description': 'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
        'duration': 240,
        'url': './assets/img/gza.jpg',
        'youtube': 'https://www.youtube.com/watch?v=wA49DaVmJWQ',
        'like': 'Much',
        'tags': [
            'consectetur',
            'do',
            'commodo',
            'consequat',
            'pariatur',
            'irure',
            'fugiat'
        ],
        'status': 'off'
    },
    {
        'id': '9',
        'ref': 'Pop',
        'name': 'David Bowie',
        'title': 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        'description': 'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
        'duration': 240,
        'url': './assets/img/bowie.jpg',
        'youtube': 'https://www.youtube.com/watch?v=sI66hcu9fIs',
        'like': 'Much',
        'tags': [
            'consectetur',
            'do',
            'commodo',
            'consequat',
            'pariatur',
            'irure',
            'fugiat'
        ],
        'status': 'off'
    },
    {
        'id': '10',
        'ref': 'Pop',
        'name': 'The Cure',
        'title': 'Disintegration',
        'description': 'Nostrud veniam dolor velit id occaecat cupidatat aliquip exercitation id aliqua nostrud. Ad mollit Lorem consectetur minim consequat est eiusmod deserunt pariatur est ullamco. Veniam anim veniam Lorem excepteur irure. Esse adipisicing nulla in incididunt. Consectetur fugiat exercitation aliquip excepteur ipsum ullamco ullamco magna commodo.\r\n',
        'duration': 240,
        'url': './assets/img/cure.jpg',
        'youtube': 'https://www.youtube.com/watch?v=Ae7fLwy4MP8',
        'like': 'Much',
        'tags': [
            'consectetur',
            'do',
            'commodo',
            'consequat',
            'pariatur',
            'irure',
            'fugiat'
        ],
        'status': 'off'
    }
];

export const ALBUM_LISTS: List[] = [
    {
      'id': '1',
      'list': [
        'ad',
        'qui',
        'deserunt',
        'nulla',
        'cupidatat'
      ]
    },
    {
      'id': '2',
      'list': [
        'ipsum',
        'nostrud',
        'aliqua',
        'sunt'
      ]
    },
    {
      'id': '3',
      'list': [
        'et',
        'qui',
        'consectetur',
        'reprehenderit',
        'sunt',
        'Lorem',
        'laborum'
      ]
    },
    {
      'id': '4',
      'list': [
        'nulla',
        'velit',
        'do'
      ]
    },
    {
      'id': '5',
      'list': [
        'exercitation',
        'magna',
        'deserunt',
        'fugiat',
        'eu',
        'irure',
        'dolore'
      ]
    },
    {
      'id': '6',
      'list': [
        'sint',
        'minim',
        'nisi',
        'labore',
        'consequat',
        'duis',
        'elit'
      ]
    },
    {
      'id': '7',
      'list': [
        'in',
        'nostrud',
        'deserunt'
      ]
    },
    {
      'id': '8',
      'list': [
        'in',
        'nostrud'
      ]
    }
  ];
