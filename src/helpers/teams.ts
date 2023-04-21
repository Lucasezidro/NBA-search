interface ITeam {
  name: string
  championship: number
  champion_year?: string[]
  conference_championship: number
  fundation_year: number
  history_best_player: string
  today_best_player: string
  logo: string
  classic_player_photo: string
  today_player_photo: string
}

export const TEAMS: ITeam[] = [
  {
    name: 'Atlanta Hawks',
    logo: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/03/1280px-atlanta_hawks_logo-svg_-300x300.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['1958'],
    conference_championship: 1,
    fundation_year: 1946,
    history_best_player: 'Dominique Wilkins',
    today_best_player: 'Trae Young'
  },
  {
    name: 'Boston Celtics',
    logo: 'https://i.pinimg.com/236x/2c/04/00/2c0400dfdf9d8d3b223a2ab901522cb9.jpg',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 17,
    champion_year: ['1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008'],
    conference_championship: 22,
    fundation_year: 1946,
    history_best_player: 'Larry Bird',
    today_best_player: 'Jason Tatum'
  },
  {
    name: 'Brooklyn Nets',
    logo: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/03/1024px-brooklyn_nets_newlogo-svg_-300x397.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 5,
    fundation_year: 1967,
    history_best_player: 'Julius Erving',
    today_best_player: 'Mikal Bridges'
  },
  {
    name: 'Charlotte Hornets',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/Charlotte_Hornets.png/200px-Charlotte_Hornets.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 0,
    fundation_year: 1988,
    history_best_player: 'Kemba Walker',
    today_best_player: 'Lamelo Ball'
  },
  {
    name: 'Chicago Bulls',
    logo: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/03/1280px-chicago_bulls_logo-svg-1-300x303.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 6,
    champion_year: ['1991', '1992', '1993', '1996', '1997', '1998'],
    conference_championship: 6,
    fundation_year: 1966,
    history_best_player: 'Michael Jordan',
    today_best_player: 'Demar Derozan'
  },
  {
    name: 'Cleveland Cavaliers',
    logo: 'https://i.pinimg.com/474x/d6/54/d1/d654d1beb2cf07c2edc19ffe0d9ee5ef.jpg',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['2016'],
    conference_championship: 5,
    fundation_year: 1970,
    history_best_player: 'Lebron James',
    today_best_player: 'Donovan Mitchell'
  },
  {
    name: 'Dallas Mavericks',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/6/69/Dallas_Mavericks_logo.jpg',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['2011'],
    conference_championship: 2,
    fundation_year: 1980,
    history_best_player: 'Dirk Nowitzki',
    today_best_player: 'Luka Doncic'
  },
  {
    name: 'Denver Nuggets',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Denver_Nuggets_logo.jpg/200px-Denver_Nuggets_logo.jpg',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 0,
    fundation_year: 1967,
    history_best_player: 'Nikola Jokic',
    today_best_player: 'Nikola Jokic'
  },
  {
    name: 'Detroit Pistons',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Detroit_Pistons_primary_logo_2017.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 3,
    champion_year: ['1989', '1990', '2004'],
    conference_championship: 5,
    fundation_year: 1937,
    history_best_player: 'Isiah Thomas',
    today_best_player: 'Cade Cunningham'
  },
  {
    name: 'Golden State Warriors',
    logo: 'https://i.pinimg.com/originals/3a/06/5b/3a065bfd8b17e1a772fda10ebd88bb4f.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 7,
    champion_year: ['1947', '1956', '1975', '2015', '2017', '2018', '2022'],
    conference_championship: 8,
    fundation_year: 1946,
    history_best_player: 'Stephen Curry',
    today_best_player: 'Stephen Curry'
  },
  {
    name: 'Houston Rockets',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdVXOu4SadSu7HrNtWuR_svMIwsCdFiLYu7MDB_1hPMPy3VnTwoaCMBhvFaZnhU1VEJs&usqp=CAU',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 2,
    champion_year: ['1994', '1995'],
    conference_championship: 4,
    fundation_year: 1967,
    history_best_player: 'Haken Olajuwon',
    today_best_player: 'Jalen Green'
  },
  {
    name: 'Indiana Pacers',
    logo: 'https://thumbs.dreamstime.com/z/ilustra%C3%A7%C3%A3o-editorial-do-logotipo-indiana-pacers-em-fundo-branco-%C3%ADcones-dos-logotipos-%C3%ADcone-vetoriais-definidos-m%C3%ADdias-sociais-209798252.jpg',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 1,
    fundation_year: 1967,
    history_best_player: 'Regie Miller',
    today_best_player: 'Tyresse Haliburton'
  },
  {
    name: 'Los Angeles Clippers',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 0,
    fundation_year: 1970,
    history_best_player: 'Blake Griffin',
    today_best_player: 'Kawhi Leonard'
  },
  {
    name: 'Los Angeles Lakers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/200px-Los_Angeles_Lakers_logo.svg.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 17,
    champion_year: ['1949', '1950', '1952', '1953', '1954', '1972', '1980', '1982', '1985', '1987', '1988', '1999', '2000', '2001', '2002', '2002', '2010', '2020'],
    conference_championship: 32,
    fundation_year: 1947,
    history_best_player: 'Magic Johnson',
    today_best_player: 'Lebron James'
  },
  {
    name: 'Memphis Grizzlies',
    logo: 'https://logodetimes.com/wp-content/uploads/memphis-grizzlies.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 0,
    fundation_year: 1995,
    history_best_player: 'Paul Gasol',
    today_best_player: 'Ja Morant'
  },
  {
    name: 'Miami Heat',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/8/85/Miami_Heat.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 3,
    champion_year: ['2006', '2012', '2013'],
    conference_championship: 6,
    fundation_year: 1988,
    history_best_player: 'Lebron James',
    today_best_player: 'Jimmy Butler'
  },
  {
    name: 'Milwaukee Bucks',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Milwaukee_Bucks_logo15.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 2,
    champion_year: ['1971', '2021'],
    conference_championship: 3,
    fundation_year: 1968,
    history_best_player: 'Kareen-abdul Jabbar',
    today_best_player: 'Giannis Antetokounmpo'
  },
  {
    name: 'Minnesota Timberwolves',
    logo: 'https://logodetimes.com/wp-content/uploads/minnesota-timberwolves.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 0,
    fundation_year: 1989,
    history_best_player: 'Kevin Garnnet',
    today_best_player: 'Anthony Edwards'
  },
  {
    name: 'New Orleans Pelicans',
    logo: 'https://logodetimes.com/times/new-orleans-pelicans/logo-new-orleans-pelicans-2048.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 0,
    fundation_year: 1988,
    history_best_player: 'Anthony Davis',
    today_best_player: 'Zion Willianson'
  },
  {
    name: 'New York Knicks',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/d/d8/NewYorkKnicks.PNG',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 2,
    champion_year: ['1970', '1973'],
    conference_championship: 8,
    fundation_year: 1946,
    history_best_player: 'Patrick Ewing',
    today_best_player: 'Jalen Brunson'
  },
  {
    name: 'Oklahoma City Thunder',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['1979'],
    conference_championship: 4,
    fundation_year: 1967,
    history_best_player: 'Kevin Durant',
    today_best_player: 'Shai Gilgeous-Alexander'
  },
  {
    name: 'Orlando Magic',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/2/24/Orlando_Magic.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 6,
    fundation_year: 1989,
    history_best_player: 'Shaq O Neil',
    today_best_player: 'Paolo Banchero'
  },
  {
    name: 'Philadelphia 76ers',
    logo: 'https://static.wikia.nocookie.net/basketball/images/e/e3/Philadelphia_76ers.png/revision/latest?cb=20170208005828&path-prefix=pt',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 3,
    champion_year: ['1955', '1967', '1983'],
    conference_championship: 5,
    fundation_year: 1946,
    history_best_player: 'Julius Erving',
    today_best_player: 'Joel Embiid'
  },
  {
    name: 'Phoenix Suns',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Phoenix_Suns.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 3,
    fundation_year: 1968,
    history_best_player: 'Steve Nash',
    today_best_player: 'Kevin Durant'
  },
  {
    name: 'Portland Trail Blazers',
    logo: 'https://logodetimes.com/wp-content/uploads/portland-trail-blazers.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['1977'],
    conference_championship: 3,
    fundation_year: 1970,
    history_best_player: 'Bill Walton',
    today_best_player: 'Damian Lillard'
  },
  {
    name: 'Sacramento Kings',
    logo: 'https://logodetimes.com/wp-content/uploads/sacramento-kings.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['1951'],
    conference_championship: 1,
    fundation_year: 1923,
    history_best_player: 'Oscar Robertson',
    today_best_player: 'D Aroon Fox'
  },
  {
    name: 'San Antonio Spurs',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_v8O5A-CztlOOykRa7bBcKLEdv2Yisf68yYyP5aokI3UjUb-Q1jQI6WRbiigl0gWJ72s&usqp=CAU',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 5,
    champion_year: ['1999', '2003', '2005', '2007', '2014'],
    conference_championship: 6,
    fundation_year: 1967,
    history_best_player: 'Tim Duncan',
    today_best_player: 'Keldon Johnson'
  },
  {
    name: 'Toronto Raptors',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/a/a2/Toronto_Raptors_logo.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['2019'],
    conference_championship: 1,
    fundation_year: 1995,
    history_best_player: 'Vince Carter',
    today_best_player: 'Paskal Siakam'
  },
  {
    name: 'Utah Jazz',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/1/1a/Utah_Jazz_logo_%282016%29.svg.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 0,
    champion_year: [],
    conference_championship: 2,
    fundation_year: 1974,
    history_best_player: 'John Stockton',
    today_best_player: 'Lauri Markkanen'
  },
  {
    name: 'Washington Wizards',
    logo: 'https://upload.wikimedia.org/wikipedia/pt/5/5b/Washington_Wizards.png',
    classic_player_photo: '',
    today_player_photo: '',
    championship: 1,
    champion_year: ['1978'],
    conference_championship: 4,
    fundation_year: 1961,
    history_best_player: 'Elvin Hayes',
    today_best_player: 'Bradley Beal'
  },
]