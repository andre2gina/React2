import React, { Component } from "react";
import Afis1 from "./afis1";
import Afis2 from "./afis2";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      afisez: 0,
      retete: [
        {
          id: 1,
          denumire: "BRIOCHE",

          imagine: "brioche.jpg",
          ingrediente: [
            "Pentru 50 portii",
            "500 g de făină",
            "140 g de apă",
            "140 g de lapte",
            "60 g de zahăr",
            "40 g unt nesărat topit",
            "două pliculețe a câte 7 g de drojdie instant",
            "9 g de sare"
          ],
          preparare: `Am amestecat ingredientele de mai sus și am frământat ușor, până când am obținut un aluat pe care l-am modelat în formă de disc, l-am acoperit cu folie alimentară și l-am trecut la frigider peste noapte.
            am scos untul direct din frigider și l-am tăiat feliuțe, așezându-le apoi într-un pătrat de 15 x 15 cm, desenat pe o hârtie de copt. Pentru măsurare m-am folosit de ruletă. Am acoperit untul cu o altă hârtie de copt și am început să îl aplatizez cu sucitorul, până când s-a încadrat în dimensiunea de 20 x 20 cm. Atunci trecut și untul la frigider timp de o oră.
           După o oră, am scos aluatul și l-am întins într-un pătrat de 32 x 32 cm. In interiorul lui am așezat pătratul de unt scos direct din frigider, dar nu paralel, ci astfel încât colțurile pătratului de unt să atingă laturile pătratului de aluat, formând astfel o stea. Am împachetat apoi untul ca pe un plic, folosindu-mă de colțurile aluatului. De aici, măsurătorile exacte încep, însoțite de serioase antrenamente musculare.
           Prima dată, se întinde aluatul după dimensiunea 20 x 60 cm. Se împăturește în 3, ca pe o foaie de hârtie, se acoperă cu folie alimentară și se trece la frigider timp de o jumătate de oră. Această operațiune se repetă de 3 ori, având grijă ca de fiecare dată când aluatul este scos de la frigider, să fie rotit la 90 de grade (imaginați-vă un unghi drept). După al treilea tur, aluatul se învelește în folie de plastic și se lasă la frigider peste noapte.
          Aluatul se scoate de la frigider, se rotește din nou la 90 de grade și se întinde până ajunge la dimensiunile de 20 x 110 cm. Pentru lungime, se păstrează doar 1m de aluat și se îndepărtează capetele, astfel încât dreptunghiul să fie perfect. Pe latura de sus, se fac marcaje cu ajutorul unui cuțit la 12,5 cm (vor fi 7 semne în total). Pe latura de jos, se face primul marcaj la 6,25 cm, apoi se continuă tot cu intervalul de 12,5 cm. În total, pe latura de jos vor fi 8 semne. Cu ajutorul unui cuțit, se unesc semnele de sus cu cele de jos și se taie triunghiuri, care se rulează plecând de la baza cea mare până la vârf. Eu am obținut 16 croissante, iar din restul de la capetele îndepărtate ale aluatului, am încropit și o mică pain au chocolat. Croissantele se ung cu amestec de lapte și ou bătut, apoi se lasă la dospit vreme de două ore, întinse într-o tavă tapetată cu hârtie de copt. Eu le-am copt în cuptorul încins la 200 de grade în primele 5-6 minute, apoi alte 10 minute la 160 de grade, însă pentru alte cuptoare s-ar putea să fie nevoie de alte intervale și temperaturi.`
        },
        {
          id: 2,
          denumire: "CANNELLONI",
          imagine: "cannelloni.jpg",
          ingrediente: [
            "Pentru umplutura:",
            "Pentru 6 portii",
            "600 gr carne tocata de vita",
            "100 g morcovi",
            "30 g ceapa",
            "180 gr ciuperci",
            "50 gr parmezan",
            "120 goua",
            "1 g sare",
            "1 g piper",
            "10 ml ulei de masline",
            "60 ml vin rosu",
            "Pentru sos de rosii:",

            "10 mlulei de masline",
            "5 g de usturoi",
            "200 ml suc de rosii",
            "1 g sare",
            "1 g piper",
            "Pentru sos Bechamel:",

            "250 ml lapte",
            "25 gr unt",
            "25 gr faina",
            "1 g nucsoara",
            "1 g sare",
            "In plus :",

            "18 buc cannelloni",
            "50 gr parmezan"
          ],
          preparare: `Preparam umplutura:


          1. Ceapa o curatam de coaja, o spalam si o tocam marunt. Morcovii ii curatam, ii spalam si ii taiem cuburi mici.
          
          
          2. Punem o tigaie la foc potrivit.Cand s-a incins,punem uleiul de masline si adaugam morcovii impreuna cu ceapa.Lasam la calit.
          
          
          3. Amestecam carnea de vita cu carnea de carnati si o punem in tigaia cu legume amestecand bine.Punem sarea si lasam pana carnea si-a schimbat culoarea .
          
          
          4. Adaugam apoi vinul , amestecam si lasam in jur de 10 minute.
          
          
          5. Inchidem focul si cand carnea s-a racit , adaugam ouale si ciupercile ( scurse de uleiul din conserva) .Amestecam si potrivim totul de sare si piper.
          
          
          Preparam sosul de rosii:
          
          
          1. Punem o tigaie la foc potrivit.Cand aceasta s-a incins punem uleiul si catelul de usturoi si lasam pana acesta si-a schimbat culoarea dupa care il scoatem si il aruncam.
          
          
          2. Adaugam sucul de rosii ,sare si pier si lasam la foc mic pana ce sosul capata consistenta dorita.
          
          
          Preparam sosul Bechamel:
          
          
          1. Punem un vas la foc mic.Punem untul si lasam pana acesta s-a topit.
          
          
          2. Adaugam faina toata si amestecam continuu pana ce amestecul capata o culoare usor aurie.
          
          
          3. Turnam laptele putin cate putin amestecand in continuu de fiecare data.
          
          
          4. Punem sarea si nucsoara,amestecam si lasam la foc foarte mic pana consistenta este una densa .
          
          
          5. Acoperim cu folie de plastic.
          
          
          Asezam cannelloni in tava :
          
          
          1. Luam o tava pentru cuptor si asezam un strat de sos Bechamel si unul de sos de rosii.
          
          
          2. Umplem cannelloni cu umplutura de carne si ciuperci si ii asezam in tava unul langa celalalt .
          
          
          3. Peste canelloni turnam pe intreaga suprafata sosul Bechamel,apoi sosul de rosii si presaram parmezan .
          
          
          4. Dam tava la cuptorul incins la 190 grade pentru 30 minute.
          
          
          5. Cand cannelloni sunt gata,lasam 10 minute apoi ii servim calzi .`
        },
        {
          id: 3,
          denumire: "CROSTATA",

          imagine: "crostata.jpg",
          ingrediente: [
            "300 gr.faina",
            "125 gr.unt ",
            "140 g ou",
            "120 gr.zahar",
            "1 g sare",
            "1 lingurita praf copt",
            "400 g de gem dupa preferinte"
          ],
          preparare: `Se amesteca toate ingredientele repede,repede, se acopera cu folie de nailon si se lasa la frigider aprox.1h.
          Intre timp se incalzeste bine cuptorul si se unge bine tava doar cu unt.(fara faina).
          De obicei se foloseste o tava pt.tarta dar se poate pune si in alte forme dar nu cea pt.chec.
          Dupa ce ati scos aluatul de la frigider se intinde cu sucitorul cat sa devina un pic mai moale apoi se aseaza in tava si se intinde cu mainile,lasand un bord mai ridicat astfel incat sa nu curga gemul.
          dupa ce aluatul a fost bine intins in tava.(mai bine sa fie in pic mai gros),se pune gemul dar nu foarte mult pt.ca aluatul se va inmuia apoi din aluatul ramas se fac niste fasii si se pun peste tarta cu gem dintr-un capat in altul pe diagonala astfel incat sa obtinem niste romburi,si se pune la cuptor pt.aprox.15-20min la 180°.
          Va doresc pofta buna!`
        },
        {
          id: 4,
          denumire: "Lasagna al ragu",

          imagine: "lasagna.jpg",
          ingrediente: [
            "500 g foi lasagna",
            "1000 g sos Ragu",
            "250 g mozzarella",
            "100 g unt",
            "80 g faina",
            "1 l lapte",
            "200 g parmezan",
            "1 g sare",
            "1 g piper",
            "1 g nucsoara"
          ],
          preparare: `1. Prepara sosul Ragu, esential pentru reteta de Lasagna originala.
          2. Separat, topeste untul pentru sosul Bechamel. Cand untul s-a topit, adauga faina si amesteca energic, apoi toarna laptele cat mai rece.
          3. Lasa sosul Bechamel la foc mediu pana cand se ingroasa, adauga 100 g parmezan si apoi potriveste-l de sare, piper si nucsoara.
          4. Intr-o tava de cuptor termorezistenta, toarna 1 polonic de sos Ragu si intinde-l, asaza foile de lasagna iar deasupra toarna 2-3 polonice sos Ragu, iar peste acesta raspandeste un polonic de sos alb. Peste sosul alb raspandeste felii de mozzarella si putin parmezan ras.
          5. Continua apoi cu foi de lasagna, sos Ragu, sos bechamel, cele doua tipuri de branza, pana cand Lasagna se inalta. In final, intinde un strat de foi lasagna, sos de bechamel si cele doua tipuri de branza.
          6. Acopera tava cu folie si da Lasagna la cuptor la 180 de grade pentru 45-50 de minute, din care ultimele 5-10 minute fara folia de aluminiu.`
        },
        {
          id: 5,
          denumire: "Dorada mediteraneana la cuptor",

          imagine: "pesce.jpg",
          ingrediente: [
            "Pentru 2 portii",
            "2 fileuri dorada, circa 200 g fiecare",
            "50 g de unt",
            "1 g sare",
            "1 g piper negru",
            "10 g de patrunjel",
            "15 g de capere murate",
            "2 catei de usturoi, tocati marunt",
            "30 ml de ulei de masline",
            "15 ml de suc de lamaie",
            "15 ml de vin alb sau roze"
          ],
          preparare: `Modul de preparare al acestei retete de peste este foarte simplu si, mai ales, foarte rapid. In maxim 15 minute fileurile de peste sunt facute. Carnea din fileurile de peste este destul de frageda si sensibila la gatire, daca il „uitam” in cuptor riscam sa obtinem un preparat sec, fara gustul specific dat de starea lui suculenta.
          Se incinge cuptorul la 200 °C. Se spala caperele sub jet de apa rece si se usuca prin tamponare cu prosoape de hartie.
          Se amesteca intr-un castronel caperele cu usturoi, ulei de masline, coaja si suc de lamaie, vin, patrunjel si cimbru.
          
          Se unge un platou cu putin ulei de masline. Se asaza fileurile de peste in platou, se sareaza si se pipereaza.
          
          Se toarna sosul peste fileuri. Pe fiecare fileu se pun cate 2 cubulete de unt si 2 fire de cimbru proaspat.
          
          Se coc fileurile 10-12 minute, in functie de grosimea lor.
          Se servesc ornate cu feliute de lamaie si frunze de patrunjel, alaturi de o garnitura potrivita.`
        },
        {
          id: 6,
          denumire: "RAVIOLI CU RICOTTA SI SPANAC",

          imagine: "ravioli.jpg",
          ingrediente: [
            "Porții  4",
            "300 gr făină + câteva grame pentru întins foaia",

            "180 g oua",

            "1 g sare",

            "10 ml ulei de măsline",

            "Umplutură",

            "250 gr baby spanac",

            "100 gr ricotta",

            "50 gr parmezan",

            "1 g  de nucșoară",

            "Sos",

            "15 ml ulei de măsline",

            "10 g de usturoi",

            "300 g roșii"
          ],
          preparare: `Pentru început, pregătește pastele. Cerne făină într-un bol și peste ea adaugă oul, sarea și uleiul. Amestecă-le bine cu o lingură de lemn, apoi frământă-le bine cu mâna până se omogenizează. Mută aluatul pe masa pe care ai presărat făină și frământă-l câteva minute pe toate părțile.

          Când e gata (nu se lipește de mâini), fă o bilă mare pe care o tai în două. O jumătate o pui deoparte în vas cu fața secționată în jos și acoperi vasul cu folie alimentară.
          
          Cealaltă jumătate o pui pe masa de lucru pe care ai presărat făină. Apasă puțin aluatul cu podul palmei, după care întinde-l bine cu sucitorul. Foaia obținută ar trebui să aibă aproximat 40-50 de centrimetri și 1,15 mm grosime.
          
          În foaia astfel întinsă taie forme cu aparatul special pentru ravioli sau cu un pahar.
          
          Călește spanacul în tigaie. Pune-l apoi într-un bol să se răcească, după care adaugă restul ingredientelor și amestecă bine.
          
          Pune câte o linguriță din umplutură în mijlocul fiecărei forme de ravioli și umezește marginile cu un pic de apă. Pliază ca să obții plicuri pe care le fierbi în apă ca pe orice alt fel de paste.
          
          Ca să pregătești sosul, încinge ulei în tigaie. Adaugă usturoiul și roșiile și încălzește-le. După ce au fiert raviolii pune-le în sos și servește-le.`
        },
        {
          id: 7,
          denumire: "SCALOPINA AI FUNGHI",

          imagine: "scalopina.jpg",
          ingrediente: [
            "500 g piept de pui",
            "250 ml smantana lichida",
            "200 g de ciuperci champinion",
            "50 ml vin alb",
            "1g sare",
            "1 g piper alb",
            "30 ml ulei de masline"
          ],
          preparare: `Pieptul de pui se spala, si se portioneaza(ca pentru snitele sau fasii).Se condimenteaza cu sare si piper.


          Intr-o cratita, punem 2 lg de ulei, si dupa ce acesta s-a incins adaugam bucatile de pui, si le rumenim pe ambele parti.(daca hotarati sa folositi vin, acum este momentul sa il adaugati).Cand sunt gata le scoatem pe un servetel pentru a elimina excesul de ulei.
          
          
          Ciupercile tocate, le calim 2-3 minute in uleiul in care am prajit puiul.Adaugam apoi bucatile de carne, calim impreuna.Tragem tigaia de foc si adaugam smantana.Amestecam bine si punem din nou pe foc, lasam sa dea un clocot impreuna si GATA!`
        },
        {
          id: 8,
          denumire: "SPAGHETTI AL RAGU",

          imagine: "spaghetti.jpg",
          ingrediente: [
            "10 ml ulei de masline",
            "150 g de sunca italieneasca ",
            "60 g ceapa",
            "10 g de usturoi",
            "50 g morcovi",
            "200 g telina",
            "1 kg carne de vita",
            "100 ml de vin rosu",
            "400 g rosii",
            "1 g de sare",
            "1 g de piper",
            "1 kg spahetti",
            "50 g parmesan"
          ],
          preparare: `Incalzeste uleiul intr-o cratita mare si prajeste sunca la foc mediu pana devine aurie. Adauga ceapa si usturoiul si prajeste-le pana se inmoaie.

          Adauga morcovul, frunzele de dafin si lasa in continuare pe foc pana cand legumele incep sa se inmoaie.
          
          Mareste focul si adauga carnea de vita tocata. Prajeste pana se rumeneste.
          
          Toarna apoi vinul si fierbe pana si-a redus din volum cu aproximativ o treime. Reduce temperatura si adauga rosiile si telina.
          
          Fierbe tagliatelele in apa cu sare la foc mic, intr-o oala cu capac, dupa instructiunile de pe ambalaj. Cand sunt gata, imparte-le in farfurii. Presara putin parmezan, iar apoi adauga sosul. La sfarsit, presara din nou parmezan si putin piper negru.   `
        },
        {
          id: 9,
          denumire: "OUA CU BACON",

          imagine: "uova.jpg",
          ingrediente: [
            "240 g oua",
            "200 g bacon",
            "10 g unt",
            "1 g sare",
            "1 g piper",
            "15 ml ulei de masline"
          ],
          preparare: `Taie bacon-ul marunt si frige-l in tigaia incinsa, cu ulei de masine, pentru 2-3 minute.
          Bate ouale, adauga sare si piper. Adauga ouale peste bacon si amesteca constant cu o spatula de lemn, intorcand oul pe toate partile.
          Pofta buna.`
        }
      ]
    };
    this.afiPrep = this.afiPrep.bind(this);
  }
  afiPrep(ev) {
    const idn = ev.target.value;
    this.setState({ afisez: idn });
    //console.log(`ID: ${idn}`);
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center mt-5 mb-5">Master Chef</h1>
        {this.state.afisez == 0 && (
          <Afis1 retete={this.state.retete} afiPrep={this.afiPrep} />
        )}
        {this.state.afisez > 0 && (
          <Afis2
            retete={this.state.retete}
            id={this.state.afisez}
            afiPrep={this.afiPrep}
          />
        )}
      </div>
    );
  }
}
export default App;
