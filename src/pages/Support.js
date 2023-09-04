import React from 'react'
import { NavLink } from 'react-router-dom'

function Support() {
  return (
    <>
        <div className="w-full h-[180px] bg-[#F8F0E5]"></div>
        <div className="support w-full h-[650px]">
            <div className="w-[1200px] pt-[150px] pl-[200px]" >
                <div className="mb-[70px]">
                    <p className="text-[40px] text-[#F8F0E5]">여러분의 작은 손길로</p>
                    <p className="text-[40px] text-[#F8F0E5]">소중한 한 생명을</p>
                    <p className="text-[40px] text-[#F8F0E5] ">살릴 수 있습니다.</p>
                </div>
                <div className="">
                    <NavLink to="/info" className="w-[190px] h-[75px] bg-[#DAC0A3] rounded-[50px] flex justify-center items-center text-white text-xl">후원하러 가기</NavLink>
                </div>
            </div>
        </div>
        <div className="w-[1200px] h-[900px] my-0 mx-auto">
            <div className="text-center mt-[30px] text-3xl font-bold">스토어</div>
            <div className="flex justify-center items-center w-[960px] h-[75px] bg-[#f8f0e5] mt-[30px] mb-[60px] mx-auto">
                <p className="text-[25px]">스토어 수익금은 유기동물 후원 및 유기동물 입양 활동으로 사용 됩니다.</p>
            </div>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-wrap justify-between">
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store1.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 에코백</p>
                                <span className='text-[17px] font-bold'>14,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store2.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 하네스</p>
                                <span className='text-[17px] font-bold'>19,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store3.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 뱃지</p>
                                <span className='text-[17px] font-bold'>4,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store4.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 리유저블 컵</p>
                                <span className='text-[17px] font-bold'>17,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store5.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 키링</p>
                                <span className='text-[17px] font-bold'>2,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store6.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 마스킹 테이프</p>
                                <span className='text-[17px] font-bold'>1,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store7.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 컵</p>
                                <span className='text-[17px] font-bold'>19,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="w-[270px]">
                        <NavLink to='/'>
                            <img src="img/store8.jpg" alt="1" className="w-full" />
                            <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                                <p className="text-xl">믹스패밀리 동물 인형</p>
                                <span className='text-[17px] font-bold'>14,900</span>
                                <span className='text-[15px]'>원</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Support