import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { employe } from './employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employes = signal<employe[]>([]);
  backendUrl = 'http://localhost:8080/employes';

  constructor(private http: HttpClient) {
    this.getEmployes();
  }

  getEmployes(): void {
    this.http.get<employe[]>(this.backendUrl).subscribe(data => {
      this.employes.set(data);
    });
  }

  addEmploye(employe: any): void {
    const formData = new FormData();
    formData.append('id', employe.id);
    formData.append('nom', employe.nom);
    formData.append('email', employe.email);
    if (employe.photo instanceof File || employe.photo instanceof Blob) {
      formData.append('photo', employe.photo, employe.photo.name);
    }
    formData.append('dateNaissance', new Date(employe.dateNaissance).toISOString());


    formData.append('departement', JSON.stringify(employe.departement));

    this.http.post<employe>(this.backendUrl, formData).subscribe(newEmploye => {
      this.employes.update(state => [...state, newEmploye]);
    });
  }

  deleteEmploye(id: number) {
    this.http.delete<boolean>(`${this.backendUrl}/${id}`).subscribe(retour => {
      if (retour) {
        this.employes.update(state => state.filter(e => e.id !== id));
      }
    });
  }

  async updateEmploye(employe: any) {
    const formData = new FormData();
    formData.append('id', employe.id);
    formData.append('nom', employe.nom);
    formData.append('email', employe.email);

    if (employe.photo instanceof File || employe.photo instanceof Blob) {
      formData.append('photo', employe.photo, employe.photo.name);
    } else if (typeof employe.photo === 'string' && employe.photo.startsWith('http')) {
      try {
        const response = await fetch(employe.photo);
        const blob = await response.blob();
        formData.append('photo', blob, 'photo.jpg');
      } catch (e) {
        console.error('Erreur de conversion de l\'URL en Blob', e);
      }
    }

    formData.append('dateNaissance', new Date(employe.dateNaissance).toISOString());


    formData.append('departement', JSON.stringify(employe.departement));

    this.http.put<employe>(this.backendUrl, formData).subscribe(updatedEmploye => {
      this.employes.update(state => state.map(s => (s.id === employe.id ? updatedEmploye : s)));
    });
  }
}
