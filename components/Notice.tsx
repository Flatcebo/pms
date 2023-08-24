// modal 작업 하기
// modal이 다른 div 라서 닫아지는것 일수도 있음
// wheel picker 사용해보기
// 공지 아이콘 리스트 border-t 색 바꾸기, background color change

// 공지사항 리스트 헤더 작업하기
// 공지사항 폼 데이터 보내기

// setValue로 데이터 없애기 성공 기능만 성공.

import PageLayout from "@components/PageLayout";
import React, { useState, useCallback, useEffect } from "react";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
import { BsFillPencilFill, BsCaretDown } from "react-icons/bs";
import { FaPlus, FaFish } from "react-icons/fa";
import Popup from "reactjs-popup";
import Styled, { keyframes } from "styled-components";
import NoticeInput from "@components/NoticeInput";

const Notice = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("");
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>로딩중 ...</div>;
  // }

  return (
    <div className="">
      <PageLayout />
      <div>
        {/* 전체 레이아웃 */}
        <div className="absolute w-[84vw] h-[80.8vh] left-[16em] top-[10.5em]">
          {/* 공지사항 헤더 */}
          <div className="w-[86vw] h-[5.1vh] mt-[1em]">
            <h1 className="text-center text-[#2c28b5] text-[2em] font-semibold tracking-[0.2em]">
              공 지 사 항
            </h1>
            <div className="absolute top-[1.5em] left-[3.5em]">
              <form>
                <input
                  name="search"
                  id="search"
                  type="search"
                  placeholder=""
                  className="py-[0.5em] pl-[3em] pr-[2em] w-[16em] rounded-md text-center bg-[#ffffffef] mt-[3px] hover:bg-[#ffffff88] focus:bg-[#ffffffef]"
                />
              </form>
              <div className="absolute top-[7px] text-[2em]">
                <AiOutlineSearch className="text-[#0000ff6a]" />
              </div>
            </div>
            {/* 검색창,글쓰기 */}
            <h2 className="absolute top-[0em] -right-[3em] w-[20vw] h-[5.2vh] mt-[1em] grid content-center">
              <ul className="flex justify-evenly">
                <li className=""></li>
                <li></li>
                <li className="text-[1.7em] mt-[6px]">
                  <Popup
                    trigger={
                      <button className="">
                        <BsFillPencilFill
                          className="text-[#2c28b5] hover:text-[#2d28b558] active:text-[#314bdd3e]"
                          // onClick={clickPencil}
                        />
                      </button>
                    }
                    modal
                  >
                    {/* {clickPencils ? ( */}
                    <div className="relative">
                      <NoticeInput
                        name="title"
                        type="title"
                        placeholder="TITLE"
                        required
                      />
                    </div>
                    {/* ) : undefined} */}
                  </Popup>
                </li>
              </ul>
            </h2>
            {/* 공지사항 리스트 */}
            <div className="mt-[2em] ml-[3.5em] w-[80vw] h-[68vh] bg-[#ffffffef] rounded-2xl">
              <div className="flex h-[65vh] text-center text-[20px]">
                <div className="absoulte top-0 w-[77em] h-[2.5em] bg-[#0000ff27] rounded-2xl">
                  <ul className="flex space-x-[30px] py-[0.6em] pl-[0.3em] text-[20px] font-bold text-[#0000ffb3]">
                    <h3 className="w-[10%] ">분류</h3>
                    <h3 className="w-[62%] pl-[0.4em]">게시글</h3>
                    <h3 className="w-[13%] pl-[1em]">게시자</h3>
                    <h3 className="w-[15%] pr-[1em]">게시일</h3>
                  </ul>
                  <div className="flex h-[62.5vh] overflow-y-scroll scrollbar-hide ">
                    <ul className="w-[10%]">
                      <div>{/* {NoticeCategories} */}</div>
                    </ul>
                    <ul className="w-[62%] outline outline-[2px] outline-[#0000002d]">
                      <div>
                        {/* {NoticeTitle}
                        {NoticeContent} */}
                      </div>
                    </ul>
                    <ul className="w-[13%]">
                      <div>{/* {NoticeUploader} */}</div>
                    </ul>
                    <ul className="w-[15%] outline outline-[2px] outline-[#0000002d]">
                      <div>{/* {NoticeUpdate} */}</div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Organization /> */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Notice);

