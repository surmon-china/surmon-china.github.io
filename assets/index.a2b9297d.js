import{s as e,P as n}from"./index.8c6efb3f.js";import"./index.05ddf99b.js";import"./index.be30e6bd.js";import"./index.f15c000d.js";const E=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,a={language:()=>e({dialect:n}),code:E};export{a as default};
