import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CollegeListService } from './services/college-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollegeListService],
})
export class AppComponent implements OnInit {
  stateList: any[] = [];
  collegeList: any[] = [];
  collegesByState: { [key: string]: any[] } = {};
  selectedValue = '';
  finalResult: any[] | undefined;

  constructor(private collegeListService: CollegeListService) {}

  ngOnInit() {
    this.collegeListService.getCollegeList().subscribe(
      (res) => {
        this.collegeList.push(res.json());
        this.getCollegeList();
      },
      (error) => {
        console.error('Error fetching college list:', error);
      }
    );
  }

  private getCollegeList() {
    this.collegeList.forEach((group) => {
      group.forEach((collegeData: any) => {
        const state = collegeData['state-province'];
        // To avoid duplicate state from list
        if (!this.collegesByState[state]) {
          if (state != null) {
            this.stateList.push(state);
          }
          this.collegesByState[state] = [];
        }
        this.collegesByState[state].push(collegeData.name);
      });
    });
  }

  public onStateChange(event: any) {
    this.finalResult = [];
    this.selectedValue = event.target.value;
    if (this.selectedValue) {
      this.finalResult.push(this.collegesByState[this.selectedValue]);
    }
  }
}
