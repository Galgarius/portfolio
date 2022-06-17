import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: [
        '',
        Validators.requiredTrue,
        Validators.minLength(4),
        Validators.maxLength(15),
      ],
      password: [
        '',
        Validators.requiredTrue,
        Validators.minLength(6),
        Validators.maxLength(32),
      ],
      bday: [''],
    });
  }
  onSubmit(form: FormGroup): void {
    console.log('Valid?', form.valid);
    console.log('username', form.value.username);
    console.log('password', form.value.password);
    console.log('bday', form.value.bday);
  }
}
