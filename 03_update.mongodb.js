use('ecommerce');

// db.products.updateOne({name:"Wireless Mouse"},
//     {$set:{price:1000}}
// );

// db.products.updateOne({name:"Mechanical Keyboard"},
//     {$set:{ratings:6.2}}
// )

// db.products.updateMany({category:"Electronics"},
// {$inc:{stock:11}}
// )
db.products.updateOne({
name:"Mechanical Keyboard"},
{$push:{tags:"mouse"}})