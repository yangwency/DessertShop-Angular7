export const DATA: any  = {
  'categories': [
    {
      'categori_id': 1,
      'name': 'Cupcakes'
    },
    {
      'categori_id': 2,
      'name': 'Cookie Wiches'
    },
    {
      'categori_id': 3,
      'name': 'Dounts'
    },
    {
      'categori_id': 4,
      'name': 'Others'
    }
  ],
  'products': [
    {
      'id': 1001,
      'name': 'Black Forest',
      'price': '6.50',
      'stock': '75',
      'available': true,
      'best_seller': true,
      'categories': [
        1,'cupcake'
      ],
      'img': 'https://img.trycaviar.com/MottZgMi2AEtBcQBzkt18TXfihM=/1196x795/https://s3.amazonaws.com/trycaviar.com/offers/12251/694100-201904121501.jpg',
      'description': 'Delicious chocolate cheesecake rimmed in luscious buttercream and crowned with a cherry topping!'
    },
    {
      'id': 1002,
      'name': 'White Midnight Magic',
      'price': '16.50',
      'available': true,
      'best_seller': false,
      'categories': [
        1
      ],
      'img': 'https://cdn.shopify.com/s/files/1/0006/0194/8207/files/Prod-Img_570x780_White_MIdnight_Magic_580x780_crop_center.jpg?v=1540328322',
      'description': 'Devil\'s food cake with chocolate chips baked in, topped with white chocolate buttercream frosting and sprinkled with chocolate chips.'
    },
    {
      'id': 1003,
      'name': 'Strawberry Delight',
      'price': '16.75',
      'available': false,
      'best_seller': true,
      'categories': [
        1
      ],
      'img': 'https://cdn.shopify.com/s/files/1/0006/0194/8207/files/web_strawberry_580x780_crop_center.jpg?v=1552920595',
      'description': 'Fragrant Orange peel cake baked with seasonal strawberries, topped with our perfectly sweet strawberry buttercream!'
    },
    {
      'id': 1004,
      'name': 'Limoncello',
      'price': '21.00',
      'available': true,
      'best_seller': false,
      'categories': [
        1
        
      ],
      'img': 'https://cdn.shopify.com/s/files/1/0006/0194/8207/files/weblimon_580x780_crop_center.jpg?v=1552920649',
      'description': 'Sweet and Tarte Lemon Cake complimented with a refreshing lemon core, then topped with our favorite lemon buttercream and cream cheese frosting.'
    },
    {
      'id': 2001,
      'name': 'Cookiewich',
      'price': '17.50',
      'available': true,
      'best_seller': true,
      'categories': [
        2
      ],
      'img': 'https://insomniacookies.com/uploads/products/trad_cookiewich_t600x400_1536265877.jpg',
      'description': 'Cold, creamy ice cream sandwiched between two delicious cookies. Pick your favorite cookies and ice cream flavor.'
    },
    {
      'id': 2002,
      'name': 'Deluxe Cookiewich',
      'price': '6.50',
      'available': true,
      'best_seller': false,
      'categories': [
        2
      ],
      'img': 'https://insomniacookies.com/uploads/products/deluxe_cookiewich_t600x400_1536265938.jpg',
      'description': 'Cold, creamy ice cream sandwiched between delicious deluxe cookies. Pick your favorite deluxe cookies and ice cream flavor.'
    },
    {
      'id': 2003,
      'name': 'Bigwich',
      'price': '16.75',
      'available': true,
      'best_seller': false,
      'categories': [
        2
      ],
      'img': 'https://insomniacookies.com/uploads/products/trad_bigwich_t600x400_1536266435.jpg',
      'description': 'Two traditional cookies with our insanely-delicious icing sandwiched in between. Pure Awesomeness!'
    },
    {
      'id': 2004,
      'name': 'Deluxe Bigwich',
      'price': '8.00',
      'available': false,
      'best_seller': false,
      'categories': [
        2
        
      ],
      'img': 'https://insomniacookies.com/uploads/products/Ice_Cream_Deluxe_Bigwich_sm_v2_1536859193.jpg',
      'description': 'Two jumbo deluxe cookies with our insanely-delicious icing sandwiched in between. Pure Awesomeness!'
    },
    {
      'id': 3001,
      'name': 'Original Glazed',
      'price': '7.50',
      'available': true,
      'best_seller': true,
      'categories': [
        
        3
      ],
      'img': 'https://www.krispykreme.com.au/media/catalog/product/cache/1/thumbnail_inside/9df78eab33525d08d6e5fb8d27136e95/o/r/original-glaze-sidehalf_1.jpg',
      'description': 'Made from a recipe dating back to the 1930s, our Original Glazed doughnuts have helped set us apart. And if you haven’t had an Original Glazed HOT off-the-line, you need to try one!'
    },
    {
      'id': 3002,
      'name': 'Krispy Kreme',
      'price': '20.50',
      'available': true,
      'best_seller': true,
      'categories': [
        
        3
      ],
      'img': 'https://www.krispykreme.com.au/media/catalog/product/cache/1/thumbnail_inside/9df78eab33525d08d6e5fb8d27136e95/k/r/krispy-kreme_nutella_product-ring-cut.jpg',
      'description': 'A classic ring doughnut dipped with NUTELLA®.Topped with a smattering of caramelised hazelnuts. A drizzle of NUTELLA® completes this delicious creation.'
    },

    {
      'id': 3003,
      'name': 'Caramel Iced',
      'price': '6.75',
      'available': true,
      'best_seller': true,
      'categories': [
        
        3
      ],
      'img': 'https://www.krispykreme.com.au/media/catalog/product/cache/1/thumbnail_inside/9df78eab33525d08d6e5fb8d27136e95/k/r/krispy-kreme_caramel-iced_product_cut_2.jpg',
      'description': 'Our signature Original Glazed™ doughnut hand dipped in a luscious caramel truffle icing and finished with light drizzling of white choc truffle.'
    },
    {
      'id': 3004,
      'name': 'The Simpsons D’ohnut',
      'price': '6.50',
      'available': true,
      'best_seller': true,
      'categories': [
        
        3
      ],
      'img': 'https://www.krispykreme.com.au/media/catalog/product/cache/1/thumbnail_inside/9df78eab33525d08d6e5fb8d27136e95/k/r/krispy-kreme_simpsons_product-do_nut_cut.jpg',
      'description': 'It’s delicious, it’s pink, it’s sprinkled, it’s Homer Simpson’s favourite snack!Our signature Original Glazed™ doughnut hand dipped in white choc truffle with strawberry flavour with a smattering of rainbow sprinkles.'
    },
    {
      'id': 4001,
      'name': 'Kaju Katli Sweet',
      'price': '7.50',
      'available': true,
      'best_seller': true,
      'categories': [
      
        4
      ],
      'img': 'https://chhappanbhogvadodara.com/wp-content/uploads/2018/01/original1.1570899.1.jpg',
      'description': 'This sweet delicacy is cut into small diamond shapes, thus people even call it by the name of diamond barfi. It is extensively gifted during special festivities and wedding occasions. The shelf life of this is around 15 days and is beautifully decorated and coated with edible silver foil. Talash.com source this dessert from the best sweet makers ofJayhind Sweets in Ahmedabad. They are the pioneers in making Kaju Barfi and we guarantee to offer you the best from the best.'
    },
    {
      'id': 4002,
      'name': 'Gulab Jamun',
      'price': '16.50',
      'available': true,
      'best_seller': true,
      'categories': [
        
        4
      ],
      'img': 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg',
      'description': 'Gulab jamun are soft delicious berry sized balls made of milk solids, flour & a leavening agent. These are soaked in rose flavored sugar syrup & enjoyed. The word “Gulab” translates to rose in hindi & “jamun” to berry. So gulab jamun are berry sized balls dunked in rose flavored sugar syrup.'
    },

    {
      'id': 4003,
      'name': 'Strawberry Mochi ',
      'price': '16.50',
      'available': true,
      'best_seller': true,
      'categories': [
        
        4
      ],
      'img': 'https://www.justonecookbook.com/wp-content/uploads/2014/08/Strawberry-Daifuku-NEW-500x375.jpg',
      'description': 'A popular spring dessert, Strawberry Mochi (Ichigo Daifuku) is a soft and chewy mochi stuffed with fresh juicy strawberry and sweet red bean paste. Indulge yourself with this beautiful and delicious Japanese delicacy!'
    },
    {
      'id': 4004,
      'name': 'Qing Tuan',
      'price': '6.50',
      'available': true,
      'best_seller': true,
      'categories': [
        4
        
      ],
      'img': 'https://cdn-images-1.medium.com/max/1680/1*AD-_CTyH_1F4uBg7Nw2UXQ.jpeg',
      'description': 'The sweet green rice dumpling, commonly known as Qingtuan, is a traditional must-have food prevailing in Jiangsu, Zhejiang, Shanghai and the vicinities around Qingming Festival.'
    }
    
  ]
};
