import { Component, Input } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: `hello.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  myFormArray: FormArray;

  ngOnInit() {
    this.myFormArray = new FormArray([]);

    let control = new FormControl();
    control.setValue('test value');

    this.myFormArray.push(control);

    console.log(this.myFormArray.value);
  }
}
