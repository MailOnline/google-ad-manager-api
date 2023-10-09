export class Order<T extends Object> {
  constructor(
    public readonly field: keyof T,
    public readonly format: () => string,
  ) {}
}
