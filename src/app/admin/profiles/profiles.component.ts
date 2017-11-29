import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './profiles.service';
import { Profile } from '../../models/auth-models'

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[];
  loading = true;

  constructor(public profilesService: ProfilesService) { }

  ngOnInit() {
    this.profilesService.readProfiles().subscribe(profiles => {
      this.profiles = profiles;
      this.loading = false;
    });
  }

}
