export class Task {
  constructor(
    public id: number = 0,
    public description: string = '',
    public isCompleted: boolean = false,
    public createdAt: Date = new Date()
  ) {}
}
