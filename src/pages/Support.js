import React from 'react'

function Support() {
  return (
    <>
        <div className="w-full h-[180px] bg-[#F8F0E5]"></div>
        <div className="w-full h-[650px] bg-[url('img/support-main.png')]">
            <div className="w-[1200px] pt-[150px] pl-[200px]" >
                <div className="mb-[70px]">
                    <div className="text-[40px] text-[#F8F0E5]">여러분의 작은 손길로</div>
                    <div className="text-[40px] text-[#F8F0E5]">소중한 한 생명을</div>
                    <div className="text-[40px] text-[#F8F0E5] ">살릴 수 있습니다.</div>
                </div>
                <div className="w-[190px] h-[75px] bg-[#DAC0A3] rounded-[50px] flex justify-center items-center text-white">
                    <div className="text-white">후원하러 가기</div>
                </div>
            </div>
        </div>
        <div className="w-[1200px] h-[900px] my-0 mx-auto">
            <div className="text-center mt-[30px] text-3xl font-bold">스토어</div>
            <div className="flex justify-center items-center w-[960px] h-[75px] bg-[#f8f0e5] mt-[30px] mb-[60px] mx-auto">
                <div className="text-[25px]">스토어 수익금은 유기동물 후원 및 유기동물 입양 활동으로 사용 됩니다.</div>
            </div>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-wrap justify-between">
                    <div className="w-[270px]">
                        <img className='w-full' src="img/store1.jpg" alt="에코백" />
                        <div className="w-full py-[30px] bg-[#f8f0e5] text-[16px] text-center">
                            <div className="text-xl">믹스패밀리 에코백</div>
                            <span className='text-[17px]'>15,000</span>
                            <span className='text-[15px]'>원</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Support