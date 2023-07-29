import{s as e,P as n}from"./index-546f6d74.js";import"./index-21e2bb9e.js";import"./index-0b457df1.js";import"./index-ceccad12.js";const E=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,a={language:()=>e({dialect:n}),code:E};export{a as default};
