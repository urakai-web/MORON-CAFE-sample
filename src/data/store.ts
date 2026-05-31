export const storeData = {
  name: 'MORON CAFE',
  nameEn: 'MORON CAFE',
  catchcopy: '長町にある落ち着いた空間',
  description:
    'コーヒーや焼き菓子はもちろん、カレーなどの食事も楽しめるので、カフェ利用だけでなくランチにも',
  address: '〒000-0000 住所を入力してください',
  addressMapQuery: '金沢市',
  phone: '000-000-0000',
  businessHours: [
    { day: 'ランチ', time: '11:30 〜 14:00', lastOrder: '13:30' },
    { day: 'ディナー', time: '17:00 〜 23:00', lastOrder: '22:30' },
  ],
  closedDays: '毎週月曜日',
  smoking: {
    allowed: false,
    note: '全席禁煙（店外に喫煙スペースあり）',
  },
  parking: {
    available: true,
    spaces: 10,
    note: '駐車場の説明文をここに入力。',
  },
  reservation: {
    phone: '000-000-0000',
    note: 'ご予約に関するご案内をここに入力。\n2行目の案内文。\n※補足事項があればここに。',
    onlineUrl: '',
    hours: '10:00 〜 22:30（定休日除く）',
  },
  payment: [
    { name: 'au PAY', icon: '📱' },
    { name: 'd払い', icon: '📱' },
    { name: 'PayPay', icon: '📱' },
    { name: 'クレジットカード', icon: '💳' },
    { name: '交通系ICカード', icon: '🎫' },
  ],
  sns: {
    instagram: '',
    twitter: '',
    facebook: '',
    line: '',
  },
  news: [
    {
      date: '2026.01.01',
      tag: 'お知らせ',
      title: 'お知らせのタイトルをここに入力',
    },
    {
      date: '2026.01.01',
      tag: 'メニュー',
      title: 'メニューに関するお知らせのタイトル',
    },
    {
      date: '2026.01.01',
      tag: 'お知らせ',
      title: '3件目のお知らせタイトル',
    },
    {
      date: '2026.01.01',
      tag: 'メディア',
      title: 'メディア掲載のお知らせタイトル',
    },
  ],
  menu: [
    {
      name: 'メニュー名1',
      description: 'メニューの説明文をここに入力してください。',
      category: 'コーヒー',
      image: '/images/menu/menu1.jpg',
    },
    {
      name: 'メニュー名2',
      description: 'メニューの説明文をここに入力してください。',
      category: 'コーヒー',
      image: '/images/menu/menu2.jpg',
    },
    {
      name: 'メニュー名3',
      description: 'メニューの説明文をここに入力してください。',
      category: 'スイーツ',
      image: '/images/menu/menu3.jpg',
    },
    {
      name: 'メニュー名4',
      description: 'メニューの説明文をここに入力してください。',
      category: 'スイーツ',
      image: '/images/menu/menu4.jpg',
    },
    {
      name: 'メニュー名5',
      description: 'メニューの説明文をここに入力してください。',
      category: 'フード',
      image: '/images/menu/menu5.jpg',
    },
    {
      name: 'メニュー名6',
      description: 'メニューの説明文をここに入力してください。',
      category: 'ドリンク',
      image: '/images/menu/menu6.jpg',
    },
  ],
  gallery: [
    { label: '店内の雰囲気', image: '/images/gallery/interior.jpg' },
    { label: '店舗外観', image: '/images/gallery/exterior.jpg' },
  ],
}
