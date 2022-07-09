import{s as e,P as E}from"./index.63f8346c.js";import"./index.4b2436cb.js";import"./index.5bbbf6dc.js";var n=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,o={language:()=>e({dialect:E}),code:n};export{o as default};
