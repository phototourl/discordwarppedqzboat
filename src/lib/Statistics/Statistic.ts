import Wrapped from "../Wrapped";

export default abstract class Statistic<StaticData> {
  // wrapped is used in subclasses via this.wrapped
  // eslint-disable-next-line unused-imports/no-unused-vars
  constructor(protected wrapped: Wrapped) {}
  abstract calculateResult(): StaticData;
  abstract getDefaultValue(): StaticData;
}
