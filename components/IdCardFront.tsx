import React, { forwardRef } from 'react';
import { StudentData } from '../types';
import { RuetLogo } from './icons';

interface IdCardFrontProps {
  data: StudentData;
}

export const IdCardFront = forwardRef<HTMLDivElement, IdCardFrontProps>(({ data }, ref) => {
  return (
    <div ref={ref} className="w-[336px] h-[212px] bg-white rounded-lg shadow-lg relative overflow-hidden font-sans border border-gray-200 p-2 box-border">
      {/* Background Watermark */}
      {data.watermarkPhoto && (
        <img
          src={data.watermarkPhoto}
          alt="Watermark"
          className="absolute top-0 bottom-0 right-3 my-auto w-40 h-81 object-contain opacity-20 select-none z-0"
          aria-hidden="true"
        />
      )}

      {/* Absolute Motto */}
      <p className="absolute top-1 left-0 right-0 text-center text-[8px] text-gray-600 italic z-10" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Heaven's Light Is Our Guide</p>
      
      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <div className="flex items-end space-x-3">
          <div className="flex-shrink-0 text-center">
            <RuetLogo className="w-[44px] h-[54px] mx-auto" />
          </div>
          <div className="text-left flex-grow">
             <div className="font-sans text-gray-800 leading-tight">
                <p className="font-extrabold text-[14.5px] tracking-wider">
                    <span className="text-[17.5px]">R</span>AJSHAHI <span className="text-[17.5px]">U</span>NIVERSITY OF
                </p>
                <p className="font-extrabold text-[14.5px] tracking-wider">
                    <span className="text-[17.5px]">E</span>NGINEERING & <span className="text-[17.5px]">T</span>ECHNOLOGY
                </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-grow flex mt-0.5 space-x-3">
          {/* Left Column: Photo & Signature */}
          <div className="w-[90px] flex-shrink-0 flex flex-col items-center">
            <div className="w-[90px] h-[100px] border border-gray-300 bg-gray-100 p-0.5">
              {data.photo && <img src={data.photo} alt="Student" className="w-full h-full object-cover" />}
            </div>
            <p className="text-[7px] font-semibold text-black text-center mt-0">Holder's Signature</p>
            <div className="w-full flex-grow flex items-end justify-center border-b border-gray-400 pb-0.5">
                <span className="font-signature text-xl text-gray-800">{data.signature}</span>
            </div>
          </div>
          
          {/* Right Column: Details */}
          <div className="text-[12px] font-semibold text-black flex flex-col justify-start space-y-1 flex-grow">
            <p className="text-[14px] font-bold tracking-wide">{data.fullName}</p>
            <p className="text-[13px] leading-tight font-bold">{data.department}</p>
            <p className="mt-1.5">ID Number: {data.idNumber}</p>
            <div className="grid grid-cols-[70px_auto_1fr] gap-x-1 text-[11px] items-center">
              <span>Blood Group</span><span className="font-sans">:</span><span className="font-bold">{data.bloodGroup}</span>
              <span>Contact</span><span className="font-sans">:</span><span>{data.contactNumber}</span>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute -bottom-2.5 -left-2.5 -right-2.5 h-[18px] bg-[#89c5e5] flex items-center justify-center">
           <p className="text-white font-bold text-sm tracking-[0.25em]">STUDENT</p>
        </div>
      </div>
    </div>
  );
});