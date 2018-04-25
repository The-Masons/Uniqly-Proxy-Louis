let faker = require('faker');
let fs = require('fs');

let sizeArray = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
let heightArray = ['Under 4\'8', '4\'10', '5\'0', '5\'2', '5\'4', '5\'6', '5\'8', '5\'10', '6\'0', '6\'2', 'Over 6\'2'];
let ageArray = ['17 or under', '18 to 24', '25 to 34', '35 to 44,', '45 to 54', '55 to 64', '65 or over'];
let genderArray = ['M', 'F'];

let data = [];
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < Math.floor(Math.random() * 5) + 3; j++) {

        let pickAge = Math.floor(Math.random() * ageArray.length);
        let pickHeight = Math.floor(Math.random() * heightArray.length);
        let pickSize = Math.floor(Math.random() * sizeArray.length);
        let pickGender = Math.floor(Math.random() * genderArray.length);
        let chestSize = Math.floor(Math.random() * (52 - 30 + 1)) + 30;
        let waistSize = Math.floor(Math.random() * (35 - 28 + 1)) + 28;
        let hipsSize = Math.floor(Math.random() * (35 - 28 + 1)) + 28;
        let fitRating = Math.floor(Math.random() * 5) + 1;
        let starRating = Math.floor(Math.random() * 5) + 1;
        let lengthRating = Math.floor(Math.random() * 5) + 1;
        let qualityRating = Math.floor(Math.random() * 5) + 1;
        let helpfulRating = Math.floor(Math.random() * 15);

        data.push({
            product_id: i,
            nickname: faker.name.firstName(),
            from: faker.fake("{{address.city}}, {{address.state}}"),
            size_purchased: sizeArray[pickSize],
            age: ageArray[pickAge],
            gender: genderArray[pickGender],
            received_free_product: faker.random.boolean(),
            chest_size: chestSize,
            waist_size: waistSize,
            height: heightArray[pickHeight],
            hips_size: hipsSize,
            product_fit: fitRating,
            product_length: lengthRating,
            product_quality: qualityRating,
            date: faker.date.past(),
            rating: starRating,
            review_title: faker.lorem.words(),
            review_body: faker.lorem.sentences(),
            recommended: faker.random.boolean(),
            helpful: helpfulRating,
            from_uk: faker.random.boolean(),
            verified_purchaser: faker.random.boolean(),
            employee: faker.random.boolean()
        });
    }
}
data.forEach((item) => {
    fs.appendFile('data.txt', JSON.stringify(item) + ',', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});