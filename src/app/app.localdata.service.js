angular
    .module('app.main')
    .service('storageService', function(moment, STORAGE_KEY, $localStorage) {
        var KEY = STORAGE_KEY;
        this.check = function() {
            checkAppData();
        }

        ////////////////////////
        function checkAppData() {
            // $localStorage.$reset();
            var data = {};
            data[KEY.CUSTOMERS] = populateCustomersData();
            data[KEY.GROCERY_LIST] = getGroceryList();
            $localStorage.$default(data);
        }

        function populateCustomersData() {
            var custList = getCustomerNames();
            var groceryList = getGroceryList();

            var MAX_CUSTOMERS = 50;
            var ORDER_LIMIT = 2;
            var ITEMS_LIMIT = 4;
            var customers = [];
            var custCounter = 1;
            var orderCounter = 1;

            for (var i = 0, iMax = custList.length; i < iMax && i <= MAX_CUSTOMERS; i++) {
                var tempCust = custList[getNum(custList.length-1)];
                tempCust.id = custCounter++;
                tempCust.orders = [];
                ORDER_LIMIT = getNum(3);
                // add two categories
                for (var j = 0, jMax = groceryList.length; j < jMax && j <= ORDER_LIMIT; j++) {

                    var aCategory = groceryList[getNum(groceryList.length - 1)];

                    var tempOrderItem = {
                        d: getRandDate(),
                        id: orderCounter++,
                        itemList: []
                    }

                    // add 4 items
                    for (var k = 0, kMax = aCategory.items.length; k < kMax && k <= ITEMS_LIMIT; k++) {
                        tempOrderItem.itemList.push({
                            name: aCategory.items[k],
                            quantity: getNum(5),
                            rate: getNum(50)
                        });
                    }
                    tempCust.orders.push(tempOrderItem);
                }
                customers.push(tempCust);
            }
             $localStorage.custCounter = custCounter;
            $localStorage.orderCounter = orderCounter;
            return customers;
        }

        function getNum(max) {
            return Math.floor((Math.random() * max) + 1);
        }

        function getRandDate() {
            return new Date(moment().subtract(getNum(350), 'days')._d).getTime()
        }

        function getGroceryList() {
            return [{
                'category': ' Produce',
                'items': ['Potatoes', 'Mushrooms', 'Onions', 'Cucumbers', 'Lettuce', 'Tomato', 'Carrots/Celery', 'Zucchini', 'Broccoli', 'Cauliflower', 'Spinach', 'Bell Peppers', 'Strawberries', 'Bananas', 'Apples', 'Oranges', 'Grapes', 'Grapefruit', 'Melon', 'Nectarines', 'Peaches', 'Pears', 'Plums', 'Lemon/Lime', 'Blueberries', 'Rasberries', ]
            }, {
                'category': ' Deli',
                'items': ['Deli Meats', 'Deli Salads', 'Deli Cheese', 'Rotisserie Chicken']
            }, {
                'category': ' Snacks',
                'items': ['Cookies', 'Crackers', 'Graham Crackers', 'Chips', 'Popcorn']
            }, {
                'category': ' Breads',
                'items': ['White Bread', 'Whole Wheat Bread', 'Hot-dog Buns', 'Hamburger Buns', 'Bagels', 'Biscuits', 'English Muffins', 'Tortillas']
            }, {
                'category': ' Beverages',
                'items': ['Apple Juice', 'KoolAid/Lemonade', 'Gator/Power-ade', 'Juice Boxes', 'Crystal Lite', 'Pop/Soda', 'Bottled Water', 'Chocolate Syrup', 'Strawberry Syrup', 'Coffee', 'Tea', 'Beer', 'Wine']
            }, {
                'category': ' Condiments',
                'items': ['Olive Oil', 'Vegetable Oil', 'BBQ Sauce', 'Salsa', 'Mustard', 'Mayonnaise', 'Pickles/Relish', 'Ketchup', 'Marinade', 'Salad Dressings', 'Jelly/Jam', 'Peanut Butter', 'Seasoning Packet', 'Salt/Pepper', 'Spices']
            }, {
                'category': ' Canned Goods',
                'items': ['Tuna', 'Spaghetti Sauce', 'Pizza Sauce', 'Tomato Sauce', 'Mushrooms', 'Soup / Chili']
            }, {
                'category': ' Canned Veggies',
                'items': ['Green Beans', 'Corn', 'Peas']
            }, {
                'category': ' Canned Fruits',
                'items': ['Applesauce', 'Fruit Cups', 'Pineapple', 'Peaches', 'Pears', 'Fruit Cocktail', 'Raisins']
            }, {
                'category': ' Bakery',
                'items': ['Donuts', 'Cake', 'Pie', 'Cinnamon Rolls', 'Brownies', 'Cookies']
            }, {
                'category': ' Dairy',
                'items': ['Milk', 'Orange Juice', 'Cookie Dough', 'Dinner Roll Dough', 'Butter/Margarine', 'Eggs', 'Yogurt', 'Cheese Sticks', 'Sliced  Cheese', 'Shredded Cheese', 'Cream Cheese', 'Sour Cream', 'Cottage Cheese']
            }, {
                'category': ' Cereals',
                'items': ['Cereal', 'Fruit Snacks', 'Granola Bars', 'Oatmeal', 'Hot Cereal']
            }, {
                'category': ' Pasta',
                'items': ['Spaghetti', 'Mac & Cheese', 'Lasagna Noodles', 'Rice', 'Risotto', 'Noodle & Sauce Mix', 'RiceARoni']
            }, {
                'category': ' Ethnic Foods',
                'items': ['Taco Mix', 'Tortilla Shells', 'Taco Sauce', 'Soy Sauce', 'Teriyaki Sauce']
            }, {
                'category': ' Pets',
                'items': ['Cat Food', 'Cat Litter', 'Cat Toys', 'Dog Food', 'Dog Toys']
            }, {
                'category': ' Meat',
                'items': ['Ground Beef', 'Chicken', 'Ground Turkey', 'Veal', 'Beef Roast', 'Steaks', 'Burger Patties', 'Pork Chops', 'Pork Roast', 'Bacon', 'Hot Dogs', 'Sausage', 'Brats', 'Ham']
            }, {
                'category': ' Baking Aisle',
                'items': ['Sugar', 'Flour', 'Pancake Mix', 'Muffin Mix', 'Cake Mix', 'Brownie Mix', 'Cookie Mix', 'Marshmallow', 'Jello', 'Pudding', 'Pancake Syrup', 'Honey', 'Chocolate Chips']
            }, {
                'category': ' Health & Beauty',
                'items': ['Suntan Lotion', 'Shampoo', 'Conditioner', 'Deodorant', 'Bath Soap', 'Feminine Supplies', 'Panty hose', 'Make up', 'Toothpaste', 'Mouthwash', 'Lotion', 'Band Aids', 'Antiseptic Cream', 'Medicines', 'Vitamins', 'Shaving Cream', 'Razors']
            }, {
                'category': ' Frozen Foods',
                'items': ['Chicken Nuggets', 'Frozen Entrees', 'Frozen Vegetables', 'Frozen Fruits', 'French Fries', 'Waffles', 'Whipped Cream', 'Pancakes', 'Pie Crusts', 'Pizza', 'Ice Cream']
            }, {
                'category': ' Paper Goods',
                'items': ['Napkins', 'Paper Towels', 'Dixie Cups', 'Toilet Paper', 'Kleenex', 'Paper Plates', 'Paper Cups', 'Ziplock Bags', 'Trash Bags', 'Aluminum Foil', 'Plastic Wrap', 'Wax Paper']
            }, {
                'category': ' Cleaners',
                'items': ['Laundry Detrgnt', 'Fabric Softener', 'Dishwasher Soap', 'Bleach', 'Disinfectant', 'Cleanser', 'Dusting Spray']
            }, {
                'category': ' Baby Items',
                'items': ['Baby Food', 'Baby Formula', 'Diapers', 'Baby Wipes']
            }, {
                'category': ' Other',
                'items': ['Pet Food', 'Film for Camera', 'Cards/Gift Wrap', 'Batteries', 'Light Bulbs', 'Ice']
            }]
        }

        function getCustomerNames() {
            return [{
                'firstName': "Sunaina",
                'lastName': "Suresh  ",
                'stateName': "Andaman and Nicobar Islands"
            }, {
                'firstName': "BISHWANTH ",
                'lastName': "SARKAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SHANKAR ",
                'lastName': "SARKAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SUKUMAR ",
                'lastName': " BISWAS",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "POROKASH",
                'lastName': "MANDAL",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SARODINDU ",
                'lastName': " MANDAL",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "PROBHAT",
                'lastName': " MANDAL",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "MADHUSUDHAN",
                'lastName': "JHAKOR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "TATON ",
                'lastName': " MAHATO",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "BASHUDAV",
                'lastName': " RAJBAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "RAM PIYARA",
                'lastName': " BIHARI",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "RAMESH",
                'lastName': " KUMAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SURASH",
                'lastName': " SURAT",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SATTOJIT",
                'lastName': "MONDAL",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "NANDLAL",
                'lastName': "JHAKAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "LOKHAN ",
                'lastName': "MIDDA ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SUBROTO ",
                'lastName': " SIKDER",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SOMLAL ",
                'lastName': " SINGH",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "DHANRAJ ",
                'lastName': " BHADUR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "JHANTU",
                'lastName': "KARMAKAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Y PARVEEN KUMAR",
                'lastName': " REDDY",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "V PRAVEEN KUMAR",
                'lastName': " REDDY",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "D SATYA ",
                'lastName': "SRINIVAS",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SUBBARAO",
                'lastName': "DEGALA",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': " SATYANARAYAN ",
                'lastName': "MURTHY",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "G SHIVA ",
                'lastName': "RANJAN GOUD",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Nallagatla",
                'lastName': "Bhavana  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SRIPATHI ",
                'lastName': "VENKATA SATHYAM",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Shanmukha",
                'lastName': "Yadavalli  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Dittakavi",
                'lastName': "Sriharsha  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Sreelakshmi",
                'lastName': "Goud  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': " SUDHAKAR ",
                'lastName': "K REDDY",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': " AMARENDER ",
                'lastName': "K REDDY",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "K SATYA",
                'lastName': "BHASKAR ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "K SATYA",
                'lastName': "BHASKAR ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "P TRINATH ",
                'lastName': "TRINATH ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "KURUMAIAH",
                'lastName': "GINKA ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "RAMESH",
                'lastName': "ANKEPAKA",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "KUNTALA ",
                'lastName': "SAIDHALU",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Chandra",
                'lastName': "Sekhar  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "CHENNA",
                'lastName': "KESHULU",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "GANDI ",
                'lastName': "NATHANELU",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "S  AJAY",
                'lastName': " KAPIL",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "NATRA DURGA",
                'lastName': "PRASAD",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "YADAAIH",
                'lastName': "AVOOLA",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "ANJAIAH",
                'lastName': "PAGILLA",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "SRINIVAS",
                'lastName': "PALAKURLA",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "S SURESH",
                'lastName': " KUMAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "K SHIVA KUMAR",
                'lastName': " KUMAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "A ANIL",
                'lastName': " KUMAR",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "PADMARAO",
                'lastName': "PADMARAO",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Boggarapu",
                'lastName': "Prathyusha  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Jayasree",
                'lastName': "Nidumolu  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Krishna",
                'lastName': "Chaitanya  ",
                'stateName': "Andhra Pradesh"
            }, {
                'firstName': "Kaustav",
                'lastName': "Gohain  ",
                'stateName': "Assam"
            }, {
                'firstName': "Partha",
                'lastName': "Pratim Das ",
                'stateName': "Assam"
            }, {
                'firstName': "Rijuwan",
                'lastName': "Akhtar  ",
                'stateName': "Assam"
            }, {
                'firstName': "KHODA BAY",
                'lastName': "ANSARI",
                'stateName': "Bihar"
            }, {
                'firstName': "NAMUDDIN",
                'lastName': "ANSARI",
                'stateName': "Bihar"
            }, {
                'firstName': "ASHISH",
                'lastName': "PASWAN",
                'stateName': "Bihar"
            }, {
                'firstName': "MOSTAKIM",
                'lastName': "ANSARI",
                'stateName': "Bihar"
            }, {
                'firstName': "RAMYAGAN",
                'lastName': "MISTRY",
                'stateName': "Bihar"
            }, {
                'firstName': "ALAMGIV",
                'lastName': "ANSARI",
                'stateName': "Bihar"
            }, {
                'firstName': "ARAVIND",
                'lastName': "VISWAKARMA",
                'stateName': "Bihar"
            }, {
                'firstName': "RAM GAGAN",
                'lastName': "MISTRY",
                'stateName': "Bihar"
            }, {
                'firstName': "Manoranjan",
                'lastName': "Kumar Jha ",
                'stateName': "Bihar"
            }, {
                'firstName': "Vindesvar",
                'lastName': "Kumar  ",
                'stateName': "Bihar"
            }, {
                'firstName': "JAI RAM ",
                'lastName': "NAGESH",
                'stateName': "Chhattisgarh"
            }, {
                'firstName': "DEVRAJ ",
                'lastName': "NAGESH",
                'stateName': "Chhattisgarh"
            }, {
                'firstName': "ARKHIT",
                'lastName': " NAYAK",
                'stateName': "Chhattisgarh"
            }, {
                'firstName': "Vijaya",
                'lastName': "Sharma  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Ranjeet",
                'lastName': "Singh  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Pushpraj",
                'lastName': "Naithani  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Renuka",
                'lastName': "Mishra  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Urvashi",
                'lastName': "Bisht  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Bhawna",
                'lastName': "Gupta  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Piyush",
                'lastName': "Jain  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Pankaj",
                'lastName': "Bhatt  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Praveen",
                'lastName': "Kumar  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Hammad",
                'lastName': "Masood  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Pulkit",
                'lastName': "Gosain  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Himanshi",
                'lastName': "Gupta  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Nishtha",
                'lastName': "Sharma  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Diksha",
                'lastName': "Jain  ",
                'stateName': "Delhi"
            }, {
                'firstName': "Thakurani",
                'lastName': "Urvashi  ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Abhigna",
                'lastName': "Milanbhai Pota ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Thanki",
                'lastName': "Tanvi Venilal ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Chirag",
                'lastName': "Bagdai  ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Bhavisha",
                'lastName': "Keshwala  ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Murtaza",
                'lastName': "Kanpurwala  ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Nirajkuar",
                'lastName': "Patel  ",
                'stateName': "Gujarat"
            }, {
                'firstName': "Sonika",
                'lastName': "thakran  ",
                'stateName': "Haryana"
            }, {
                'firstName': "Protibha",
                'lastName': "Chakravorty  ",
                'stateName': "Haryana"
            }, {
                'firstName': "PURUSOTAMA",
                'lastName': " NAYAK",
                'stateName': "Haryana"
            }, {
                'firstName': "KULDEEP",
                'lastName': " MAHATO",
                'stateName': "Jammu and Kashmir"
            }, {
                'firstName': "Shilpa",
                'lastName': "Rani  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Prince",
                'lastName': "Khetan  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Kumari",
                'lastName': "Neha  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SASHIMUDHIN ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LAWLESH KUMAR ",
                'lastName': "SHUKLA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SAKIR ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ARABIND",
                'lastName': " KUMAR",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NAGENDRA",
                'lastName': "VISWAKARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PARASURAM ",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "JANAKI",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KAMESHWAR ",
                'lastName': "VISWAKARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SANTOSH ",
                'lastName': "BHUIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "JITENDRA ",
                'lastName': "KUMAR PAL",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BASANTH",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "HIRALAL",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ARBIND ",
                'lastName': "KUMAR PAL",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AKCHAY ",
                'lastName': "BHUIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AMARDAYAL",
                'lastName': " BHUIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KARIMAN ",
                'lastName': "BHUIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KUNAJ ",
                'lastName': "BHUIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PATWARI",
                'lastName': "BIUSWAS",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MUSUIMI",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KALENDRA",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DHARMENDRA",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SIKENDRA",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LAL MOHAN",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BINESH",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NAGESHWAR",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AJMUDIN",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMCHANDRA",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMKRISHNA",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMKRISHNA",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMESH",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "UPENDRA KUMAR",
                'lastName': "PRADHAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMAWDHAR",
                'lastName': " VISWAKARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ASHOK KUMAR",
                'lastName': " VARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAJKUMAR",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "VINODH KUMAR",
                'lastName': " PARIKA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAM BARAN",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "VISHNU",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMKUMAER",
                'lastName': "VISWAKARAM",
                'stateName': "Jharkhand"
            }, {
                'firstName': "HARI PRASAD",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SAMARU",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "UDAY RAM",
                'lastName': "PANIKA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMPATI",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MD NAIM",
                'lastName': "ANSAREE",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BIKRAM ",
                'lastName': "PRASAD",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MANOJ ",
                'lastName': "PASWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MUMTAJ ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MATLU ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MAKSHUD",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LILESHWAER ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SARRAJ ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DAYANAND ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SARWAR ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PARDEEP ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LALKESH ",
                'lastName': "SHARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAKESH",
                'lastName': " KUMAR",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ANAND BIHARI ",
                'lastName': "SHARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LAKHAN DAW ",
                'lastName': "SHARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KHAM SINGH ",
                'lastName': "DHURUWA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NARHARI ",
                'lastName': "DHURUWA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SANAT KUMAR ",
                'lastName': "AGASTI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PRAVIN",
                'lastName': " AGASTI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "TAHIR ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "GOBIND ",
                'lastName': "BHUIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ARJUN ",
                'lastName': "GANGHU",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BINOD ",
                'lastName': "PHARIA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KULDIP ",
                'lastName': "GANJHU",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NASI RUDHHIN ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "JITENDRA ",
                'lastName': "CHAUDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NARAYAN ",
                'lastName': "KUSHWEHA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "GANESH ",
                'lastName': "SHARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "UPENDRA ",
                'lastName': "SHARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "UPENDRA",
                'lastName': " YADAV",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BHADAI ",
                'lastName': "HOHUSA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "UPENDRA ",
                'lastName': "HOHUSA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SHIMAN",
                'lastName': " LAKRA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SANJAY ",
                'lastName': " PARWAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PULTAN",
                'lastName': " AGUSIYA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SHITARAM",
                'lastName': " KOSWA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "CHANDAN ",
                'lastName': "BHUIYAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SUDHIT ",
                'lastName': "CHOWDARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DINESH ",
                'lastName': "BHUIYAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AKHILESH",
                'lastName': "BHUIYAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ARVIND ",
                'lastName': "BHUIYAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAJESH ",
                'lastName': "BHUIYAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAM PRASAD ",
                'lastName': "CHOWDARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DINESH ",
                'lastName': "VISWAKARMA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SIVDAT ",
                'lastName': "MISTRY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MAHARAJ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "JAHAN ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SUJAN ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "ALAUDIN ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NANDHU",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KITABU ",
                'lastName': "ANSARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SURESH",
                'lastName': "CHAUDARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SUNIL ",
                'lastName': "CHAUDHARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "CHOTU ",
                'lastName': " CHAUDHARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "TAPESHWAR",
                'lastName': "CHAUDARI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SHIV KUMAR",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PINTU ",
                'lastName': "CHOUDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SANTOSH ",
                'lastName': "CHOUDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BISHAL",
                'lastName': " MAGHI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SUDESH",
                'lastName': " MAGHI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NARESH ",
                'lastName': "CHOUDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SHANKAR",
                'lastName': " KORWA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "NANDALAL",
                'lastName': " KORWA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMODHAR",
                'lastName': " KORWA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AYODHYU ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BIRENDAR ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SITARAM ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KARIMAN ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MULDIP ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MANSAP ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AKLESH ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MOHAN ",
                'lastName': "CHOWDHARY",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MANGAL ",
                'lastName': "BHARTI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PRASHID",
                'lastName': " BHARATI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DINESH ",
                'lastName': "BHARTI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MAHENDER ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BALDEV ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MOHAN ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SHYAM ",
                'lastName': " SINGH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAJESH",
                'lastName': "KASHYAB",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Shruti",
                'lastName': "Sneha  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Archana",
                'lastName': "Singh  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Vikash",
                'lastName': "Kumar Agrawal ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PRAKASH ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "KUNJA RAJUKA",
                'lastName': "RAJUKA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "POKHI MAHATO",
                'lastName': " MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LOKNATH MAHATO",
                'lastName': " MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "VASUDEV MAHATO",
                'lastName': " MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "CHOTI MAHATO",
                'lastName': " MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "INDER MARKAM",
                'lastName': "MARKAM",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BUDHEN MAHATO",
                'lastName': " MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MOTILAL MARKAM",
                'lastName': "MARKAM",
                'stateName': "Jharkhand"
            }, {
                'firstName': "LALCHAND ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MAHESH ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "HULASH ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DURAL CHAND ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DASRATHA ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "TARKESWARA ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PURAN ",
                'lastName': "PANDIT ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAMESH KU ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "YUGAL KU ",
                'lastName': "MAHATO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "GANGARAM",
                'lastName': "BRAJAKISHORE",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MANDULA ",
                'lastName': "SRISALLAM",
                'stateName': "Jharkhand"
            }, {
                'firstName': "HRUSHI ",
                'lastName': "CHHATRIA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SIDESWAR ",
                'lastName': "CHHATRIA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BURKI ",
                'lastName': "SADANANDAN",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DERARAKONDA",
                'lastName': " JAGANNADOM",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BONOTHU ",
                'lastName': "RAJESH",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Poonam",
                'lastName': "Kumari  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SURESH ",
                'lastName': "KARAMALI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "DINESHWAR",
                'lastName': " MAHTO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "PRAVIN",
                'lastName': " KUMAR MAHTO",
                'stateName': "Jharkhand"
            }, {
                'firstName': "MANOJ ",
                'lastName': "KARMALI",
                'stateName': "Jharkhand"
            }, {
                'firstName': "BINESHWER",
                'lastName': " MUNDA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "AMARDEW ",
                'lastName': "MUNDA ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "SUNIL ",
                'lastName': "MAHTO ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "RAJENDAR ",
                'lastName': "MUINDA",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Sangeeta",
                'lastName': "Gorai  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Sharmistha",
                'lastName': "Bhattacharya  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Kanwal",
                'lastName': "Singh Sidhu ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Mavelin",
                'lastName': "Niloffer  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Supriya",
                'lastName': "Kumari  ",
                'stateName': "Jharkhand"
            }, {
                'firstName': "Amrutha",
                'lastName': "Satheesh  ",
                'stateName': "Karnataka"
            }, {
                'firstName': "Lionel",
                'lastName': "Leslie Dcunha ",
                'stateName': "Karnataka"
            }, {
                'firstName': "Aishwarya",
                'lastName': "Venkatakrishna  ",
                'stateName': "Karnataka"
            }, {
                'firstName': "Sruthy",
                'lastName': "S Lal ",
                'stateName': "Kerala"
            }, {
                'firstName': "Harsha",
                'lastName': "P Mathai ",
                'stateName': "Kerala"
            }, {
                'firstName': "Nayana",
                'lastName': "Wilfred C.J ",
                'stateName': "Kerala"
            }, {
                'firstName': "Lakshmi",
                'lastName': "Raju  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Ansmol",
                'lastName': "Antony  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Scaria",
                'lastName': "Sebastian  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Supreeth",
                'lastName': "Anil  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Aakriti",
                'lastName': "Mishra  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Tripti",
                'lastName': "Sharma  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Saurabh",
                'lastName': "Bajpai  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Prabha",
                'lastName': "Nigam  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Vaisakhy",
                'lastName': "Vijayan  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Rahana",
                'lastName': "Humayoon  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Athira",
                'lastName': "Krishnankutty  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Sarath",
                'lastName': "S. Prasad ",
                'stateName': "Kerala"
            }, {
                'firstName': "Aswathy",
                'lastName': "Babu  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Seethu",
                'lastName': "Mohan  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Nithin",
                'lastName': "Mathew.K  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Anjali",
                'lastName': "Nair  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Aravind",
                'lastName': "Radhakrishnan  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Saranya",
                'lastName': "K Sasi ",
                'stateName': "Kerala"
            }, {
                'firstName': "Georgekutty",
                'lastName': "Jerome  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Anupama",
                'lastName': "S Nair ",
                'stateName': "Kerala"
            }, {
                'firstName': "Vishnu",
                'lastName': "Pallath  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Neethu",
                'lastName': "A  Vimal",
                'stateName': "Kerala"
            }, {
                'firstName': "Alicia",
                'lastName': "Binny Nair ",
                'stateName': "Kerala"
            }, {
                'firstName': "Srinath",
                'lastName': "Babu  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Tincymol",
                'lastName': "James  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Vishnu",
                'lastName': "Prasad Kammath V",
                'stateName': "Kerala"
            }, {
                'firstName': "Surumi",
                'lastName': "K Majeed ",
                'stateName': "Kerala"
            }, {
                'firstName': "Geethu",
                'lastName': "Juvana P B",
                'stateName': "Kerala"
            }, {
                'firstName': "Neethu",
                'lastName': "Elias  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Benoldcy",
                'lastName': "Chacko  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Nivedhidha",
                'lastName': "Sudhakaran  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Saranya",
                'lastName': "S Babu ",
                'stateName': "Kerala"
            }, {
                'firstName': "Devika",
                'lastName': "Venugopal  ",
                'stateName': "Kerala"
            }, {
                'firstName': "Aanchal",
                'lastName': "Singh  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Ashish",
                'lastName': "Makhija  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Madhuri",
                'lastName': "Bahwnani  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Vishakha",
                'lastName': "Kaigaonkar  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Praharsh",
                'lastName': "Dixit  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Tarandeep",
                'lastName': "Kour Hora ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Shubham",
                'lastName': "Kumar Jain ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Shashank",
                'lastName': "Vishwakarma  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "KRISHNA KUMAR ",
                'lastName': "VISWAKARMA",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "RAM MANOJ ",
                'lastName': "CHOURASIYA",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Resham",
                'lastName': " Agrawal ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Pritha",
                'lastName': "Mukherjee  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Surabhi",
                'lastName': "Purwar  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "ALLAUDHIN ",
                'lastName': "ANSARI",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "SHAMINUDDIN ",
                'lastName': "ANSARI",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "Ankita",
                'lastName': "Shrivastava  ",
                'stateName': "Madhya Pradesh"
            }, {
                'firstName': "RAMKUMAR ",
                'lastName': "SHARMA",
                'stateName': "Maharashtra"
            }, {
                'firstName': "MAHARAJ ",
                'lastName': "MAJHI ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "DINESH ",
                'lastName': "MAJHI ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Rakesh",
                'lastName': "Patil  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "DEVANDA ",
                'lastName': "GAIKWAD",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Premkumar",
                'lastName': "Singh  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Krysia",
                'lastName': "Sequeira  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Lakshmi",
                'lastName': "Swaminathan  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Krishnendu",
                'lastName': "Arun Ghosh ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Sairaj",
                'lastName': "Pantoji  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Nikita",
                'lastName': "Ahluwalia  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Jainesh",
                'lastName': "Shah  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Akshay",
                'lastName': "Jain  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Christopher",
                'lastName': "Fernandes  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Danesh",
                'lastName': "Qureshi  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Gaurav",
                'lastName': "Takle  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Mohammed",
                'lastName': "Naushad  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Vruthika",
                'lastName': "Ganesh Shettigar ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Vishal",
                'lastName': "Parmar  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Subisha",
                'lastName': "Karunakaran  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "BHUBANESHWAR ",
                'lastName': " MAJHI",
                'stateName': "Maharashtra"
            }, {
                'firstName': "TANKADHAR",
                'lastName': " MAJHI",
                'stateName': "Maharashtra"
            }, {
                'firstName': "RAIDHAR",
                'lastName': " NAYAK",
                'stateName': "Maharashtra"
            }, {
                'firstName': "TULASIRAM",
                'lastName': " MAJHI",
                'stateName': "Maharashtra"
            }, {
                'firstName': "S SIVA KUMAR ",
                'lastName': "SHARMA",
                'stateName': "Maharashtra"
            }, {
                'firstName': "HALDHEB  ",
                'lastName': "NAGESH",
                'stateName': "Maharashtra"
            }, {
                'firstName': "JUBARAJ ",
                'lastName': "TOLTIA",
                'stateName': "Maharashtra"
            }, {
                'firstName': "HALADHAR",
                'lastName': " MAJHI",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Darshana",
                'lastName': "Dileep Rawade ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Ravishankar",
                'lastName': "Vidyadhar Ram ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Himesh",
                'lastName': "Shrivastav  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Brinda",
                'lastName': "Iyer  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Gayatri",
                'lastName': "Nagasubramanian  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Ruchika",
                'lastName': "Mehta  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Kalpana",
                'lastName': "Mishra  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Varsha",
                'lastName': "Bawari  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Vishal",
                'lastName': "Dnyanoba Deshmukh ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Pratiksha",
                'lastName': "Tapkir  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "D VENKATESH",
                'lastName': " BHOSLE",
                'stateName': "Maharashtra"
            }, {
                'firstName': "SACHIN BALARAM ",
                'lastName': "BHOSLE",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Yogeshan",
                'lastName': "Chettiyar  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Shristi",
                'lastName': "Maurya  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Yogesh",
                'lastName': "Palav  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Sharma",
                'lastName': "Umesh Ghanshyam ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Avinash",
                'lastName': "Shetty  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Jitesh",
                'lastName': "Soni  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Shelke",
                'lastName': "Mahesh Sanjay ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Shriraman",
                'lastName': "Vijayaraghavan  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "Prasanna",
                'lastName': "Vaidya  ",
                'stateName': "Maharashtra"
            }, {
                'firstName': "KUMUD ",
                'lastName': "BIHARI",
                'stateName': "Orissa"
            }, {
                'firstName': "DHARAMLAL",
                'lastName': " DONGARI",
                'stateName': "Orissa"
            }, {
                'firstName': "TARUNSA ",
                'lastName': "BIHARI",
                'stateName': "Orissa"
            }, {
                'firstName': "BHAGWAN ",
                'lastName': "HARIJAN",
                'stateName': "Orissa"
            }, {
                'firstName': "TANKODHARA ",
                'lastName': "BIHARI",
                'stateName': "Orissa"
            }, {
                'firstName': "BASANTA",
                'lastName': " KUMAR SAHU",
                'stateName': "Orissa"
            }, {
                'firstName': "SANTOSH",
                'lastName': " KUMAR",
                'stateName': "Orissa"
            }, {
                'firstName': "Gayatree",
                'lastName': "Priyadarsini  ",
                'stateName': "Orissa"
            }, {
                'firstName': "TRINATH ",
                'lastName': "PRADHAN",
                'stateName': "Orissa"
            }, {
                'firstName': "HIMAN ",
                'lastName': "CHALKAR",
                'stateName': "Orissa"
            }, {
                'firstName': "PARKHIT",
                'lastName': "DUNDIKIA",
                'stateName': "Orissa"
            }, {
                'firstName': "DHANBAL",
                'lastName': "DALPATHI",
                'stateName': "Orissa"
            }, {
                'firstName': "CHANDRA",
                'lastName': "MANILAL",
                'stateName': "Orissa"
            }, {
                'firstName': "DHANBAL ",
                'lastName': "DALPATHI",
                'stateName': "Orissa"
            }, {
                'firstName': "CHANDRA ",
                'lastName': "MANILAL",
                'stateName': "Orissa"
            }, {
                'firstName': "LAKHINATH",
                'lastName': " MAJHI",
                'stateName': "Orissa"
            }, {
                'firstName': "HRUSI ",
                'lastName': "CHHATRIA",
                'stateName': "Orissa"
            }, {
                'firstName': "SIDHESWAR ",
                'lastName': "CHHATRIA",
                'stateName': "Orissa"
            }, {
                'firstName': "RAKESH",
                'lastName': " CHALAN",
                'stateName': "Orissa"
            }, {
                'firstName': "KAILASH",
                'lastName': " DURGA",
                'stateName': "Orissa"
            }, {
                'firstName': "SATHAYANDA ",
                'lastName': "RATHUR",
                'stateName': "Orissa"
            }, {
                'firstName': "PARKHIT",
                'lastName': "DUNDIKIA",
                'stateName': "Orissa"
            }, {
                'firstName': "RAKESH",
                'lastName': "CHALAN",
                'stateName': "Orissa"
            }, {
                'firstName': "NALINI",
                'lastName': " KANTA NAYAK",
                'stateName': "Orissa"
            }, {
                'firstName': "K DURGA ",
                'lastName': " PRASAD",
                'stateName': "Orissa"
            }, {
                'firstName': "Swapna",
                'lastName': "Rani Behera ",
                'stateName': "Orissa"
            }, {
                'firstName': "Kalyani",
                'lastName': "Madhav Das ",
                'stateName': "Orissa"
            }, {
                'firstName': "BATHULA",
                'lastName': " SURESH",
                'stateName': "Puducherry"
            }, {
                'firstName': "Karneet",
                'lastName': "Kaur  ",
                'stateName': "Punjab"
            }, {
                'firstName': "Pallavi",
                'lastName': "Chopra  ",
                'stateName': "Punjab"
            }, {
                'firstName': "Ankush",
                'lastName': "Bhan  ",
                'stateName': "Punjab"
            }, {
                'firstName': "HARIKRISHA",
                'lastName': "BIRAGI",
                'stateName': "Punjab"
            }, {
                'firstName': "Barkha",
                'lastName': "Maurya  ",
                'stateName': "Punjab"
            }, {
                'firstName': "Kavitha",
                'lastName': "Sekar  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "G.Pradeep",
                'lastName': "Kumar  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Vijaya",
                'lastName': "Sri V C",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Mohammed",
                'lastName': "Javid Rahman ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Sachin",
                'lastName': "Ranka  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Vivekanandan",
                'lastName': "Natarajan  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "T.R.S.Anjani",
                'lastName': "Usha  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Geetha",
                'lastName': "Chandramouli",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Priyadarsini",
                'lastName': "Balraj  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "SATYANARAYAN",
                'lastName': "MURTHY",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Suriya",
                'lastName': "Devi.M  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "JITENDRA KUMAR",
                'lastName': "VAISHNAV",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "ROHIT KUMAR",
                'lastName': "MARKAM",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "BHUPENDRA KU",
                'lastName': "GOSWAMY",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Kaleem",
                'lastName': "Ahamed  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Mr Venkatraman",
                'lastName': "Ramamoorthi",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Ranjith",
                'lastName': "Kumar  ",
                'stateName': "Tamil Nadu"
            }, {
                'firstName': "Kanika",
                'lastName': "Jain  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Hitkarsh",
                'lastName': "Khanna  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Shelly",
                'lastName': "Khanna  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Purnima",
                'lastName': "Jain  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Armaan",
                'lastName': "Kohli  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Madhur",
                'lastName': "Jaiswal  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Lavnish",
                'lastName': "Sharma  ",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "ASHOK BEDIYA",
                'lastName': " BEDIYA",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "DHANATH ",
                'lastName': "BEDIYA",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "KRISHNA BEDIYA",
                'lastName': " BEDIYA",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "GANGA ",
                'lastName': "PRASAD",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "DHANU ",
                'lastName': "BHUHIA",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "DEWALA",
                'lastName': "DEWALA",
                'stateName': "Uttar Pradesh"
            }, {
                'firstName': "Bhuvan",
                'lastName': "Dutta  ",
                'stateName': "Uttarakhand"
            }, {
                'firstName': "Shailesh",
                'lastName': "Bohra  ",
                'stateName': "Uttarakhand"
            }, {
                'firstName': "Nikhil",
                'lastName': "Nautiyal  ",
                'stateName': "Uttarakhand"
            }, {
                'firstName': "Bikash",
                'lastName': "Agarwal  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Nandini",
                'lastName': "Ghosh  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Abhishek",
                'lastName': "Tiwari  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Pinaki",
                'lastName': "Ghosh  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Kumardip",
                'lastName': "Mukherjee  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Arindam",
                'lastName': "Adhikari  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Subhradip",
                'lastName': "Saha  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Souptik",
                'lastName': "Bhattacharjee  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Amrita",
                'lastName': "Paul  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Indrajit",
                'lastName': "Paul  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Kaushik",
                'lastName': "Banerjee  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Ipsita",
                'lastName': "Pathak  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Sourav",
                'lastName': "Saha  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Pranay",
                'lastName': "Kumar Dhara ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Tanaya",
                'lastName': "Mukhopadhyay  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Suvojit",
                'lastName': "Saha  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Neelakshi",
                'lastName': "Chatterjee  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Shebika",
                'lastName': "Nath  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Chandan",
                'lastName': "Ghosh  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Anusree",
                'lastName': "Chowdhury  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Suranja",
                'lastName': "Barat  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Oindrila",
                'lastName': "Roychowdhury  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Priyanka",
                'lastName': "Sarkar  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Saikat",
                'lastName': "Ghosh  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Shubhajit",
                'lastName': "Saha  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "SOFIQUL",
                'lastName': " ISLAM",
                'stateName': "West Bengal"
            }, {
                'firstName': "SOHIDUL",
                'lastName': " ISLAM",
                'stateName': "West Bengal"
            }, {
                'firstName': "ABUTAHIR",
                'lastName': " ANSARI",
                'stateName': "West Bengal"
            }, {
                'firstName': "ROBILAL",
                'lastName': "HEMBROM",
                'stateName': "West Bengal"
            }, {
                'firstName': "BADYAKAR ",
                'lastName': "KARTIK",
                'stateName': "West Bengal"
            }, {
                'firstName': "APURBA",
                'lastName': " BHANDARI",
                'stateName': "West Bengal"
            }, {
                'firstName': "NIROD ",
                'lastName': "BITTAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "TAPAS ",
                'lastName': "BADYAKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUBOBH",
                'lastName': " KAHAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "ADHIR ",
                'lastName': "BADYAKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "BALARAM",
                'lastName': " HAZRA",
                'stateName': "West Bengal"
            }, {
                'firstName': "LOKMAN",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "AGIGUL",
                'lastName': "MALLIAK",
                'stateName': "West Bengal"
            }, {
                'firstName': "LUTAFAN",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "AZAHAM",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "SADIKUL",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "AMANULLA",
                'lastName': "ANSARI",
                'stateName': "West Bengal"
            }, {
                'firstName': "SAIDUL",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "HOSEN ALI",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "IMAN ALI",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "FAMGULLA",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "JULFIKAR",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "NOOR NABI",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ARAFAT",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "OBIDUL",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "SAHADAT",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ALANIM",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "BADMUL",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ASHADUL",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "KASEM ALI",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "IDRISH",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ASHDUL",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "AMRITO",
                'lastName': "BISWAS",
                'stateName': "West Bengal"
            }, {
                'firstName': "RAHAMAN",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ASANUR",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "TAPASH",
                'lastName': "SATRA ",
                'stateName': "West Bengal"
            }, {
                'firstName': "FALGUNI",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "HAMIDUL",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "GAFFAR",
                'lastName': "RAHAMAN",
                'stateName': "West Bengal"
            }, {
                'firstName': "MIZANUM",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ANOWAR",
                'lastName': "BISWAS",
                'stateName': "West Bengal"
            }, {
                'firstName': "HASANUR",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "AHIDUL",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "BANCHA",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "PRODIP",
                'lastName': "MANDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "HAMIDUL",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUDHAMAY  ",
                'lastName': "KARMAKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUNIL ",
                'lastName': "MAJUNDAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "SENTU ",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ABDUL KEDAR ",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "ISMAIL ",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "SARIFUL",
                'lastName': "YONUSH",
                'stateName': "West Bengal"
            }, {
                'firstName': "SAMSUM",
                'lastName': "SAMSUM",
                'stateName': "West Bengal"
            }, {
                'firstName': "Debayan",
                'lastName': "Chandra  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "DABASIS ",
                'lastName': "TANTUBAI",
                'stateName': "West Bengal"
            }, {
                'firstName': "KANCHI ",
                'lastName': "MOLLICK",
                'stateName': "West Bengal"
            }, {
                'firstName': "SAHEB ",
                'lastName': "MOLLAYA",
                'stateName': "West Bengal"
            }, {
                'firstName': "SURAT  ",
                'lastName': "LASKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "SAHADEV ",
                'lastName': "HOYORA",
                'stateName': "West Bengal"
            }, {
                'firstName': "SWAPON ",
                'lastName': "HOYORA",
                'stateName': "West Bengal"
            }, {
                'firstName': "KALACHAN",
                'lastName': "D SHEIK",
                'stateName': "West Bengal"
            }, {
                'firstName': "LAKSHMI ",
                'lastName': "KANTHA JALI",
                'stateName': "West Bengal"
            }, {
                'firstName': "NIRMAI ",
                'lastName': "BUIDYA",
                'stateName': "West Bengal"
            }, {
                'firstName': "MAYIBUR ",
                'lastName': "LASKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "MOSTAFA ",
                'lastName': "LASKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "SAFIKUL ",
                'lastName': "LASKAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "MOSTAFA ",
                'lastName': "SARDAR",
                'stateName': "West Bengal"
            }, {
                'firstName': "Manideepa",
                'lastName': "Hazra  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Anusriya",
                'lastName': "Sarkar  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Arindom",
                'lastName': "Mukherjee  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "RAJENDER ",
                'lastName': "CHATTARJEE",
                'stateName': "West Bengal"
            }, {
                'firstName': "HIRALAL ",
                'lastName': "PASSOWAN",
                'stateName': "West Bengal"
            }, {
                'firstName': "SIKANDAR ",
                'lastName': "PASSOWAN",
                'stateName': "West Bengal"
            }, {
                'firstName': "KARTHIK ",
                'lastName': "KAIBARYA",
                'stateName': "West Bengal"
            }, {
                'firstName': "BISHWANATH ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "BIPIN ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "DEJAY ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "KASHINATH ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "KAMAL ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "MANIK ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "BIMAL ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "SANJAY ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "HARADHAN ",
                'lastName': "TANTUBAY",
                'stateName': "West Bengal"
            }, {
                'firstName': "MANTU ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "UTHPAL ",
                'lastName': "kAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "RAGHUNATH ",
                'lastName': "kAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "GANESH ",
                'lastName': "kAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "TAPAS ",
                'lastName': "kAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "KARTHIK ",
                'lastName': "kAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "GANESH ",
                'lastName': "KAIBARTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "KAIJAL ",
                'lastName': "KAIBARTAY",
                'stateName': "West Bengal"
            }, {
                'firstName': "ASTIK ",
                'lastName': "KAIBARTAY",
                'stateName': "West Bengal"
            }, {
                'firstName': "PANKAJ ",
                'lastName': "BANDAPADHAYE",
                'stateName': "West Bengal"
            }, {
                'firstName': "RAJESH ",
                'lastName': "MAHATO",
                'stateName': "West Bengal"
            }, {
                'firstName': "SANKAR ",
                'lastName': "MAHATO",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUDHIR ",
                'lastName': "KERKATA",
                'stateName': "West Bengal"
            }, {
                'firstName': "JEY PRAKASH ",
                'lastName': "PRASAD",
                'stateName': "West Bengal"
            }, {
                'firstName': "BHUPESH RAY",
                'lastName': "PRAMAMIK",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUKUMAR",
                'lastName': " MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "KHOKAN",
                'lastName': "GANGULI",
                'stateName': "West Bengal"
            }, {
                'firstName': "SWAPAN",
                'lastName': " MANNA",
                'stateName': "West Bengal"
            }, {
                'firstName': "MANIKRAY",
                'lastName': "PRAMAMIK",
                'stateName': "West Bengal"
            }, {
                'firstName': "SOUMITRA",
                'lastName': "PRAMAMIK",
                'stateName': "West Bengal"
            }, {
                'firstName': "RAJKUMAR",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "RANJESH",
                'lastName': "SHARMA",
                'stateName': "West Bengal"
            }, {
                'firstName': "MADHUMAY",
                'lastName': " MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "PRASHANT",
                'lastName': "BISWAS",
                'stateName': "West Bengal"
            }, {
                'firstName': "KRISHNA",
                'lastName': "SHARMA",
                'stateName': "West Bengal"
            }, {
                'firstName': "BUDHAN",
                'lastName': "MONDAL",
                'stateName': "West Bengal"
            }, {
                'firstName': "MRITYNJAY",
                'lastName': "BENERJEE",
                'stateName': "West Bengal"
            }, {
                'firstName': "MUKUNDAR",
                'lastName': "PASWAN",
                'stateName': "West Bengal"
            }, {
                'firstName': "BIKRAM",
                'lastName': "BHARMA",
                'stateName': "West Bengal"
            }, {
                'firstName': "GOWRHARI",
                'lastName': "SAMANTA",
                'stateName': "West Bengal"
            }, {
                'firstName': "RAJENDRA",
                'lastName': "MAHATO",
                'stateName': "West Bengal"
            }, {
                'firstName': "SADHU ",
                'lastName': " RABIDAS",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUJITH ",
                'lastName': "MAHATO",
                'stateName': "West Bengal"
            }, {
                'firstName': "KAILASH",
                'lastName': " MAHATO",
                'stateName': "West Bengal"
            }, {
                'firstName': "SUJAY ",
                'lastName': "BHUIYA",
                'stateName': "West Bengal"
            }, {
                'firstName': "MAHARU ",
                'lastName': "MAHATO",
                'stateName': "West Bengal"
            }, {
                'firstName': "HEMANTH ",
                'lastName': "KUMAR DAS",
                'stateName': "West Bengal"
            }, {
                'firstName': "ANUJ  ",
                'lastName': "KUMAR SHARMA",
                'stateName': "West Bengal"
            }, {
                'firstName': "Simranjit",
                'lastName': "Singh  ",
                'stateName': "West Bengal"
            }, {
                'firstName': "Subhojeet",
                'lastName': "Chatterjee  ",
                'stateName': "West Bengal"
            }]
        }

    });
