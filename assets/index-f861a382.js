import{s as e,P as n}from"./index-53b73ea6.js";import"./index-f05a85ab.js";import"./index-729aeab9.js";import"./index-b3ae71e7.js";const E=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,a={language:()=>e({dialect:n}),code:E};export{a as default};
