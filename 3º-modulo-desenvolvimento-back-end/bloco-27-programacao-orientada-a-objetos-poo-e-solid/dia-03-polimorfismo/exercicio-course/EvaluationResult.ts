// `Class`: EvaluationResult
// `Attributes`:
//     - evaluation: a avaliação
//     - score: a nota da pessoa estudante
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante
// `Validations`:
//     - A pontuação não pode ser negativa
//     - A pontuação não pode ser maior que a pontuação da avaliação.
import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  type: string;

  constructor(private _score: number, evaluation: Evaluation) {
    this._evaluation = evaluation;
    this.score = _score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  validateValueThreshold(value: number, type: string, threshold: number) {
    if (this.type === type && value > threshold) throw new Error(`A pontuação não pode passar de ${threshold} pontos`);
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontuação deve ser positiva');

    this.validateValueThreshold(value, 'prova', 25);
    this.validateValueThreshold(value, 'trabalho', 50);
    this._score = value;
  }
}