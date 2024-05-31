import { Injectable } from '@angular/core';
import { Users } from '../Interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class UserServService {
  users: Users[] = [
    {
      "id": 1,
      "firstName": "Terry",
      "lastName": "Medhurst",
      "email": "atuny0@sohu.com",
      "image": "https://robohash.org/hicveldicta.png",
      "title": "Help Desk Operator"
    },
    {
      "id": 2,
      "firstName": "Sheldon",
      "lastName": "Quigley",
      "email": "hbingley1@plala.or.jp",
      "image": "https://robohash.org/doloremquesintcorrupti.png",
      "title": "Senior Cost Accountant"
    },
    {
      "id": 3,
      "firstName": "Terrill",
      "lastName": "Hills",
      "email": "rshawe2@51.la",
      "image": "https://robohash.org/consequunturautconsequatur.png",
      "title": "Mechanical Systems Engineer"
    },
    {
      "id": 4,
      "firstName": "Miles",
      "lastName": "Cummerata",
      "email": "yraigatt3@nature.com",
      "image": "https://robohash.org/facilisdignissimosdolore.png",
      "title": "Paralegal"
    },
    {
      "id": 5,
      "firstName": "Mavis",
      "lastName": "Schultz",
      "email": "kmeus4@upenn.edu",
      "image": "https://robohash.org/adverovelit.png",
      "title": "Web Developer I"
    },
    {
      "id": 6,
      "firstName": "Alison",
      "lastName": "Reichert",
      "email": "jtreleven5@nhs.uk",
      "image": "https://robohash.org/laboriosamfacilisrem.png",
      "title": "Civil Engineer"
    },
    {
      "id": 7,
      "firstName": "Oleta",
      "lastName": "Abbott",
      "email": "dpettegre6@columbia.edu",
      "image": "https://robohash.org/cupiditatererumquos.png",
      "title": "Sales Associate"
    },
    {
      "id": 8,
      "firstName": "Ewell",
      "lastName": "Mueller",
      "email": "ggude7@chron.com",
      "image": "https://robohash.org/quiaharumsapiente.png",
      "title": "Clinical Specialist"
    },
    {
      "id": 9,
      "firstName": "Demetrius",
      "lastName": "Corkery",
      "email": "nloiterton8@aol.com",
      "image": "https://robohash.org/excepturiiuremolestiae.png",
      "title": "Community Outreach Specialist"
    },
    {
      "id": 10,
      "firstName": "Eleanora",
      "lastName": "Price",
      "email": "umcgourty9@jalbum.net",
      "image": "https://robohash.org/aliquamcumqueiure.png",
      "title": "Senior Sales Associate"
    },
    {
      "id": 11,
      "firstName": "Marcel",
      "lastName": "Jones",
      "email": "acharlota@liveinternet.ru",
      "image": "https://robohash.org/impeditautest.png",
      "title": "Account Executive"
    },
    {
      "id": 12,
      "firstName": "Assunta",
      "lastName": "Rath",
      "email": "rhallawellb@dropbox.com",
      "image": "https://robohash.org/namquaerataut.png",
      "title": "Developer II"
    },
    {
      "id": 13,
      "firstName": "Trace",
      "lastName": "Douglas",
      "email": "lgribbinc@posterous.com",
      "image": "https://robohash.org/voluptatemsintnulla.png",
      "title": "Sales Associate"
    },
    {
      "id": 14,
      "firstName": "Enoch",
      "lastName": "Lynch",
      "email": "mturleyd@tumblr.com",
      "image": "https://robohash.org/quisequienim.png",
      "title": "Professor"
    },
    {
      "id": 15,
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "email": "kminchelle@qq.com",
      "image": "https://robohash.org/autquiaut.png",
      "title": "Software Test Engineer IV"
    },
    {
      "id": 16,
      "firstName": "Trycia",
      "lastName": "Fadel",
      "email": "dpierrof@vimeo.com",
      "image": "https://robohash.org/porronumquamid.png",
      "title": "Geological Engineer"
    },
    {
      "id": 17,
      "firstName": "Bradford",
      "lastName": "Prohaska",
      "email": "vcholdcroftg@ucoz.com",
      "image": "https://robohash.org/accusantiumvoluptateseos.png",
      "title": "Operator"
    },
    {
      "id": 18,
      "firstName": "Arely",
      "lastName": "Skiles",
      "email": "sberminghamh@chron.com",
      "image": "https://robohash.org/nihilharumqui.png",
      "title": "VP Accounting"
    },
    {
      "id": 19,
      "firstName": "Gust",
      "lastName": "Purdy",
      "email": "bleveragei@so-net.ne.jp",
      "image": "https://robohash.org/delenitipraesentiumvoluptatum.png",
      "title": "Financial Analyst"
    },
    {
      "id": 20,
      "firstName": "Lenna",
      "lastName": "Renner",
      "email": "aeatockj@psu.edu",
      "image": "https://robohash.org/ipsumutofficiis.png",
      "title": "Geologist III"
    },
    {
      "id": 21,
      "firstName": "Doyle",
      "lastName": "Ernser",
      "email": "ckensleyk@pen.io",
      "image": "https://robohash.org/providenttemporadelectus.png",
      "title": "Programmer Analyst I"
    },
    {
      "id": 22,
      "firstName": "Tressa",
      "lastName": "Weber",
      "email": "froachel@howstuffworks.com",
      "image": "https://robohash.org/temporarecusandaeest.png",
      "title": "VP Quality Control"
    },
    {
      "id": 23,
      "firstName": "Felicity",
      "lastName": "O'Reilly",
      "email": "beykelhofm@wikispaces.com",
      "image": "https://robohash.org/odioquivero.png",
      "title": "Assistant Manager"
    },
    {
      "id": 24,
      "firstName": "Jocelyn",
      "lastName": "Schuster",
      "email": "brickeardn@fema.gov",
      "image": "https://robohash.org/odiomolestiaealias.png",
      "title": "Research Nurse"
    },
    {
      "id": 25,
      "firstName": "Edwina",
      "lastName": "Ernser",
      "email": "dfundello@amazon.co.jp",
      "image": "https://robohash.org/doloremautdolores.png",
      "title": "Cost Accountant"
    },
    {
      "id": 26,
      "firstName": "Griffin",
      "lastName": "Braun",
      "email": "lgronaverp@cornell.edu",
      "image": "https://robohash.org/laboriosammollitiaut.png",
      "title": "Senior Cost Accountant"
    },
    {
      "id": 27,
      "firstName": "Piper",
      "lastName": "Schowalter",
      "email": "fokillq@amazon.co.jp",
      "image": "https://robohash.org/nequeodiosapiente.png",
      "title": "Sales Representative"
    },
    {
      "id": 28,
      "firstName": "Kody",
      "lastName": "Terry",
      "email": "xisherwoodr@ask.com",
      "image": "https://robohash.org/consequunturabnon.png",
      "title": "Recruiting Manager"
    },
    {
      "id": 29,
      "firstName": "Macy",
      "lastName": "Greenfelder",
      "email": "jissetts@hostgator.com",
      "image": "https://robohash.org/amettemporeea.png",
      "title": "Structural Analysis Engineer"
    },
    {
      "id": 30,
      "firstName": "Maurine",
      "lastName": "Stracke",
      "email": "kdulyt@umich.edu",
      "image": "https://robohash.org/perferendisideveniet.png",
      "title": "Quality Engineer"
    },
    {
      "id": 31,
      "firstName": "Luciano",
      "lastName": "Sauer",
      "email": "smargiottau@altervista.org",
      "image": "https://robohash.org/rerumfugiatamet.png",
      "title": "Research Associate"
    },
    {
      "id": 32,
      "firstName": "Kaya",
      "lastName": "Emard",
      "email": "lskeelv@webeden.co.uk",
      "image": "https://robohash.org/etquiquibusdam.png",
      "title": "Help Desk Technician"
    },
    {
      "id": 33,
      "firstName": "Lee",
      "lastName": "Schmidt",
      "email": "gsilcockw@infoseek.co.jp",
      "image": "https://robohash.org/providentdoloremarchitecto.png",
      "title": "Associate Professor"
    },
    {
      "id": 34,
      "firstName": "Darien",
      "lastName": "Witting",
      "email": "aaughtonx@businessweek.com",
      "image": "https://robohash.org/utnonnobis.png",
      "title": "Structural Analysis Engineer"
    },
    {
      "id": 35,
      "firstName": "Jacklyn",
      "lastName": "Schimmel",
      "email": "mbrooksbanky@gnu.org",
      "image": "https://robohash.org/nequeexercitationemanimi.png",
      "title": "Sales Representative"
    },
    {
      "id": 36,
      "firstName": "Angelica",
      "lastName": "Baumbach",
      "email": "dalmondz@joomla.org",
      "image": "https://robohash.org/vitaenonqui.png",
      "title": "Physical Therapy Assistant"
    },
    {
      "id": 37,
      "firstName": "Delfina",
      "lastName": "Ziemann",
      "email": "nwytchard10@blogspot.com",
      "image": "https://robohash.org/officiisprovidentlaborum.png",
      "title": "Marketing Assistant"
    },
    {
      "id": 38,
      "firstName": "Thaddeus",
      "lastName": "McCullough",
      "email": "igannan11@microsoft.com",
      "image": "https://robohash.org/veritatisperspiciatisqui.png",
      "title": "Sales Representative"
    },
    {
      "id": 39,
      "firstName": "Salvatore",
      "lastName": "Fisher",
      "email": "lgherardi12@washington.edu",
      "image": "https://robohash.org/quosautquia.png",
      "title": "Director of Sales"
    },
    {
      "id": 40,
      "firstName": "Jasmin",
      "lastName": "Hermiston",
      "email": "lgutridge13@sun.com",
      "image": "https://robohash.org/voluptatesolutaconsequuntur.png",
      "title": "Payment Adjustment Coordinator"
    },
    {
      "id": 41,
      "firstName": "Nicklaus",
      "lastName": "Cruickshank",
      "email": "cslateford14@blogspot.com",
      "image": "https://robohash.org/quiaconsecteturaut.png",
      "title": "Compensation Analyst"
    },
    {
      "id": 42,
      "firstName": "Tiara",
      "lastName": "Rolfson",
      "email": "mhaslegrave15@springer.com",
      "image": "https://robohash.org/perferendisestanimi.png",
      "title": "Chief Design Engineer"
    },
    {
      "id": 43,
      "firstName": "Garret",
      "lastName": "Klocko",
      "email": "kbrecknock16@marriott.com",
      "image": "https://robohash.org/amaioresqui.png",
      "title": "Sales Representative"
    },
    {
      "id": 44,
      "firstName": "Reginald",
      "lastName": "Wisoky",
      "email": "rlaxe17@tamu.edu",
      "image": "https://robohash.org/vitaeharumquia.png",
      "title": "Assistant Professor"
    },
    {
      "id": 45,
      "firstName": "Humberto",
      "lastName": "Botsford",
      "email": "pidill18@china.com.cn",
      "image": "https://robohash.org/liberoquaeratquidem.png",
      "title": "Accountant III"
    },
    {
      "id": 46,
      "firstName": "Justus",
      "lastName": "Sipes",
      "email": "rmcritchie19@topsy.com",
      "image": "https://robohash.org/veritatismodiest.png",
      "title": "Media Manager IV"
    },
    {
      "id": 47,
      "firstName": "Coralie",
      "lastName": "Boyle",
      "email": "rlangston1a@51.la",
      "image": "https://robohash.org/quivoluptatepraesentium.png",
      "title": "Professor"
    },
    {
      "id": 48,
      "firstName": "Felicita",
      "lastName": "Gibson",
      "email": "jevanson1b@admin.ch",
      "image": "https://robohash.org/numquamcumquereiciendis.png",
      "title": "Professor"
    },
    {
      "id": 49,
      "firstName": "Pearl",
      "lastName": "Blick",
      "email": "ssarjant1c@statcounter.com",
      "image": "https://robohash.org/etnemoet.png",
      "title": "Account Representative I"
    },
    {
      "id": 50,
      "firstName": "Johnathon",
      "lastName": "Predovic",
      "email": "xlinster1d@bravesites.com",
      "image": "https://robohash.org/nisietqui.png",
      "title": "Assistant Professor"
    },
    {
      "id": 51,
      "firstName": "Jerry",
      "lastName": "Kertzmann",
      "email": "tmullender1e@scientificamerican.com",
      "image": "https://robohash.org/aliquideosquidem.png",
      "title": "Executive Secretary"
    },
    {
      "id": 52,
      "firstName": "Elbert",
      "lastName": "Gottlieb",
      "email": "gmein1f@nasa.gov",
      "image": "https://robohash.org/omnisipsasit.png",
      "title": "Project Manager"
    },
    {
      "id": 53,
      "firstName": "Sincere",
      "lastName": "Mueller",
      "email": "gmaccumeskey1g@buzzfeed.com",
      "image": "https://robohash.org/minimaquamcorrupti.png",
      "title": "Graphic Designer"
    },
    {
      "id": 54,
      "firstName": "Telly",
      "lastName": "Spinka",
      "email": "bpetts1h@smugmug.com",
      "image": "https://robohash.org/quianonquia.png",
      "title": "Compensation Analyst"
    },
    {
      "id": 55,
      "firstName": "Hal",
      "lastName": "Keebler",
      "email": "ajozef1i@usatoday.com",
      "image": "https://robohash.org/animiautillo.png",
      "title": "Librarian"
    },
    {
      "id": 56,
      "firstName": "Megane",
      "lastName": "Armstrong",
      "email": "oyakushkev1j@oracle.com",
      "image": "https://robohash.org/voluptatemexplicaboasperiores.png",
      "title": "Physical Therapy Assistant"
    },
    {
      "id": 57,
      "firstName": "Toy",
      "lastName": "Olson",
      "email": "bpickering1k@clickbank.net",
      "image": "https://robohash.org/eumestdolor.png",
      "title": "Recruiting Manager",
    },
  ];

  constructor() { }
}

