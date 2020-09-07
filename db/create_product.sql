INSERT INTO products ( product_id, name, price, image ) VALUES ( nextval('products_product_id_seq'), $1, $2, $3) RETURNING product_id, name, price, image;
