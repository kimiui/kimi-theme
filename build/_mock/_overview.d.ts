export declare const _topSales: {
    id: string;
    name: string;
    sales: number;
    image: string;
    price: number;
}[];
export declare const _appInstalled: {
    id: string;
    countryName: string;
    android: number;
    windows: number;
    apple: number;
    countryCode: string;
}[];
export declare const _appAuthors: {
    id: string;
    name: string;
    avatarUrl: string;
    totalFavorites: number;
}[];
export declare const _appInvoices: {
    id: string;
    invoiceNumber: string;
    price: number;
    category: string;
    status: string;
}[];
export declare const _appFeatured: {
    id: string;
    title: string;
    description: string;
    coverUrl: string;
}[];
export declare const _analyticTasks: {
    id: string;
    name: string;
}[];
export declare const _analyticPosts: {
    id: string;
    postedAt: string;
    title: string;
    coverUrl: string;
    description: string;
}[];
export declare const _analyticOrderTimeline: {
    id: string;
    title: string;
    type: string;
    time: string;
}[];
export declare const _analyticTraffic: {
    value: string;
    label: string;
    total: number;
}[];
export declare const _ecommerceSalesOverview: {
    label: string;
    totalAmount: number;
    value: number;
}[];
export declare const _ecommerceBestSalesman: {
    id: string;
    category: string;
    rank: string;
    email: string;
    name: string;
    totalAmount: number;
    avatarUrl: string;
    countryCode: string;
}[];
export declare const _ecommerceLatestProducts: {
    id: string;
    colors: string[];
    name: string;
    price: number;
    coverUrl: string;
    priceSale: number;
}[];
export declare const _ecommerceNewProducts: {
    id: string;
    name: string;
    coverUrl: string;
}[];
export declare const _bankingContacts: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
}[];
export declare const _bankingCreditCard: {
    id: string;
    balance: number;
    cardType: string;
    cardHolder: string;
    cardNumber: string;
    cardValid: string;
}[];
export declare const _bankingRecentTransitions: ({
    id: string;
    name: string;
    avatarUrl: string;
    type: string;
    message: string;
    category: string;
    date: string;
    status: string;
    amount: number;
} | {
    id: string;
    name: null;
    avatarUrl: null;
    type: string;
    message: string;
    category: string;
    date: string;
    status: string;
    amount: number;
})[];
export declare const _bookings: {
    id: string;
    destination: {
        name: string;
        coverUrl: string;
    };
    status: string;
    customer: {
        avatarUrl: string;
        name: string;
        phoneNumber: string;
    };
    checkIn: string;
    checkOut: string;
}[];
export declare const _bookingsOverview: {
    status: string;
    quantity: number;
    value: number;
}[];
export declare const _bookingReview: {
    id: string;
    name: string;
    postedAt: string;
    rating: number;
    avatarUrl: string;
    description: string;
    tags: string[];
}[];
export declare const _bookingNew: {
    guests: string;
    id: string;
    bookedAt: string;
    duration: string;
    isHot: boolean;
    name: string;
    price: number;
    avatarUrl: string;
    coverUrl: string;
}[];
export declare const _coursesContinue: {
    id: string;
    title: string;
    coverUrl: string;
    totalLesson: number;
    currentLesson: number;
}[];
export declare const _coursesFeatured: {
    id: string;
    title: string;
    coverUrl: string;
    totalDuration: number;
    totalStudents: number;
    price: number;
}[];
export declare const _coursesReminder: {
    id: string;
    title: string;
    totalLesson: number;
    reminderAt: string;
    currentLesson: number;
}[];
export declare const _ecommerceProductPerformance: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    order: number;
    sales: number;
    stock: number;
}[];
