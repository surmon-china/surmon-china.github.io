import{s as e,P as E}from"./index.844426ba.js";import"./index.6278a361.js";import"./index.a5a57b00.js";import"./index.717501d3.js";var m=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,T={language:()=>e({dialect:E}),code:m};export{T as default};
