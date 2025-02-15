import React, { useState } from "react";
import { signUp } from "@api/authService";
import {
  isEmptyString,
  isLengthBetween,
  isEmail,
  isPassword,
  isNickname,
  isName,
} from "@utils/stringValidations.ts";
import useForm from "@hooks/useForm.ts";
import Button from "@components/Button.tsx";
import Checkbox from "@components/Checkbox.tsx";
import DatePicker from "./DatePicker.tsx";
import LoginLabel from "@components/LoginLabel.tsx";
import LoginTextInput from "@components/LoginTextInput.tsx";

import type { FieldInfos, FieldValue } from "src/types/LoginTypes";

const fieldInfos: FieldInfos = {
  email: {
    initialValue: "",
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== "string") return "비정상적인 입력입니다";
      if (isEmptyString(newValue)) return "이메일을 입력해주세요";
      if (!isEmail(newValue)) return "이메일 형식이 아닙니다";
      if (!isLengthBetween(newValue, 6, 50))
        return "이메일은 6자 이상 50자 이하여야 합니다";
      return "";
    },
  },
  nickname: {
    initialValue: "",
    isRequired: false,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== "string") return "비정상적인 입력입니다";
      if (isEmptyString(newValue)) return "닉네임을 입력해주세요";
      if (!isNickname(newValue)) return "닉네임 형식이 아닙니다";
      if (!isLengthBetween(newValue, /[가-힣]/.test(newValue) ? 2 : 4, 10))
        return "닉네임은 2자 이상 10자 이하여야 합니다";
      return "";
    },
  },
  name: {
    initialValue: "",
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== "string") return "비정상적인 입력입니다";
      if (isEmptyString(newValue)) return "이름을 입력해주세요";
      if (!isName(newValue)) return "이름 형식이 아닙니다";
      if (!isLengthBetween(newValue, 2, 20))
        return "이름은 2자 이상 20자 이하여야 합니다";
      return "";
    },
  },
  password: {
    initialValue: "",
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== "string") return "비정상적인 입력입니다";
      if (isEmptyString(newValue)) return "비밀번호를 입력해주세요";
      if (!isPassword(newValue)) return "비밀번호 형식이 아닙니다";
      if (!isLengthBetween(newValue, 6, 22))
        return "비밀번호는 6자 이상 22자 이하여야 합니다";
      return "";
    },
  },
};

export default function SignupForm() {

  const [loading, setLoading] = useState(false);const { values, errors, isRequired, changeFieldValue } = useForm(
      fieldInfos,
      (formValues) => {
        console.log(formValues);
      }
  );
  const [errorMessage, setErrorMessage] = useState("");

  const [birthdate, setBirthdate] = useState<{ year: number | ""; month: number | ""; day: number | "" }>({
    year: "",
    month: "",
    day: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const userData = {
        email: values.email as string,
        password: values.password as string,
        nickname: values.nickname as string,
        name: values.name as string,
        birthdate: `${birthdate.year}-${birthdate.month}-${birthdate.day}`
      };

      await signUp(userData);
      alert("회원가입 성공! 로그인 해주세요.");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <LoginTextInput
            error={errors.email}
            isRequired={isRequired.email}
            name="email"
            onChange={(e) => changeFieldValue(e.target.value, "email")}
            title="이메일"
            type="email"
            value={values.email as string}
        />
        <LoginTextInput
            error={errors.name}
            isRequired={isRequired.name}
            name="name"
            onChange={(e) => changeFieldValue(e.target.value, "name")}
            title="이름"
            type="text"
            value={values.name as string}
        />
        <LoginTextInput
            error={errors.nickname}
            isRequired={isRequired.nickname}
            name="nickname"
            onChange={(e) => changeFieldValue(e.target.value, "nickname")}
            title="닉네임"
            type="text"
            value={values.nickname as string}
        />
        <LoginTextInput
            error={errors.password}
            isRequired={isRequired.password}
            name="password"
            onChange={(e) => changeFieldValue(e.target.value, "password")}
            title="비밀번호"
            type="password"
            value={values.password as string}
        />
        <LoginLabel title="생년월일">
          <DatePicker   onChange={setBirthdate}/>
        </LoginLabel>
        <label className="mt-3 flex items-center">
          <Checkbox
              style="flex w-6 h-6 p-[3px] rounded-[6px] border-[1px] bg-transparent border-gray-400 hover:outline-none"
            />
          <input name="isAgreed" type="hidden" value="false" />
          <div className="w-[364px] pl-2 text-[#949BA4] text-sm text-left">
            (선택사항) Discord 소식, 도움말, 특별 할인을 이메일로 보내주세요.
            언제든지 취소하실 수 있어요.
          </div>
        </label>
        {errorMessage ? <p className="text-red-500 mt-3">{errorMessage}</p> : null}
        <Button
            disabled={loading}
            style="mt-5 p-[10px] w-full h-11 justify-center items-center rounded-[3px] bg-indigo-500"
            type="submit">
          {loading ? "가입 중..." : "계속하기"}
        </Button>
      </form>
  );
}