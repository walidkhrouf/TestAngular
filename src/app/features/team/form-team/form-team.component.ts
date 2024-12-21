import { Component } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/team';
@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent {

  name: string = '';
    projectName: string = '';
    participants : Participant[] = [];
    projectDescription :string  = '';

  constructor(private teamService: TeamsService) {}

  onSubmit(): void {
    const newTeam: Team = {
      id: 0, // Placeholder, auto-incremented by the server
      name: this.name,
      projectName: this.projectName,
      participants : this.participants,
      projectDescription :this.projectDescription,
    };

    this.teamService.addTeam(newTeam).subscribe({
      next: (response) => {
        console.log('Team ajouté avec succès:', response);
        this.resetForm();
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de l\'album:', err);
      },
    });
}

resetForm(): void {
 this.name = '';
 this.participants = [];
 this.projectName = '';
 this.projectDescription = '';

}
}
