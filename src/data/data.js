const data = [
    {
        name: 'Mercedes-Benz C-Class 2015',
        price: 35000,
        description: `The 2015 C-Class is a good used luxury compact car, but be conscious of its reliability rating. It has confident performance, one of the ritziest cabins in the class, and excellent safety scores. If you're looking for sporty handling, though, you're probably better off with a rival.`,
        mileage: 12000,
        transmission: 'Automatic',
        mpg: '18/26',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Nissan Altima 2019',
        price: 25000,
        description: `The 2019 Nissan Altima ranks in the top half of the midsize car class. It gets great gas mileage, provides a well-mannered ride, and has a spacious, comfortable cabin. However, the Altima struggles to match the luxury and agility of higher-ranked rivals.`,
        mileage: 18000,
        transmission: 'Automatic',
        mpg: '25/36',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Tesla Roadster 2021',
        price: 121000,
        description: `The original Tesla Roadster put the all-electric automaker on the map, even if most Model S and Model X buyers don't remember it. Originally slated to make its return in 2021, the new model hasn't yet hit the market, leading us to believe it's been delayed`,
        mileage: 15000,
        transmission: 'Automatic',
        mpg: '20/23',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Lexus RX-350 2021',
        price: 27000,
        description: `The Lexus RX isn't the flashiest or most fun-to-drive vehicle in the class, but it is a good SUV. Most of its positives are hallmarks of other good Lexus vehicles: Great predicted reliability and safety scores, outstanding overall quality, and a long list of standard and optional infotainment features and active safety tech`,
        mileage: 2000,
        transmission: 'Automatic',
        mpg: '12/13',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Honda Accord 2021',
        price: 24000,
        description: `Although SUVs and crossovers are the people haulers these days, we think those folks are missing out by not considering the superb 2022 Honda Accord sedan. The Accord can do most things your average compact crossover can do, and its spry handling will give its driver more of a thrill should they encounter a twisty road.`,
        mileage: 100,
        transmission: 'Manual',
        mpg: '25/30',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Chevrolet Suburban 2021',
        price: 35000,
        description: `The 2022 Chevy Suburban has enough room to haul all eight members of the Brady Bunch in comfort. We didn't catch the episode where Mike Brady pulls an 8300-pound trailer, but Chevy's largest three-row ute—the Tahoe (reviewed separately) is the second largest—is up to the task. The Suburban's trio of engines is another highlight, particularly the 420-hp V-8 and torque-rich diesel six-cylinder.`,
        mileage: 35,
        transmission: 'Automatic',
        mpg: '22/32',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'BMW M440i 2021',
        price: 76000,
        description: `Although it shares much of its interior and chassis with the 3-series sedan, the 2022 BMW 4-series's rakish two-door roofline and snout-like front grille give it a distinctive, if controversial, look. Offered as either a hardtop coupe or a soft-top convertible, the 4-series competes with other German luxury cars such as the Audi A5 and the Mercedes-Benz C-class.`,
        mileage: 20,
        transmission: 'Automatic',
        mpg: '20/30',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Acura ILX 2021',
        price: 27000,
        description: `If the thought of parking a Honda Civic in your driveway is just too low-brow for you, consider its country club-raised cousin—the ILX—which wears the Acura badge on its trapezoidal grille. Under the hood of every ILX is a 2.4-liter four-cylinder that drives the front wheels through an eight-speed automatic transmission.`,
        mileage: 3000,
        transmission: 'Manual',
        mpg: '18/28',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Bentley Bentayga 2020',
        price: 315000,
        description: `Premium SUVs from BMW, Lincoln, Cadillac, and Mercedes-Benz offer plenty of comfort and convenience, but don't serve up luxury like the 2022 Bentley Bentayga. With either a V-8 or W-12 engine under the hood the Bentayga has the muscle for sustained high-speed cross-country touring. And behind its rear seat is a cargo hold with enough square footage for a high-speed shopping spree.`,
        mileage: 20,
        transmission: 'Automatic',
        mpg: '25/30',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },  {
        name: 'Toyota Avalon 1990',
        price: 65000,
        description: `The 2022 Toyota Avalon is a terrific full-size sedan. It impresses with its roomy and upscale interior, comfortable seats, user-friendly infotainment system, and wealth of standard safety features. The Avalon accelerates swiftly and delivers a supple ride, and its V6 engine nets great gas mileage. It's an enjoyable car to drive day in and day out.`,
        mileage: 18000,
        transmission: 'Automatic',
        mpg: '20/30',
        img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },
]