import{s as e,P as E}from"./index.61fccd5f.js";import"./index.9eb802f9.js";import"./index.40b14885.js";import"./index.5b56f70f.js";var m=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,T={language:()=>e({dialect:E}),code:m};export{T as default};
