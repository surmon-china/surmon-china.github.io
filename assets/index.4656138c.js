import{s as e,P as E}from"./index.63cc4667.js";import"./index.1db8b68e.js";import"./index.622b7b4f.js";import"./index.eda91fbe.js";var m=`BEGIN
    SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
            RAISE EXCEPTION 'employee % not unique', myname;
END;`,T={language:()=>e({dialect:E}),code:m};export{T as default};
