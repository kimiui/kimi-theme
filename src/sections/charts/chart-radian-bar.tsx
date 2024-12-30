import { EcommerceSaleByGender } from '../overview/e-commerce/ecommerce-sale-by-gender';
//----------------------------------------------------------------------
export function ChartRadianBar() {
  return (
    <EcommerceSaleByGender
      title="ApexChart Radian Bar"
      total={2324}
      chart={{
        series: [
          { label: 'Mens', value: 25 },
          { label: 'Womens', value: 50 },
          { label: 'Kids', value: 75 },
        ],
      }}
      sx={{ height: 1 }}
    />
  );
}
