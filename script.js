//---------------------------Restaurants--------------------------------------------
class restaurant {
    constructor(a, b, c, d, e) {
        this.name = "";
        this.city = "";
        this.zipCode = "";
        this.street = "";
        this.links = "";
        this.name = a;
        this.city = b;
        this.zipCode = c;
        this.street = d;
        this.links = e;
    }
    description() {
        return `<p> City: ${this.city}</p>
				<p> Name: ${this.name}<p/>
				<p> Zip Code: ${this.zipCode}<p/>
				<p> Street: ${this.street}</p>
				<p> Link: ${this.links}<p/>`;
    }
}
var rome = new restaurant("Pepe Verde", "Rome", "00100", "Viale Gorizia, 38-44", "http://pepeverde.eu");
var athens = new restaurant("Melilotos", "Athens", "105 60", "Kalamiotou 19", "https://www.melilotos.gr");
var telAviv = new restaurant("Yaffo Tel Aviv", "Tel Aviv", "6108400", "Yigal Alon St 98", "http://yaffotelaviv.com");
function render(obj, i) {
    document.getElementsByClassName("data")[i].innerHTML = "<p> Name: " + obj.name + "</p><p> City: " + obj.city + " </p><p> Zip Code: " + obj.zipCode + "</p><p> Address: " + obj.street + "/p><p>Link: " + obj.links + "</p>";
}
var arr;
arr = [rome, athens, telAviv];
for (let i in arr) {
    document.getElementsByClassName('exp')[i].addEventListener('mouseover', function () {
        render(arr[i], i);
    });
}
//---------------------------------------EVENTS--------------------------------------
class events {
    constructor(a, b, c, d) {
        this.name = "";
        this.date = "";
        this.time = "";
        this.price = "";
        this.name = a;
        this.date = b;
        this.time = c;
        this.price = d;
    }
    description() {
        return `<p> Event: ${this.name}</p>
				<p> Date: ${this.date}<p/>
				<p> Time: ${this.time}<p/>
				<p> Price: ${this.price}</p>`;
    }
}
var festival = new events("1st. CF Summer Festival", "15.07.2019", "12pm - Open End", "€ 40");
var disco = new events("Club Bankrot", "16.07.2019", "7pm - 03am", "€ 25");
var techno = new events("Techno Aviv", "17.07.2019", "8pm - 8am After Party", "€ 30");
function Render(obj, i) {
    document.getElementsByClassName("data2")[i].innerHTML = "<p> Event: " + obj.name + "</p><p> Date: " + obj.date + "</p><p> City: " + obj.time + " </p><p> Price: " + obj.price + "</p>";
}
var ar;
ar = [festival, disco, techno];
for (let i in ar) {
    document.getElementsByClassName('exp2')[i].addEventListener('mouseover', function () {
        Render(ar[i], i);
    });
}
//-------------------------------Countries---------------------------------------
class country {
    constructor(a) {
        this.descr = "";
        this.descr = a;
    }
    description() {
        return `<p> Event: ${this.descr}</p>`;
    }
}
var italy = new country("Italy is the fifth most visited country in the world, with a total of 52.3 million international arrivals in 2016.[222] The total contribution of travel & tourism to GDP (including wider effects from investment, the supply chain and induced income impacts) was EUR162.7bn in 2014 (10.1% of GDP) and generated 1,082,000 jobs directly in 2014 (4.8% of total employment).[223]");
var greece = new country("Tourism has been a key element of the economic activity in the country and one of the country's most important sectors, contributing 18% of the gross domestic product.[246] Greece welcomed over 28 million visitors in 2016,[247] which is an increase from the 26.5 million tourists it welcomed in 2015 and the 19.5 million in 2009,[248] and the 17.7 million tourists in 2007,[249] making Greece one of the most visited countries in Europe in the recent years.");
var israel = new country("Tourism, especially religious tourism, is an important industry in Israel, with the country's temperate climate, beaches, archaeological, other historical and biblical sites, and unique geography also drawing tourists. Israel's security problems have taken their toll on the industry, but the number of incoming tourists is on the rebound.[568] In 2017, a record of 3.6 million tourists visited Israel, yielding a 25 percent growth since 2016 and contributed NIS 20 billion to the Israeli economy.");
function Renderson(obj, i) {
    document.getElementsByClassName("data3")[i].innerHTML = "<p> Country: " + obj.descr + "</p>";
}
var ar3;
ar3 = [italy, greece, israel];
for (let i in ar3) {
    document.getElementsByClassName('exp3')[i].addEventListener('mouseover', function () {
        Renderson(ar3[i], i);
    });
}
