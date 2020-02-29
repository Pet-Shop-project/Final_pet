import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service'
import { HeavtCatsService } from '../services/heavt-cats.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(public nav: NavbarService, private catServ: HeavtCatsService, private router: Router) { }
  public cats_light = []
  public cats_heavy = []
  public cats_normal = []
  public lightdogs = []
  public heavydogs = []
  public dog_normal = []
  public lightbirds = []
  public heavybirds = []
  public bird_normal = []
  public hvy_pet = []
  public light_pet = []
  public norm_pet = []
  public access=[]
  ngOnInit() {
    this.nav.show();
    this.catServ.random_light_cat().subscribe(data => {
      this.cats_light = data

    });
    // hevy_cat
    this.catServ.random_heavy_cat().subscribe(data => {
      this.cats_heavy = data
    })

    //normal cat
    this.catServ.random_normal_cat().subscribe(data => {
      this.cats_normal = data
    })
    //lightdog


    //hevydog
    this.catServ.random_heavydog().subscribe(data => {
      this.heavydogs = data
    })
    //norm_dog

    this.catServ.random_normaldog().subscribe(data => {
      this.dog_normal = data
    })
    //lightdog
    this.catServ.random_lightd().subscribe(data => {
      this.lightdogs = data
    })
    //lightb

    this.catServ.random_lightb().subscribe(data => {
      this.lightbirds = data
    })
    //hvybirds

    this.catServ.random_heavy().subscribe(data => {
      this.heavybirds = data
    })
    //normbirds

    this.catServ.random_normalbird().subscribe(data => {
      this.bird_normal = data
    })
    //hvypet
    this.catServ.random_heavyb().subscribe(data => {
      this.hvy_pet = data
    })


    this.catServ.random_lightpet().subscribe(data => {
      this.light_pet = data
    })

    this.catServ.random_normpet().subscribe(data => {
      this.norm_pet = data
    })

    // access
this.catServ.listRandomccessories().subscribe(data=>{
  this.access=data
})
  }
  onSelect_lightc() {
    this.router.navigate(['/light-cats'])
    

  }
  onSelect_hvyc() {
    this.router.navigate(['/heavy-cats', ])
    

  }


  onSelect_norm_c() {
    this.router.navigate(['/normal-cats'])
   

  }
  // dog
  onSelect_lightd() {
    this.router.navigate(['/dogs/lightdogs'])
    

  }
  onSelect_hvyd() {
    this.router.navigate(['/dogs/heavydogs', ])
    

  }


  onSelect_norm_d() {
    this.router.navigate(['/dogs/normaldogs'])
   

  }
  // birds
  onSelect_lightb() {
    this.router.navigate(['/light-birds'])

  }
  onSelect_hvyb() {
    this.router.navigate(['/heavy-birds', ])
  
  }
  onSelect_norm_b() {
    this.router.navigate(['/normal-birds'])
  }
  //pets
  onSelect_lightp() {
    this.router.navigate(['/smallpets/light'])
  
  }
  onSelect_hvyp() {
    this.router.navigate(['/smallpets/heavy', ])
  
  }
  onSelect_norm_p() {
    this.router.navigate(['/smallpets/normal'])
  }

  onSelect_access() {
    this.router.navigate(['/accessories'])
  }

}
