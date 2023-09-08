import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { styled } from 'styled-components';
import "./../index.css"

function Info() {

  const NumChk = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // 숫자만 입력가능, 3자리마다 , 기능
  }
  const Hyphen = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/\B(?=(\d{4})+(?!\d))/g, '-');
    // 숫자만 입력가능, 4자리마다 - 기능
  }
  const Num = (e)=>{
    return e.target.value = e.target.value.replace(/[^0-9.]/g, '');
    // 숫자만 입력가능
  }

  
  const [isActive, setIsActive] = useState(true)
  // true시 새로고침해도 온클릭 상태
  const [Active, setActive] = useState(false)
  const [solo, setSolo] = useState(true)
  const [buisness, setBuisness] = useState(false)
  const [card, setCard] = useState(true)
  const [money, setMoney] = useState(-1)
  // money가 -1인 이유는 0일 경우 새로고침시 첫번째가 온클릭 상태가 되기 때문
  const navigate = useNavigate();
  const formChk = ()=>{
      if(document.querySelector(".name").value === "" || document.querySelector(".name").value === null){
        alert("이름이 비어있습니다.");
        document.querySelector(".name").focus();
        return;
      }
      if(document.querySelector(".middle-nb").value === "" || document.querySelector(".middle-nb").value === null){
        alert("중간번호가 비어있습니다.");
        document.querySelector(".middle-nb").focus();
        // .middle-nb의 값이 비었거나 null값이면 alert()창을 표시하고 포커스가 .middle-nb 위치로 이동한다.
        return;
      }
      if(document.querySelector(".end-nb").value === "" || document.querySelector(".end-nb").value === null){
        alert("끝번호가 비어있습니다.");
        document.querySelector(".end-nb").focus();
        return;
      }
      if(document.querySelector(".e-mail").value === "" || document.querySelector(".e-mail").value === null){
        alert("이메일이 비어있습니다.");
        document.querySelector(".e-mail").focus();
        return;
      }
      if(document.querySelector(".card-nb").value === "" || document.querySelector(".card-nb").value === null){
        alert("카드번호가 비어있습니다.");
        document.querySelector(".card-nb").focus();
        return;
      }
      if(document.querySelector(".month").value === "" || document.querySelector(".month").value === null){
        alert("유효기간(월)이 비어있습니다.");
        document.querySelector(".month").focus();
        return;
      }
      if(document.querySelector(".year").value === "" || document.querySelector(".year").value === null){
        alert("유효기간(년)이 비어있습니다.");
        document.querySelector(".year").focus();
        return;
      }
      if(document.querySelector(".card-name").value === "" || document.querySelector(".card-name").value === null){
        alert("카드주명이 비어있습니다.");
        document.querySelector(".card-name").focus();
        return;
      }
      if(document.querySelector(".birth").value === "" || document.querySelector(".birth").value === null){
        alert("생년월일이 비어있습니다.");
        document.querySelector(".birth").focus();
        return;
      }
      if(document.querySelector(".password").value === "" || document.querySelector(".password").value === null){
        alert("비밀번호가 비어있습니다.");
        document.querySelector(".password").focus();
        return;
      }




      navigate('/complete')
      // 위의 조건이 다 만족할 경우 navigate('/complete')의 기능으로 주소가 /complete로 이동한다.
    
  }
  


  const checkedAll = (e)=>{
    console.log(e.target)
    if(e.target.checked === true){
      document.querySelectorAll("input[type='checkbox']").forEach((el)=>{
        el.setAttribute("checked", "true")
      })
      // chekedAll의 e의 checked가 true일때 input의 타입이 checkbox인 모든것은 setAttribute로 인해 요소 checked의 요소값이 true값으로 바뀐다.
    }else{
      document.querySelectorAll("input[type='checkbox']").forEach((el)=>{
        el.removeAttribute("checked") 
        // chekedAll의 e의 checked가 true가 아닐 경우 removeAttribute로 인해 checked요소가 사라져 체크가 되지 않게한다.
      })  
    }
  }
  
  return (
    <>
        <div className="full w-full">
            <div className="w-[545px] ml-[150px] pt-[50px]">
                <div className="">
                  <NavLink to='/'><img src="http://via.placeholder.com/185x60" alt="로고" className='mb-[50px]' /></NavLink>
                </div>
                <div className="w-[500px] h-[225px] relative info">
                  <ul className="w-full h-[155px] bg-[#f8f0e5] flex justify-around items-center">
                    <li className="">
                      <p>후원하기</p>
                    </li>
                    <li className="">
                      <p>
                        유기동물들은 우리의 사랑과 돌봄을 <br />
                        필요로 합니다. 당신의 후원이 그들에게<br /> 사랑의 날개를 펼치게 해주세요.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="w-[500px] relative py-[50px] info">
                  <p className="mb-[30px] text-xl font-bold">후원하기</p>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>후원항목</p></li>
                    <div className="w-[353px] flex justify-between">
                      <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center ${isActive === true ? "color" : ""}`}  onClick={()=>{setIsActive(!isActive);setActive(false)}}><p>일시후원</p></li>
                      <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center ${Active === true ? "color" : ""}`}  onClick={()=>{setActive(!Active);setIsActive(false)}}><p>정기후원</p></li>
                    </div>
                  </ul>
                  <ul className="flex justify-between">
                    <li className="h-[30px] flex justify-center"><p>후원금액</p></li>
                    <div className="w-[353px] h-[80px] flex justify-between flex-wrap">
                      {
                        Array(5).fill().map((e,i)=>{
                          // Array(n) - 비어있는 배열을 n개 생성.
                          // fill(n) - n이란 숫자가 Array(n)의 개수만큼 배열값 생성
                          // 예) Array(5).fill(2) = [2,2,2,2,2]
                          return (
                            <li key={i} className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === i ? "color" : ""}`} onClick={()=>{setMoney(i)}}><p>{i+1}0,000원</p></li>
                          )
                        })
                      }
                      <li className="" onClick={()=>{setMoney(money === false ? true : false)}}><input type="text" placeholder="직접입력"  onInput={NumChk}  className='w-[101px] h-[28px] flex justify-center items-center text-center border-[1px] border-black' maxLength={11} /></li> 
                      {/* <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>10,000원</p></li>
                      <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>20,000원</p></li>
                      <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>30,000원</p></li>
                      <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>40,000원</p></li>
                      <li className={`w-[105px] h-[30px] flex justify-center items-center bg-[#f8f0e5] cursor-pointer ${money === true ? "color" : ""}`} onClick={()=>{setMoney(money === false ? true : false)}}><p>50,000원</p></li>
                      <li className="" onClick={()=>{setMoney(money === false ? true : false)}}><input type="text" placeholder="직접입력"  onInput={NumChk}  className='w-[101px] h-[28px] flex justify-center items-center text-center border-[1px] border-black' /></li> */}
                    </div>
                  </ul>
                </div>
                <div className="w-[500px] relative py-[50px] info">
                  <p className='text-xl mb-[30px] font-bold'>개인정보</p>
                  <ul className="flex justify-between mb-[25px]">
                    <li className='h-[43px] flex items-center'><p>구분</p></li>
                    <div className="w-[353px] flex justify-between">
                      <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center ${solo === true ? "color" : ""}`} onClick={()=>{setSolo(!solo);setBuisness(false)}}><p>개인</p></li>
                      <li className={`cursor-pointer w-40 h-[43px] bg-[#f8f0e5] flex justify-center items-center ${buisness === true ? "color" : ""}`} onClick={()=>{setBuisness(!buisness);setSolo(false)}}><p>단체(사업자)</p></li>
                    </div>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center" ><p>{buisness === true ? "단체(사업자명)" : "이름"}</p></li>
                    {/* 반복문으로 buisness가 true일때는 단체(사업자명)가 나오고 아닐경우 이름이 나옴 */}
                    <li><input type="text"  className='name w-[353px] h-[43px] text-[18px] text-center border-[1px] border-black' /></li>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>전화번호</p></li>
                    <div className="flex w-[353px] justify-between">
                      <li className="">
                        <select className='flex flex-wrap w-[95px] h-10 border-[1px] border-black text-center text-[17px]'>
                          <option value="0">010</option>
                          <option value="1">011</option>
                          <option value="2">016</option>
                          <option value="3">017</option>
                          <option value="4">018</option>
                          <option value="5">019</option>
                        </select>
                      </li>
                      <li className=""><input type="text" className='middle-nb w-[95px] h-10 border-[1px] border-black text-center text-[17px]' maxLength={4} onInput={Num} /></li>
                      <li className=""><input type="text" className='end-nb w-[95px] h-10 border-[1px] border-black text-center text-[17px]' maxLength={4} onInput={Num} /></li>
                    </div>
                  </ul>
                  <ul className="flex justify-between">
                    <li className="h-[43px] flex items-center"><p>이메일</p></li>
                    <li className=""><input type="text" className='e-mail w-[353px] h-10 border-[1px] border-black text-center text-[18px]' /></li>
                  </ul>
                </div>
                <div className="info w-[500px] relative py-[50px] info">
                  <p className="text-xl mb-[30px] font-bold">결제정보</p>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>결제수단</p></li>
                    <div className="w-[353px] h-[43px]">
                      <li className={`w-40 h-full bg-[#f8f0e5] flex justify-center items-center cursor-pointer ${card === true ? "color" : ""}`} onClick={()=>setCard(card === false ? true : false)}><p>신용카드</p></li>
                    </div>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center" ><p>카드번호</p></li>
                    <li className=""><input type="text"  className='card-nb w-[353px] h-10 border-[1px] border-black text-center text-[18px]' onInput={Hyphen} maxLength={19} /></li>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>유효기간</p></li>
                    <div className="w-[353px] flex justify-between">
                      <li className=""><input type="text" placeholder='MM' maxLength={2}  className='month w-[160px] h-10 border-[1px] border-black text-center text-[18px]' onInput={Num} /></li>
                      <li className=""><input type="text" placeholder='YY' maxLength={2}  className='year w-[160px] h-10 border-[1px] border-black text-center text-[18px]' onInput={Num} /></li>
                    </div>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>카드주명</p></li>
                    <li className=""><input type="text" className='card-name w-[353px] h-10 border-[1px] border-black text-center text-[18px]' /></li>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>생년월일</p></li>
                    <li className=""><input type="text" onInput={Num} maxLength={buisness === true ? 10 : 6} placeholder='주민번호 앞 6자리(또는 사업자번호)' className='birth w-[353px] h-10 border-[1px] border-black text-center text-[18px]' /></li>
                  </ul>
                  <ul className="flex justify-between mb-[25px]">
                    <li className="h-[43px] flex items-center"><p>비밀번호</p></li>
                    <li className=""><input type="text" onInput={Num} maxLength={2} placeholder='카드 비밀번호 앞 2자리' className='password w-[353px] h-10 border-[1px] border-black text-center text-[18px]' /></li>
                  </ul>
                  <ul className='flex justify-between mb-[25px]' style={{display: Active === true ? "flex" : "none"}}>
                    <li className="h-[43px] flex items-center"><p>결제일</p></li>
                    <div className="w-[353px] h-[43px] relative">
                      <select className='w-40 h-10 text-center text-[17px] border-[1px] border-black'>
                        <option value="0">매월 10일</option>
                        <option value="1">매월 20일</option>
                        <option value="2">매월 30일</option>
                      </select>
                    </div>
                  </ul>
                  <ul className="w-full block bg-[#f8f0e5] py-[30px] pl-5">
                    <li className='font-bold mb-[10px]'><p>[출금정책 안내]</p></li>
                    <li className='text-[13px] mb-[5px]'><p>* 일시후원은 당일 바로 결제됩니다.</p></li>
                    <li className='text-[13px] mb-[5px]'><p>* 정기출금일은 매월 10, 20, 30일입니다.</p></li>
                    <li className='text-[13px] mb-[5px]'><p>* 첫 후원금은 지정일이 아닌 가까운 정기출금일에 출금될 수 있습니다.</p></li>
                    <li className='text-[13px] mb-[5px] text-[#a37541]'><p>예) 지정일은 10일이나 첫 후원금은 30일에 출금</p></li>
                    <li className='text-[13px] mb-[5px]'><p>* 지정일에 미출금된 경우 다음달에 합산 출금될 수 있습니다.</p></li>
                    <li className='text-[13px] mb-[5px] text-[#a37541]'><p>예) 5월분 1만원의 미출금으로 6월에 5,6월분 합계인 2만원이 출금</p></li>
                  </ul>
                </div>
                <div className="py-[50px] relative w-[500px]">
                  <div className="mb-[30px]">
                    <input type="checkbox" id='all' onInput={checkedAll} />
                    <label htmlFor='all' className='ml-2' >전체 동의하기</label>
                  </div>
                  <div className="mb-[10px]">
                    <input type="checkbox" id='use' />
                    <label htmlFor='use' className='ml-2' >[필수] 이용약관 동의<NavLink to='/'>[보기]</NavLink></label>
                  </div>
                  <div className="mb-[10px]">
                    <input type="checkbox" id='policy'/>
                    <label htmlFor='policy' className='ml-2'>[필수] 이용약관 동의<NavLink to='/'>[보기]</NavLink></label>
                  </div>
                  <button onClick={formChk} className='w-[165px] h-[43px] bg-[#dac0a3] text-white my-0 mx-auto flex justify-center items-center mt-[50px]' >결제하기</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info