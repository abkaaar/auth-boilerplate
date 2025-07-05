"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


import { CardWrapper } from "./card-wrapper";
import { DotLoader } from "react-spinners"

import { newVerification } from "@/actions/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";


export const NewVerificationForm = () => {
    const [ error, setError] = useState<string | undefined>();
    const [ success, setSuccess] = useState<string | undefined>();
    
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        
        if(!token) {
            setError("Missing token!");
            return;
        };


        newVerification(token)
        .then((data) => {
            setSuccess(data.success);
            setError(data.error);
        })
        .catch(() =>{
            setError("something went wrong!")
        })
    }, [token]);

    useEffect(() =>{
        onSubmit();
    }, [onSubmit]);


    return(
        
            <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
            >
                <div className="flex gap-4 flex-col items-center w-full justify-center">
                { !success && !error && (
                <DotLoader />
                )}
                <FormSuccess message={success} />
                <FormError message={error} />
                </div>

            </CardWrapper>
        
    );

}