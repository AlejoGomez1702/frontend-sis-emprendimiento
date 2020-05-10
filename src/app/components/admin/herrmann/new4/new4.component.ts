import { Component, OnInit } from '@angular/core';
import { HerrmannService } from '@myServices/herrmann.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

interface Question {
  selected: boolean;
  value: string;
}

@Component({
  selector: 'app-new4',
  templateUrl: './new4.component.html',
  styleUrls: ['./new4.component.css']
})
export class New4Component implements OnInit 
{
  public questions: Question[];
  public finished: boolean;

  constructor(
    private herrmannService: HerrmannService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService
  ) 
  {
    this.initInformation();
  }

  ngOnInit() 
  {}

  initInformation()
  {
    this.finished = false;

    this.questions = [
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'},
      {selected: false, value: '...'}
    ];
    //this.questions = [false,false,false,false,false,false,false,false,false,false];
  }

  verifyButton()
  {
    let numQuestions = this.questions.length;
    for(let i = 0; i < numQuestions; i++)
    {
      if(this.questions[i].value == '...')
      {
        return;
      }
    }

    this.finished = true;
  }

  showSpinner()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }

  addActivity()
  {
    this.showSpinner();
    let form = {
      'one': this.questions[0].value,
      'two': this.questions[1].value,
      'three': this.questions[2].value,
      'four': this.questions[3].value,
      'five': this.questions[4].value,
      'six': this.questions[5].value,
      'seven': this.questions[6].value,
      'eight': this.questions[7].value,
      'nine': this.questions[8].value,
      'ten': this.questions[9].value,
      'eleven': this.questions[10].value,
      'twelve': this.questions[11].value
    };

    this.herrmannService.addFourActivityHerrmann(form).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );

  }

  handleResponse(res)
  {
    console.log('Exitazoooo');
    this.router.navigateByUrl('/dashboard/herrmann/interpret');
  }

  handleError(error)
  {
    console.log('Errorrr');
  }

}
