import{s as L,M as a}from"./index.63cc4667.js";import"./index.1db8b68e.js";import"./index.622b7b4f.js";import"./index.eda91fbe.js";var e=`CREATE TABLE shop (
    article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
    dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
    price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
    PRIMARY KEY(article, dealer));
INSERT INTO shop VALUES
    (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
    (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);`,A={language:()=>L({dialect:a}),code:e};export{A as default};