// // modal 작업 하기
// // modal이 다른 div 라서 닫아지는것 일수도 있음
// // wheel picker 사용해보기
// // 공지 아이콘 리스트 border-t 색 바꾸기, background color change

// // 공지사항 리스트 헤더 작업하기
// // 공지사항 폼 데이터 보내기

// // setValue로 데이터 없애기 성공 기능만 성공.

// import PageLayout from "@components/PageLayout";
// import React, { useState, useCallback, useEffect } from "react";
// import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";
// import { BsFillPencilFill, BsCaretDown } from "react-icons/bs";
// import { FaPlus, FaFish } from "react-icons/fa";
// import TextareaAutosize from "react-textarea-autosize";
// import Popup from "reactjs-popup";
// import Styled, { keyframes } from "styled-components";
// import { render } from "react-dom";
// import { useForm } from "react-hook-form";
// // import axios from "axios";
// // import Organization from "@components/Organization";

// const Notice = () => {
//   interface NoticeForm {
//     noticeTitle: string;
//     noticeCategories: string;
//     noticeUploader: string;
//     noticeUpdate: string;
//   }

//   const onValid = async (validForm: NoticeForm) => {
//     console.log(validForm);

//     await fetch("/api/admin", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         projectForm: validForm,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));

//     return;
//   };

//   const { register, handleSubmit, setValue } = useForm<NoticeForm>();

//   const [noticeTitle, setNoticeTitle] = useState([{ id: 0, text: "" }]);
//   const [noticeCategories, setNoticeCategories] = useState([
//     { id: 0, text: "" },
//   ]);
//   const [noticeUploader, setNoticeUploader] = useState([{ id: 0, text: "" }]);
//   const [noticeUpdate, setNoticeUpdate] = useState([{ id: 0, text: "" }]);
//   const [noticeHash, setNoticeHash] = useState([{ id: 0, text: "" }]);
//   const [noticeContent, setNoticeContent] = useState([{ id: 0, text: "" }]);

//   const [categoriesText, setCategoriesText] = useState("");
//   const [titleText, setTitleText] = useState("");
//   const [uploaderText, setUploaderText] = useState("");
//   const [updateText, setUpdateText] = useState("");
//   const [hashText, setHashText] = useState("");

//   const [contentText, setContentText] = useState("");
//   const [clickPencils, setClickPencils] = useState(false);

//   const [nextId, setNextId] = useState(1);

//   console.log(clickPencils);

//   const clickPencil = () => {
//     setClickPencils((current) => !current);
//     setValue("noticeTitle", "");
//     setValue("noticeCategories", "");
//   };

//   const onChangeNoticeTitle = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setTitleText(e.target.value);
//     },
//     []
//   );

//   const onChangeNoticeCategories = useCallback(
//     (e: React.ChangeEvent<HTMLSelectElement>) => {
//       setCategoriesText(e.target.value);
//     },
//     []
//   );

//   // 게시자
//   // const onChangeNoticeUploader = useCallback(
//   //   (e: React.ChangeEvent<HTMLInputElement>) => {
//   //     setUploaderText(e.target.value);
//   //   },
//   //   []
//   // );

//   // 게시글
//   // const onChangeNoticeUpdate = useCallback(
//   //   (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   //     setUpdateText(e.target.value);
//   //   },
//   //   []
//   // );
//   const onChangeNoticeHash = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setHashText(e.target.value);
//     },
//     []
//   );

//   const onChangeNoticeContent = useCallback(
//     (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//       setContentText(e.target.value);
//     },
//     []
//   );

