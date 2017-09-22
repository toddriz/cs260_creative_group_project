import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  gunz = [
    {
      name: 'Heckler & Koch MP5',
      imgSrc: 'https://www.midwestindustriesinc.com/v/vspfiles/photos/MI-MP5M-3.jpg',
      description: 'Probably the most popular series of submachine guns in the world, it functions according to the proven roller-delayed blowback principle. Tremendously reliable, with maximum safety for the user, easy to handle, modular, extremely accurate and extraordinarily easy to control when firing \n HK features that are particularly appreciated by security forces and military users worldwide. There are now well over 100 variants of the MP5 available to cover the large number of different tactical requirements for a wide variety of users. whether on land, on the water or in the air – The MP5 is universally applicable, making it usable in all areas and under all conditions.'
    },
    {
      name: 'Remington 700',
      imgSrc: 'https://s7d2.scene7.com/is/image/dkscdn/15REMA700DLSYN270RIF_is/',
      description: 'It’s the number one bolt-action of all time, proudly made in the U.S.A. For over 50 years, more Model 700s have been sold than any other bolt-action rifle before or since. The legendary strength of its 3-rings-of-steel receiver paired with a hammer-forged barrel, combine to yield the most popular bolt-action rifle in history. Top choice of elite military snipers, the Model 700 is unequalled in tactical precision. Whether defending freedom or pursuing big game, its out-of-the-box accuracy is unmatched.'
    },
    {
      name: 'FN PS90',
      imgSrc: 'https://fnamerica.com/wp-content/uploads/2016/09/PS90_Rotators_-1200x500.png',
      description: 'Chambered in the 5.7x28mm cartridge, the FN PS90® utilizes blowback operation and fires from a closed bolt for greater accuracy and reliability. The FN PS90®’s civilian legal 16.04″ cold hammer-forged MIL-SPEC barrel is equipped with an integrated muzzle brake to reduce recoil. Dual magazine latches, cocking handles and an innovative synthetic thumbhole stock with a molded-in sling attachment point help make the FN PS90® fully ambidextrous. Models with 10- or 30-round polymer detachable magazines are available.'
    },
    {
      name: 'Springfield Armory M1A',
      imgSrc: 'https://www.sportsmansoutdoorsuperstore.com/prodimages/28812-DEFAULT-l.jpg',
      description: 'After World War II, the engineers at the US Government’s Springfield Armory® set about designing a replacement for the M1 Garand. In 1959, the US military adopted the resultant M14. The rugged reliability of the M14 coupled with its formidable 7.62×51 NATO cartridge left an enduring impression on America’s fighting forces despite its relatively short tenure. When it was replaced in 1970, the stage was set for the next step in its history. In 1974, the Reese family ensured that the legacy of the M14 would live on. Springfield Armory® in Geneseo, Illinois began offering a civilian legal semi-automatic version known as the M1A™. Powerful, accurate and reliable, M1A’s™ were soon found dominating the National Matches at Camp Perry. Shooters across the country discovered the versatility and enjoyable satisfaction of owning an M1A.'
    },
    {
      name: ' Colt AR15',
      imgSrc: 'https://cdn3.volusion.com/j4enh.r2en5/v/vspfiles/photos/BCM%20Carry%20Handle%20AR-15-3.jpg?1456827038',
      description: 'The Colt AR-15 was introduced in 1964. It is a semi-automatic version of the United States military M16 rifle. The first version was the Colt AR-15 Sporter, in .223 Remington, with a 20 inch barrel and issued with 5-round magazines.[1] Colt continues to use the AR-15 trademark for its line semi-automatic AR-15 rifles that are marketed to civilian and law-enforcement customers. Over the decades, Colt has made many different types of AR-15 rifle and carbine models: including the AR-15, AR-15A2, AR-15A3, AR-15A4, and many other models. The Colt AR-15 is a lightweight, 5.56×45mm, magazine-fed, gas-operated semi-automatic rifle. It was designed to be manufactured with the extensive use of aluminum alloys and synthetic materials.'
    },
    {
      name: 'Benelli M4',
      imgSrc: 'http://www.benelliusa.com/sites/default/files/styles/firearm_1004/public/originals/product-firearms/m4-tactical-shotgun-pistol-12-gauge.png?itok=bYGeBVPU',
      description: 'Benelli’s M4 Tactical is a unique, Auto Regulating Gas Operated (A.R.G.O) semi-auto shotgun, upon which the U.S. Marine Corps depend. The M4 Tactical comes standard with a Picatinny rail and pistol-grip stock. Other features include a fully-adjustable ghost-ring aperture rear sight and windage-adjustable front sight. New for 2017 the M4 is available with a serious, weather-beating Titanium Cerakote finish.'
    },
    {
      name: 'FN SCAR 17s',
      imgSrc: 'https://fnamerica.com/wp-content/uploads/2012/09/SCAR-17S-FDE_Rotators_7-1800x897.png',
      description: 'Experience the long-range accuracy, downrange power, exceptional reliability and match winning versatility of the FN SCAR® 17S, the semi-auto only version of the U.S. Special Operations Command’s newest service rifle. Chambered in 7.62x51mm, the FN SCAR® 17S features a free-floating, cold hammer-forged MIL-SPEC barrel with hardchromed bore. Fully-ambidextrous operating controls instantly adapt the FN SCAR® 17S to any user or any shooting position. The receiver-integrated MIL-STD-1913 optical rail plus three accessory rails enable mounting of a wide variety of scopes, electronic sights, tactical lights and lasers. The telescoping, side-folding polymer stock is fully adjustable for comb height and length of pull, making it ideal for Heavy Metal 3-Gun matches.'
    }
  ];
  current = 0;
  name;
  imgSrc;
  description;

  ngOnInit() {
    this.update();
  }

  next() {
    this.current++;
    if (this.current >= this.gunz.length) {
      this.current = 0;
    }
    this.update();
  }

  prev() {
    this.current--;
    if (this.current < 0) {
      this.current = (this.gunz.length - 1);
    }
    this.update();
  }

  update() {
    this.name = this.gunz[this.current].name;
    this.imgSrc = this.gunz[this.current].imgSrc;
    this.description = this.gunz[this.current].description;
  }

}
