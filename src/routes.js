import React from 'react';

const SchedulerPage = React.lazy(() => import('containers/SchedulerPage'));
const ProductsPage = React.lazy(() => import('containers/ProductsPage'));
const ClientsPage = React.lazy(() => import('containers/ClientsPage'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/scheduler', name: 'Scheduler', component: SchedulerPage },
    { path: '/products', name: 'Products', component: ProductsPage },
    { path: '/clients', name: 'Clients', component: ClientsPage },
];

export default routes;