//   const onClickNoticeAdd = useCallback(
//     (e: React.MouseEvent<HTMLInputElement>) => {
//       const nextnoticeTitle = noticeTitle.concat({
//         id: nextId,
//         text: titleText,
//       });
//       const nextnoticeCategories = noticeCategories.concat({
//         id: nextId,
//         text: categoriesText,
//       });
//       const nextnoticeUploader = noticeUploader.concat({
//         id: nextId,
//         text: uploaderText,
//       });
//       const nextnoticeUpdate = noticeUpdate.concat({
//         id: nextId,
//         text: updateText,
//       });

//       setNextId(nextId + 1);
//       setNoticeTitle(nextnoticeTitle);
//       setNoticeCategories(nextnoticeCategories);
//       setNoticeUploader(nextnoticeUploader);
//       setNoticeUpdate(nextnoticeUpdate);
//       setCategoriesText("");
//       setTitleText("");
//       setUploaderText("");
//       setUpdateText("");
//     },
//     [
//       noticeTitle,
//       noticeCategories,
//       noticeUploader,
//       noticeUpdate,
//       titleText,
//       categoriesText,
//       uploaderText,
//       updateText,
//       nextId,
//     ]
//   );
//   render;
//   const NoticeTitle = noticeTitle.map((noticeTitle) => (
//     <li key={noticeTitle.id}>{noticeTitle.text}</li>
//   ));
//   const NoticeCategories = noticeCategories.map((noticeCategories) => (
//     <li key={noticeCategories.id}>{noticeCategories.text}</li>
//   ));
//   const NoticeUploader = noticeUploader.map((noticeUploader) => (
//     <li key={noticeUploader.id}>{noticeUploader.text}</li>
//   ));
//   0;
//   const NoticeUpdate = noticeUpdate.map((noticeUpdate) => (
//     <li key={noticeUpdate.id}>{noticeUpdate.text}</li>
//   ));
//   const NoticeContent = noticeContent.map((noticeContent) => (
//     <li key={noticeContent.id}>{noticeContent.text}</li>
//   ));

//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setLoading(true);
//   //     try {
//   //       const response = await axios.get("");
//   //       setArticles(response.data.articles);
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //     setLoading(false);
//   //   };
//   //   fetchData();
//   // }, []);

//   if (loading) {
//     return <div>로딩중 ...</div>;
//   }
//   // if (!articles) {
//   //   return null;
//   // }

//   // const [disable, setDisable] = useState(false);

//   // const handlesSubmit = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//   //   setDisable(true);
//   //   e.preventDefault();
//   //   await new Promise((r) => setTimeout(r, 1000));
//   //   if (noticeTitle.length < 3) {
//   //     alert("분류를 선택해야 합니다.");
//   //   }
//   // };

//   // const filtered = sampleData.filter((itemList) => {
//   //   return itemList.name.toUpperCase().includes(userInput.toUpperCase());

//   return (
//     <div className="relative">
//       <PageLayout />
//       <div>
//         {/* 전체 레이아웃 */}
//         <div className="absolute w-[84vw] h-[80.8vh] left-[16em] top-[10.5em]">
//           {/* 공지사항 헤더 */}
//           <div className="w-[86vw] h-[5.1vh] mt-[1em]">
//             <h1 className="text-center text-[#0000ffb3] text-[2em] font-semibold tracking-[0.2em]">
//               공 지 사 항
//             </h1>
//             <div className="absolute top-[1.5em] left-[3.5em]">
//               <form>
//                 <input
//                   id="search"
//                   type="search"
//                   placeholder=""
//                   className="py-[0.5em] pl-[3em] pr-[2em] w-[16em] rounded-md text-center bg-[#314bdd1d] mt-[3px] hover:bg-[#314bdd35] focus:bg-[#314bdd35]"
//                 />
//               </form>
//               <div className="absolute top-[7px] text-[2em]">
//                 <AiOutlineSearch className="text-[#0000ff6a] " />
//               </div>
//             </div>
//             {/* 검색창,글쓰기 */}
//             <h2 className="absolute top-[0em] -right-[3em] w-[20vw] h-[5.2vh] mt-[1em] grid content-center">
//               <ul className="flex justify-evenly">
//                 <li className=""></li>
//                 <li></li>
//                 <li className="text-[1.7em] mt-[6px]">
//                   {/* 공지사항 글쓰기 */}
//                   <Popup
//                     trigger={
//                       <button className="">
//                         <BsFillPencilFill
//                           className="text-[#314bdd] hover:text-[#314bddb7] active:text-[#314bdd3e]"
//                           onClick={clickPencil}
//                         />
//                       </button>
//                     }
//                     modal
//                   >
//                     {/* {clickPencils ? ( */}
//                     <div className="relative">
//                       <DivOpenModalToPencil className="absolute -top-[250px] left-[350px] w-[30vw] h-[72.3vh] px-0 py-0 outline backdrop-blur-[5px] outline-[#0000ff6a] rounded-md bg-[#0000ff29]">
//                         {/* <label htmlFor="clickPencil">&times;</label> */}
//                         <input
//                           type="button"
//                           // onClick={clickPencil}
//                           // id="clickPencil"
//                         />

