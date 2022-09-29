import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm!: FormGroup;
  time: any = [];
  task: any = [];

  ngOnInit() {
    this.myForm = new FormGroup({
      Time: new FormControl('', Validators.required),
      task: new FormControl('', Validators.required),
    });
  }
  addtodo() {
    let form = this.myForm.value;
    if (this.myForm.valid) {
      this.time.push(form.Time);
      this.task.push(form.task);
      this.myForm.reset();
    } else {
      alert('enter valid data');
    }
    setTimeout(() => {
      alert(form.task);
    }, form.Time);
  }

  Reset(){
    this.time=[]
    this.task=[]
  }
}