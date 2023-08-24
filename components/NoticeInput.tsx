import Styled, { keyframes } from "styled-components";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { render } from "react-dom";

interface NoticeProps {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  kind?: "text" | "title" | "categories" | "hashtag" | "content";
  [key: string]: any;
}

export default function NoticeInput({
  label,
  name,
  placeholder = "",
  type,
  required,
  kind = "text",
}: NoticeProps) {
  interface NoticeForm {
    title: string;
    categories: string;
    uploader: string;
    update: string;
    hashtag: string;
    content: string;
  }

  const onValid = async (validForm: NoticeForm) => {
    console.log(validForm);

    await fetch("/api/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noticeForm: validForm,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));

    return;
  };
  const { register, handleSubmit, setValue } = useForm<NoticeForm>();

  return (
    <DivOpenModalToPencil className="absolute -top-[250px] left-[350px] w-[30vw] h-[72.3vh] px-0 py-0 outline backdrop-blur-[5px] outline-[#0000ff6a] rounded-md bg-[#0000ff18]">
      <label htmlFor="clickPencil">{/* &times; */}</label>
      <input
        type="button"
        // onClick={clickPencil}
        id="clickPencil"
      />

      <FormOpenModalToPencil onSubmit={handleSubmit(onValid)}>
        <ul>
          <LiOpenModalToPencil className="-mt-[0.7em]">
            <h1 className="flex justify-center">
              <p className="text-[22px] ml-[2.5em] font-semibold">제목</p>

              <input
                {...register("title")}
                // onChange={onChangeNoticeTitle}

                id={name}
                type={type}
                required={required}
                placeholder={placeholder}
                className=" w-[24em] ml-[3.7em] px-[1em] tracking-[1px] text-center outline outline-[#0000ff6a] rounded-md"
              />
            </h1>
          </LiOpenModalToPencil>
          <LiOpenModalToPencil className="selectBox flex justify-center mt-[0.9em] ">
            <BgCategory className="rounded-md">
              <select
                {...register("categories")}
                // onChange={onChangeNoticeCategories}
                id="categories"
                name="categories"
                className="select w-[8em] pl-[0.7em] py-[0.2em] outline outline-[#0000ff6a] rounded-md bg-[#0000ff28]
                                  text-[18px] tracking-[2px] text-center font-semibold cursor-pointer
                                  hover:bg-[#c300ff32]"
              >
                <option
                  disabled
                  selected
                  value=""
                  className="absolute right-[2em]"
                >
                  분류
                </option>
                <option value="사내공지">사내공지</option>
                <option value="프로젝트">프로젝트</option>
                <option value="설치관련">설치관련</option>
                <option value="어플관련">어플관련</option>
                <option value="웹관련">웹관련</option>
              </select>
            </BgCategory>

            <span className="w-[10px]" />
            <input
              {...register("hashtag")}
              // onChange={onChangeNoticeHash}
              id="hashtag"
              name="hashtag"
              type={type}
              placeholder="#NAME"
              className="w-[24em] px-[1em] outline outline-[#0000ff6a] rounded-md"
            />
          </LiOpenModalToPencil>
          <LiOpenModalToPencil className="flex justify-center mt-[1em]">
            <TextareaAutosize
              // onChange={onChangeNoticeContent}
              {...register("content")}
              id="content"
              style={{
                boxSizing: "border-box",
                width: "28vw",
                resize: "none",
                height: 500,
              }}
              minRows={22.7}
              maxRows={22.7}
              placeholder="MEMO"
              className="outline outline-[#0000ff6a] rounded-md "
            />
          </LiOpenModalToPencil>
          <li className="flex justify-end">
            <input
              type="submit"
              value="등록"
              className="px-[1em] py-[0.2em] mt-[10px] mr-[1.3em] outline outline-[#0000ff6a] rounded-md font-semibold text-[#000000]
                                bg-[#0000ff28] hover:bg-[#0000ff5a] active:bg-[#0000ff7a] hover:outline-[#0000ff90] active:outline-[#0000ffa5]
                                hover:text-[white] active:text-black"
              // onClick={onClickNoticeAdd}
            />
          </li>
        </ul>
      </FormOpenModalToPencil>
    </DivOpenModalToPencil>
  );
}

const colorChange = keyframes`
  100% {
     background-color:#0000ff85;
     color:#000000
    }
    
    50% {
      background-color:#0000ff28;
      color:#9a9a9a80
    }
    0%{
      background-color:#0000ff85;
      color:#000000
    }

`;

const BgCategory = Styled.div`{
  animation-name: Select;
  animation:${colorChange} 1.2s linear infinite;

}`;

// Div modal
const DivmodalToPencil = keyframes`
  100%{
  }
  50%{
  }
  0% {
    padding-bottom: 00px;
    margin-bottom: 00px;
    width: 00px;
    height:00px;
  }
`;

const DivOpenModalToPencil = Styled.div`{
    animation-name: DivOpenModalToPencil;
    animation:${DivmodalToPencil} 0.5s;
    position: absolute;
    
  }`;

//  Form Modal

const FormModalToPencil = keyframes`
100%{
}
50%{
}
0% {
  margin-bottom: 300px;
  padding-left: 600px;
  
}
`;

const FormOpenModalToPencil = Styled.form`{
    animation-name: FormOpenModalToPencil;
    animation:${FormModalToPencil} 0.5s;
  }`;

// Li Modal

const LiModalToPencil = keyframes`
  100% {
    width: 580px;
    height: -200px;
  }

  0% {
    height: 0px;
    width: 580px;
  }
`;

const LiOpenModalToPencil = Styled.li`{
    animation-name: LiOpenModalToPencil;
    animation:${LiModalToPencil} 0.5s;
  }`;
