import{s as e,P as n}from"./index-06347cd7.js";import"./index-580114bb.js";import"./index-4413b224.js";import"./index-f3e20788.js";const E=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,a={language:()=>e({dialect:n}),code:E};export{a as default};
