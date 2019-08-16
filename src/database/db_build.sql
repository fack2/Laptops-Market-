
BEGIN;
DROP TABLE IF EXISTS laptopsMarket CASCADE;

CREATE TABLE laptopsMarket (
    id serial PRIMARY KEY,
  img text Not Null,
  type varchar(100) NOT NULL,
  description  text NOT NULL,
  price numeric(15,3) NOT NULL  
);


INSERT INTO laptopsMarket (img, type, description,price) VALUES ('https://images-na.ssl-images-amazon.com/images/I/810R8jfOCqL._SX466_.jpg','Asus','Asus Chromebook C423NA, 14" HD Nano-Edge Display, Intel Processor, 4GB DDR4, 64GB eMMC, Chrome OS','199.00'),
('https://static.bhphoto.com/images/images2500x2500/1522713169_1398470.jpg','msi (Gaming Laptop)','MSI GT63 TITAN-047 15.6" Gaming Laptop Intel i7-8750H; NVIDIA GeForce GTX 1070 8G; 256GB SSD + 1TB HDD Storage; 16GB RAM + Free COD4 Black Ops','2592.66'),
('https://static.bhphoto.com/images/images2500x2500/1544462468_1423730.jpg','MacBook Pro 13.3','2.3 GHz Intel Core i5 Quad-Core, 8GB of 2133 MHz RAM | 512GB SSD, Touch Bar, macOS High Sierra','1916.99');





COMMIT;
