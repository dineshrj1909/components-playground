import TimeBucket from './TimeBucket';

type CapitalComponent = {
  id: string;
  componentName: string;
  buckets: Array<TimeBucket>;
  subComponents: Array<CapitalComponent>;
};

export default CapitalComponent;
