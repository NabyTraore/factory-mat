import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {AppareilService} from '../Services/appareil.service';
import {Router} from '@angular/router';
import {EditService} from '../Services/edit.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
  appareilForm: FormGroup;
  valueControl: FormControl;
  statutControl: FormControl;

  constructor(private appareilService: AppareilService, private router: Router, private editServcie: EditService, private formBuilder: FormBuilder) {

    this.valueControl = formBuilder.control('');
    this.statutControl = formBuilder.control('');
    this.appareilForm = formBuilder.group({
      valueName: this.valueControl,
      statut: this.statutControl
    });
  }

  ngOnInit() {
    this.valueControl.setValue(this.editServcie.getname());
    this.statutControl.setValue(this.editServcie.getstatut());
    this.OnChanges();
  }

  onSubmit() {
    console.log((this.appareilForm.value));
    this.appareilService.addAppareil(this.appareilForm.value.valueName, this.appareilForm.value.statut);
    this.editServcie.setname(this.appareilForm.value.valueName);
    this.editServcie.setstatut(this.appareilForm.value.statut);
    this.router.navigate(['/appareils']);
  }

  OnChanges() {
    this.appareilForm.get('valueName').valueChanges.subscribe(val => {
      this.editServcie.setname(val);
    });
    this.appareilForm.get('statut').valueChanges.subscribe(val => {
      this.editServcie.setstatut(val);
    });
  }
}
