import { ChangeEvent, useState } from "react";


export const useForm = <T extends object>(initialState: T)  => {
    const [form, setForm] = useState(initialState);
    
    const handleChanges = ({ target }: ChangeEvent<HTMLInputElement>) => {
        // console.log('name', e.target.name);
        // console.log('value', e.target.value);
        
        const {name, value} = target;
        
        setForm({
            ...initialState,
            [ name ]: value
        });
    }
    
    return {
        form,
        ...form,
        handleChanges
    }
}
