import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  template: `
    <div class="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Profilom</h2>
      <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
        <mat-form-field class="w-full mb-4">
          <input matInput placeholder="Név" formControlName="name">
        </mat-form-field>
        
        <mat-form-field class="w-full mb-4">
          <input matInput placeholder="Email" formControlName="email">
        </mat-form-field>

        <mat-form-field class="w-full mb-4">
          <input matInput placeholder="Telefonszám" formControlName="phone">
        </mat-form-field>

        <button mat-raised-button color="primary" class="w-full" type="submit">
          Mentés
        </button>
      </form>
    </div>
  `,
  styles: []
})
export class ProfileComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.valid) {
    }
  }
}