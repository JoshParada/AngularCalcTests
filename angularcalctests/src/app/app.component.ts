import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcalctests';

  input: any = ''
  num1: number = 0;
  num2: number = 0;
  operand: string = '';

  numPressed(num: string) {
    this.input += num
    //console.log(this.input)
  }

  operatorPressed(op: string) {
    if (this.input !== 'ENTER OPERATOR') {
      this.operand = ''
      this.operand += op
      this.num1 = parseInt(this.input)
      this.input = ''
      //console.log(this.num1,this.operand, this.num2)
    }else{

    }
  }

  equalPressed() {
    if (this.operand === '') {
      this.input = 'ENTER OPERATOR'
    } else {
      this.num2 = parseInt(this.input)
      this.input = this.calculate(this.num1, this.num2)
      console.log(this.num1,this.operand, this.num2,this.calculate(this.num1, this.num2))

    }

  }

  clearPressed() {
    this.input = ''
    this.operand = ''
  }

  calculate(num1: number, num2: number): number | void {

    switch (this.operand) {

      case '+':
        return this.num1 + this.num2;
        break;
      case '-':
        return num1 - num2;
        break;
      case '*':
        return num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          this.input = 'CANNOT DIVIDE BY 0'
          break;
        } else {
          return num1 / num2;
          break;
        }
    }
  }
}
