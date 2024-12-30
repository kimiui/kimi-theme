import { AnalyticsCurrentSubject } from '../overview/analytics/analytics-current-subject';

// ----------------------------------------------------------------------
export function ChartRadar() {
  return (
    <AnalyticsCurrentSubject
      title="ApexChart Radar"
      chart={{
        categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
        series: [
          { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
          { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
          { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
        ],
      }}
    />
  );
}
