// id,password true,false setting
// login button design

import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import Input from "@components/Input";
import useMutation from "@libs/client/useMutation";
import { signIn } from "next-auth/react";

interface EnterForm {
  email?: string;
  password: string;
  formErrors?: string;
}

interface MutationResult {
  ok: boolean;
  msg: string;
  error: string;
}

function LoginAccordion() {
  const router = useRouter();
  const [enter, { loading, data: loginData, error: loginError }] =
    useMutation<MutationResult>("/api/users/enter");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<EnterForm>();

  useEffect(() => {
    if (loginData && !loginData.ok && loginData.error) {
      setError("formErrors", { message: loginData.error });
    }

    if (loginData?.ok) {
      router.push("/");
    }
  }, [loginData, setError, router]);

  console.log(loginData);

  const onValid = async (validForm: EnterForm) => {
    enter(validForm);
    const result = await signIn("credentials", {
      redirect: false,
      email: validForm?.email,
      password: validForm?.password,
    });
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col mt-8" onSubmit={handleSubmit(onValid)}>
        <span>
          <IdInput>
            <Input
              register={register("email")}
              name="email"
              label="email"
              type="email"
              required
              placeholder="Enter ID"
            />
          </IdInput>
        </span>

        <PsInput>
          <Input
            register={register("password")}
            name="password"
            label="password"
            type="password"
            kind="password"
            placeholder="Enter password"
            required
          />
        </PsInput>

        {errors.formErrors ? (
          <span className="my-4 text-[#ff1500eb] block font-meidum text-center text-base">
            {errors.formErrors?.message}
          </span>
        ) : null}

        <div className="flex justify-center">
          <OkButton>
            <button
              type="submit"
              className="text-[1.5rem] text-[#90a0de] hover:text-[#ffffff1e]"
              onClick={() => clearErrors()}
            >
              확인
            </button>
          </OkButton>
        </div>
      </form>
    </div>
  );
}

export default LoginAccordion;

const IdInput = styled.div`
  animation-duration: 1s;
  animation-name: Idinput;

  @keyframes Idinput {
    from {
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
  }
`;
const PsInput = styled.div`
  animation-duration: 2s;
  animation-name: PsInput;

  @keyframes PsInput {
    from {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
  }
`;

const OkButton = styled.div`
  animation-duration: 3s;
  animation-name: OkButton;

  @keyframes OkButton {
    from {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
  }
`;
