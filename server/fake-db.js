const Item = require('./model/item');

class FakeDB {
  constructor() {
    this.items = [
      {
        coverImg: "./assets/img/phone-cover.jpg",
        name: "iPhone",
        price: 48000,
        description: "description iPhone",
        heading: {
          title1: "Sumple title1",
          title2: "Sumple title2",
          title3: "Sumple title3",
          text1: "Sumple Text1",
          text2: "Sumple Text2",
          text3: "Sumple Text3 Sumple Text3 Sumple Text3"
        }
      },
      {
        coverImg: "./assets/img/phone-cover.jpg",
        name: "iMac",
        price: 88000,
        description: "description",
        heading: {
          title1: "Sumple title1",
          title2: "Sumple title2",
          title3: "Sumple title3",
          text1: "Sumple Text1",
          text2: "Sumple Text2",
          text3: "Sumple Text3 Sumple Text3 Sumple Text3"
        }
      },
      {
        coverImg: "./assets/img/phone-cover.jpg",
        name: "MacBookPro",
        price: 148000,
        description: "description MacBookPro",
        heading: {
          title1: "Sumple title1",
          title2: "Sumple title2",
          title3: "Sumple title3",
          text1: "Sumple Text1",
          text2: "Sumple Text2",
          text3: "Sumple Text3 Sumple Text3 Sumple Text3"
        }
      },
      {
        coverImg: "./assets/img/phone-cover.jpg",
        name: "iPod",
        price: 28000,
        description: "description iPad",
        heading: {
          title1: "Sumple title1",
          title2: "Sumple title2",
          title3: "Sumple title3",
          text1: "Sumple Text1",
          text2: "Sumple Text2",
          text3: "Sumple Text3 Sumple Text3 Sumple Text3"
        }
      }
    ];
  }

  initDB() {
    this.creanDB();
    this.pushItemsToDb();
  }
  
  async creanDB() {
    await Item.deleteMany({});
  }

  pushItemsToDb() {
      this.items.forEach(
          (item) => {
              const newItem = new Item(item);
              newItem.save();
          }
      )
  }

  seeDb() {
      this.pushItemsToDb();
  }
}

module.exports = FakeDB;