export const products = [
    {
        id: 1,
        title: "Motorola G24",
        img: "/g24.png",
        desc: "128gb / 4GB Ram",
        prize: '250000',
        category: "Celulares",

    },
    {
        id: 2,
        title: "Motorola Edge 40",
        img: "/edge40.png",
        desc: "256gb / 8GB Ram",
        prize: '500000',
        category: "Celulares",

    },
    {
        id: 3,
        title: "Samsung S24",
        img: "/s24.png",
        desc: "256GB / 8GB Ram",
        prize: '1500000',
        category: "Celulares",

    },
    {
        id: 4,
        title: "Auriculares Beats - Black",
        img: "Headphone.png",
        desc: "Auris para escuchar musiquita",
        prize: '300000',
        category: "Auriculares",

    },
    {
        id: 5,
        title: "JBL Tune 225 TWS",
        img: "/JBL_TUNE-225TWS.png",
        desc: "Auris para escuchar musiquita",
        prize: '90000',
        category: "Auriculares",

    },
    {
        id: 6,
        title: "Samsung Galaxy Buds Pro",
        img: "/samsung-galaxy-buds-pro.png",
        desc: "Auris para escuchar musiquita",
        prize: '250000',
        category: "Auriculares",

    },
    {
        id: 7,
        title: "Samsung Galaxy Buds Pro 2",
        img: "/samsung-buds-pro2.png",
        desc: "Auris para escuchar musiquita",
        prize: '400000',
        category: "Auriculares",

    },
    {
        id: 8,
        title: "HYUNDAI 50' 4K",
        img: "/hyundai-50-4k.png",
        desc: "Tv 50' 4k",
        prize: '600000',
        category: "Televisores",

    },
    {
        id: 9,
        title: "Samsung Curved 32' ",
        img: "/samsung-curved-32.png",
        desc: "Monitor Curvo 32'",
        prize: '300000',
        category: "Televisores",

    },
    {
        id: 10,
        title: "TCL 55' 4K UHD ",
        img: "/tvtcl55.png",
        desc: "TV 55' 4k Android Tv",
        prize: '300000',
        category: "Televisores",

    },
    {
        id: 11,
        title: "Philips Air Fryer ",
        img: "/philips-air-fryer.png",
        desc: "Freidora",
        prize: '300000',
        category: "Electrodomesticos",

    },
    {
        id: 12,
        title: "Whirlpool Micro Wave",
        img: "/whirlpool-microwave.png",
        desc: "Microondas Whirlpool",
        prize: '300000',
        category: "Electrodomesticos",

    },
]

 export const TotalProducts = products.length;

 export const Products = products.reduce((acc, product) => {
   if (!acc[product.category]) {
     acc[product.category] = [];
   }

   acc[product.category] = [...acc[product.category], product];

   return acc;
 }, {});