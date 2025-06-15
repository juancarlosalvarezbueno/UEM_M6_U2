import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  formulario: FormGroup;
  constructor(private fb:FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['',[Validators.required, Validators.maxLength(20)]],
      apellido: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      direccion: ['',[Validators.required, Validators.minLength(5)]],
      edad: ['',[Validators.required, Validators.min(18)]],
      dni: ['',[Validators.required, Validators.pattern('^[0-9]{8}[A-Z]$')]],
    })
  }

  get nombre() {
    return this.formulario.get('nombre');
  }
  get apellido() {
    return this.formulario.get('apellido');
  }
  get email() {
    return this.formulario.get('email');
  }
  get telefono() {
    return this.formulario.get('telefono');
  }
  get direccion() {
    return this.formulario.get('direccion');
  }
  get edad() {
    return this.formulario.get('edad');
  }
  get dni() {
    return this.formulario.get('dni');
  }
  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario enviado', this.formulario.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  

}