//                         <FormOpenModalToPencil onSubmit={handleSubmit(onValid)}>
//                           <ul>
//                             <LiOpenModalToPencil className="mt-[0.9em]">
//                               <h1 className="flex justify-center ">
//                                 <p className="text-[22px] ml-[2.5em] font-semibold">
//                                   제목
//                                 </p>
//                                 <input
//                                   {...register("noticeTitle")}
//                                   onChange={onChangeNoticeTitle}
//                                   name="noticeTitle"
//                                   id="notice title"
//                                   type="text"
//                                   placeholder="TITLE"
//                                   className="w-[24em] ml-[3.7em] px-[1em] tracking-[1px] text-center outline outline-[#0000ff6a] rounded-md"
//                                 />
//                               </h1>
//                             </LiOpenModalToPencil>
//                             <LiOpenModalToPencil className="selectBox flex justify-center mt-[0.9em] ">
//                               <BgCategory className="rounded-md">
//                                 <select
//                                   {...register("noticeCategories")}
//                                   onChange={onChangeNoticeCategories}
//                                   id="noticeCategories"
//                                   name="noticeCategories"
//                                   className="select w-[8em] pl-[0.7em] py-[0.2em] outline outline-[#0000ff6a] rounded-md bg-[#0000ff28]
//                                   text-[18px] tracking-[2px] text-center font-semibold cursor-pointer
//                                   hover:bg-[#c300ff32]"
//                                 >
//                                   <option
//                                     disabled
//                                     selected
//                                     value=""
//                                     className="absolute right-[2em]"
//                                   >
//                                     분류
//                                   </option>
//                                   <option value="사내공지">사내공지</option>
//                                   <option value="프로젝트">프로젝트</option>
//                                   <option value="설치관련">설치관련</option>
//                                   <option value="어플관련">어플관련</option>
//                                   <option value="웹관련">웹관련</option>
//                                 </select>
//                               </BgCategory>

