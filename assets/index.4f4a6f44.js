import{s as e,P as E}from"./index.0e385b8b.js";import"./index.28edc2b9.js";import"./index.d701c286.js";import"./index.11bc1ef2.js";var m=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,T={language:()=>e({dialect:E}),code:m};export{T as default};
