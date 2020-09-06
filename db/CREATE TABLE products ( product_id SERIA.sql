CREATE TABLE products ( product_id SERIAL PRIMARY KEY, name VARCHAR(200), price NUMERIC, image VARCHAR(700) );

INSERT INTO products ( product_id, name, price, image ) VALUES ( 1, 'fries', 100, 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_661.png&imgrefurl=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F661&tbnid=DYUX2uq9ix96_M&vet=12ahUKEwjEtu2CwtXrAhUNA50JHSKJAJEQMygRegUIARDEAQ..i&docid=q-FxhcIapHK9DM&w=858&h=981&q=empty%20image%20png&ved=2ahUKEwjEtu2CwtXrAhUNA50JHSKJAJEQMygRegUIARDEAQ' );

INSERT INTO products ( product_id, name, price, image ) VALUES ( 2, 'burger', 300, 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_661.png&imgrefurl=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F661&tbnid=DYUX2uq9ix96_M&vet=12ahUKEwjEtu2CwtXrAhUNA50JHSKJAJEQMygRegUIARDEAQ..i&docid=q-FxhcIapHK9DM&w=858&h=981&q=empty%20image%20png&ved=2ahUKEwjEtu2CwtXrAhUNA50JHSKJAJEQMygRegUIARDEAQ' );
