import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoCalcService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
  	let resultado: number; // armazena o resultado da operação

  	switch(operacao) {
      //poderia utilizar ao invés do static na variável, o this na frente da variável quando chamado na função;
  	  case ServicoCalcService.SOMA :
  	    resultado = num1 + num2;
  		break;
  	  case ServicoCalcService.SUBTRACAO:
  	    resultado = num1 - num2;
  		break;
  	  case ServicoCalcService.DIVISAO:
  	    resultado = num1 / num2;
  		break;
  	  case ServicoCalcService.MULTIPLICACAO:
  	    resultado = num1 * num2;
  		break;
  	  default:
  	    resultado = 0;
  	}
  	return resultado;
  }
}
