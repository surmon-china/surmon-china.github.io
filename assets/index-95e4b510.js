import{s as L,M as e}from"./index-0f4fe9d3.js";import"./index-0413a79e.js";import"./index-e9ad3e5c.js";import"./index-63b7b75f.js";const E=`CREATE TABLE shop (
    article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
    dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
    price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
    PRIMARY KEY(article, dealer));
INSERT INTO shop VALUES
    (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
    (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);`,t={language:()=>L({dialect:e}),code:E};export{t as default};