//                               <span className="w-[10px]" />
//                               <input
//                                 onChange={onChangeNoticeHash}
//                                 id="notice hashtag"
//                                 type="text"
//                                 placeholder="#NAME"
//                                 className="w-[24em] px-[1em] outline outline-[#0000ff6a] rounded-md"
//                               />
//                             </LiOpenModalToPencil>
//                             <LiOpenModalToPencil className="flex justify-center mt-[1em]">
//                               <TextareaAutosize
//                                 onChange={onChangeNoticeContent}
//                                 id="notice textarea"
//                                 style={{
//                                   boxSizing: "border-box",
//                                   width: "28vw",
//                                   resize: "none",
//                                   height: 500,
//                                 }}
//                                 minRows={22.7}
//                                 maxRows={22.7}
//                                 placeholder="MEMO"
//                                 className="outline outline-[#0000ff6a] rounded-md "
//                               />
//                             </LiOpenModalToPencil>
//                             <li className="flex justify-end">
//                               <input
//                                 type="submit"
//                                 value="등록"
//                                 className="px-[1em] py-[0.2em] mt-[10px] mr-[1.3em] outline outline-[#0000ff6a] rounded-md font-semibold text-[#000000]
//                                 bg-[#0000ff28] hover:bg-[#0000ff5a] active:bg-[#0000ff7a] hover:outline-[#0000ff90] active:outline-[#0000ffa5]
//                                 hover:text-[white] active:text-black"
//                                 onClick={onClickNoticeAdd}
//                               />
//                             </li>
//                           </ul>
//                         </FormOpenModalToPencil>
//                       </DivOpenModalToPencil>
//                     </div>
//                     {/* ) : undefined} */}
//                   </Popup>
//                 </li>
//               </ul>
//             </h2>
//             {/* 공지사항 리스트 */}
//             <div className="mt-[2em] ml-[3.5em] w-[80vw] h-[68vh] bg-[#0000ff10] rounded-2xl">
//               <div className="flex h-[65vh] text-center text-[20px]">
//                 <div className="absoulte top-0 w-[77em] h-[2.5em] bg-[#0000ff27] rounded-2xl">
//                   <ul className="flex space-x-[30px] py-[0.6em] pl-[0.3em] text-[20px] font-bold text-[#0000ffb3]">
//                     <h3 className="w-[10%] ">분류</h3>
//                     <h3 className="w-[62%] pl-[0.4em]">게시글</h3>
//                     <h3 className="w-[13%] pl-[1em]">게시자</h3>
//                     <h3 className="w-[15%] pr-[1em]">게시일</h3>
//                   </ul>
//                   <div className="flex h-[62.5vh] overflow-y-scroll scrollbar-hide ">
//                     <ul className="w-[10%]">
//                       <div>{NoticeCategories}</div>
//                     </ul>
//                     <ul className="w-[62%] outline outline-[2px] outline-[#0000002d]">
//                       <div>
//                         {NoticeTitle}
//                         {NoticeContent}
//                       </div>
//                     </ul>
//                     <ul className="w-[13%]">
//                       <div>{NoticeUploader}</div>
//                     </ul>
//                     <ul className="w-[15%] outline outline-[2px] outline-[#0000002d]">
//                       <div>{NoticeUpdate}</div>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <Organization /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Notice);

// const colorChange =
//   100% {
//      background-color:#0000ff85;
//      color:#000000
//     }

//     50% {
//       background-color:#0000ff28;
//       color:#9a9a9a80
//     }
//     0%{
//       background-color:#0000ff85;
//       color:#000000
//     }

// `;

// const BgCategory = Styled.div`{
//   animation-name: Select;
//   animation:${colorChange} 1.2s linear infinite;

// }`;

// // Div modal

// const DivmodalToPencil =
//   100%{
//   }
//   50%{
//   }
//   0% {
//     padding-bottom: 00px;
//     margin-bottom: 00px;
//     width: 00px;
//     height:00px;
//   }
// `;

// const DivOpenModalToPencil = Styled.div`{
//   animation-name: DivOpenModalToPencil;
//   animation:${DivmodalToPencil} 0.5s;
//   position: absolute;
// }`;

// //  Form Modal

// const FormModalToPencil =
//   100%{
//   }
//   50%{
//   }
//   0% {
//     margin-bottom: 300px;
//     padding-left: 600px;

//   }
// `;

// const FormOpenModalToPencil = Styled.form`{
//   animation-name: FormOpenModalToPencil;
//   animation:${FormModalToPencil} 0.5s;
// }`;

// // Li Modal

// const LiModalToPencil =
//   100% {
//     width: 580px;
//     height: -200px;
//   }

//   0% {
//     height: 0px;
//     width: 580px;
//   }
// `;

// const LiOpenModalToPencil = Styled.li`{
//   animation-name: LiOpenModalToPencil;
//   animation:${LiModalToPencil} 0.5s;
// }`;
