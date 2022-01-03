import { TestBed, inject } from '@angular/core/testing';
import { ServicoCalcService } from './servico-calc.service';

describe('ServicoCalcService', () => {
  let service: ServicoCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', 
    inject([ServicoCalcService], (service: ServicoCalcService) => {
      let soma = service.calcular(1, 4, ServicoCalcService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3', 
  inject([ServicoCalcService], (service: ServicoCalcService) => {
    let subtracao = service.calcular(1, 4, ServicoCalcService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  })
);

it('deve garantir que 1 / 4 = 0.25', 
  inject([ServicoCalcService], (service: ServicoCalcService) => {
    let divisao = service.calcular(1, 4, ServicoCalcService.DIVISAO);
    expect(divisao).toEqual(0.25);
  })
);

it('deve garantir que 1 * 4 = 4', 
  inject([ServicoCalcService], (service: ServicoCalcService) => {
    let multiplicacao = service.calcular(1, 4, ServicoCalcService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  })
);

it('deve retornar 0 para operação inválida', 
    inject([ServicoCalcService], (service: ServicoCalcService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );

});
