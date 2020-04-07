//Strings
let myName = '10';
//error
// myName = 20 

//number
let num: null;
// num = "df";
let hobby = false;
// hobby = 1;

let myRealAge: any;
myRealAge = 25;
// myRealAge = 'oeoe';

enum Color {
    Blue,
    Green,
    Yellow
}

let myColor: Color = Color.Yellow;
console.log(myColor);

// functions

function thyUs(num: number): void {
    console.log(num*2);
}

thyUs;

//arrow function

const FavSite = (site: string) => console.log(site);
FavSite("unknown");

//single param function with no brackets

const FavSports = sports => console.log(sports);
FavSports("rockscissorspaper");

//array and object destruction
//array
let songs: string[] = ["levitating", "pina Coladas", "Roses"]
let [duaLipa, Goodman, steve] = songs;
console.log(`
${duaLipa}
${Goodman}
${steve}
`);

//object

let album = {duaLipa: "Future Nostalgia",tracks: 11, Favourite: "Levitating"};

let {duaLipa: artist1, tracks: total, Favourite: FavSong} = album;
console.log(`
${artist1}
${total}
${FavSong}
`);

//spread operator

let scores: number[] = [11, 12, 22, 69];
console.log(Math.min(...scores))

//rest operator

function names( ...args) { //rest operator
    console.log(...args); // spread operator
}

names("Angela Yuh")

//template literal 
let ip: string = "139.202.29.2";
console.log(`
My website's Ip is 

${ip}
`)