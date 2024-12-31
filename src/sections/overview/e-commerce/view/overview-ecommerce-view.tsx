'use client';

import Grid from '@mui/material/Grid2';
import { faker } from '@faker-js/faker';
import { DashboardContent } from 'kimi-theme/layouts/dashboard';
import { _mock, _ecommerceProductPerformance } from 'kimi-theme/_mock';

import { EcommerceWeeklySales } from '../ecommerce-weekly-sales';
import { EcommerceRecentOrders } from '../ecommerce-recent-orders';
import { EcommerceNewCustomers } from '../ecommerce-new-customers';
import { EcommerceOrderTimeline } from '../ecommerce-order-timeline';
import { EcommerceBalanceStatistics } from '../ecommerce-balance-statistics';
import { EcommerceSalesByCategories } from '../ecommerce-sales-by-categories';
import { EcommerceProductPerformance } from '../ecommerce-product-performance';

// ----------------------------------------------------------------------

export function OverviewEcommerceView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <EcommerceWeeklySales
            title="Weekly Sales"
            chart={{
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              series: [3000, 1500, 2000, 5000, 4000, 12500, 2500],
            }}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <EcommerceRecentOrders
            title="Recent Orders"
            list={['Gloves', 'Hat', 'Bacon'].map((name, index) => ({
              id: _mock.id(index),
              name,
              sales: faker.number.float({ min: 1000, max: 5000 }),
              image: `/assets/images/products/product-${index + 1}.webp`,
              price: faker.number.int({ min: 20, max: 100 }) + 0.5,
            }))}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <EcommerceNewCustomers
            title="New Customers"
            total={1765}
            percent={2}
            chart={{
              series: [1100, 1200, 1150, 1300, 1400, 1200, 1500, 1765],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <EcommerceSaleByGender
            title="Sale by gender"
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
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <EcommerceYearlySales
            title="Yearly sales"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    {
                      name: 'Total income',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'Total expenses',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    {
                      name: 'Total income',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'Total expenses',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <EcommerceSalesOverview title="Sales overview" data={_ecommerceSalesOverview} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EcommerceCurrentBalance
            title="Current balance"
            earning={25500}
            refunded={1600}
            orderTotal={287650}
            currentBalance={187650}
          />
        </Grid> */}

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <EcommerceSalesByCategories
            title="Sales by Categories"
            chart={{
              series: [28.4, 18.5, 24.2, 24.7],
              labels: ['Health', 'Beauty', 'Shoes', 'Bag'],
            }}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <EcommerceBalanceStatistics
            title="Balance Statistics"
            chart={{
              series: [
                {
                  name: 'Revenue',
                  data: [82, 36, 25, 50, 49, 21, 70, 51, 84, 29, 62, 49],
                },
                {
                  name: 'Cost',
                  data: [23, 12, 54, 61, 32, 56, 81, 19, 46, 32, 77, 88],
                },
              ],
            }}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
            lg: 8,
          }}
        >
          <EcommerceProductPerformance
            title="Product Performance"
            tableData={_ecommerceProductPerformance}
            headLabel={[
              { id: 'product', label: 'Product' },
              { id: 'price', label: 'Price', align: 'left' },
              { id: 'order', label: 'Order', align: 'left' },
              { id: 'sales', label: 'Sales', align: 'left' },
              { id: 'stock', label: 'Stock', align: 'left' },
            ]}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
            lg: 4,
          }}
        >
          <EcommerceOrderTimeline
            title="Order Timeline"
            timelineItems={[
              {
                title: '1983, orders, $4220',
                date: '2 hours ago',
                color: 'primary',
              },
              {
                title: '12 Invoices have been paid',
                date: '2 hours ago',
                color: 'warning',
              },
              {
                title: 'Order #37745 from September',
                date: '25 Jul 2020',
                color: 'info',
              },
              {
                title: 'Order #XF-2356 is canceled',
                date: '22 Nov 2020',
                color: 'error',
              },
              {
                title: 'New order placed #XF-2356.',
                date: '24 Sep 2020',
                color: 'success',
              },
            ]}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
