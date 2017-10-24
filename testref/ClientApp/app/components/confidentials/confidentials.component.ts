import { Component } from '@angular/core';
import { ConfidentialsService } from "./confidentials.service";

@Component({
  selector: 'confidentials',
  templateUrl: './confidentials.component.html'
})
export class ConfidentialsComponent {
  constructor(private confidentialsService: ConfidentialsService) { };
  ngOnInit() { }

  doConfidentials()
  {

    console.debug("Hello");
    this.confidentialsService.doConfidentials("userName");
  }
  
}
